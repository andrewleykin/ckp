<template>
  <div
    v-if="currentStep !== ClientInfoEnterStep.MANUAL_SUCCESS"
    class="header"
  >
    <ui-steps
      v-model:current-step="currentStep"
      :steps="getSteps(stepList)"
      :is-changeable="false"
      class="steps"
      :class="{ 'is-tinkoff': isTinkoffPaymentType }"
    />
  </div>
  <component
    :is="stepComponent"
    v-model:client="registrationRequest.client"
    v-model:salesman="registrationRequest.salesman"
    :partner="partner"
    :is-loading="isLoading"
    @next-step="nextStep"
  >
    <template
      v-if="isTinkoffPaymentType"
      #price-card
    >
      <price-card
        class="price-card"
        :count="registrationRequest.simcards.length"
      />
    </template>
    <template
      v-if="isTinkoffPaymentType && currentStep === ClientInfoEnterStep.PAYMENT"
      #payment-block
    >
      <payment-block
        v-if="paymentUrl"
        :payment-url="paymentUrl"
      />
    </template>
  </component>
</template>

<script setup lang="ts">
import { useNotification } from '@kyvg/vue3-notification';
import { AxiosError } from 'axios';
import { computed, defineAsyncComponent, markRaw, ref, watch } from 'vue';

import type { PartnerView, RegistrationRequest, SimIccModel } from '@/shared/api';
import { api, PartnerViewDefaultPaymentTypeEnum } from '@/shared/api';
import { PaymentBlock } from '@/shared/ui/payment-block';
import { PriceCard } from '@/shared/ui/price-card';
import { UiSteps } from '@/shared/ui/ui-steps';

import { getClientInfoEnterSteps, getSteps } from '../config';
import { ClientInfoEnterStep } from '../types';

const props = defineProps<{
  partner: PartnerView;
  simcards: SimIccModel[];
}>();

const { notify } = useNotification();

const isLoading = ref(false);
const paymentUrl = ref('');
const registrationRequest = ref<RegistrationRequest>({
  simcards: [],
  client: {
    name: '',
    bossName: '',
    accountableName: '',
    accountablePhoneNumber: '',
    email: '',
    inn: '',
    kpp: '',
    address: '',
  },
  salesman: '',
});

const stepList = computed(() => getClientInfoEnterSteps(props.partner.defaultPaymentType));
const currentStep = ref<ClientInfoEnterStep>(stepList.value[0]);

const stepComponent = computed(() => {
  const stepComponentMap: Record<ClientInfoEnterStep, any> = {
    [ClientInfoEnterStep.COMMON_INFO]: markRaw(defineAsyncComponent(() => import('./steps/common-info.vue'))),
    [ClientInfoEnterStep.ACCOUNTABLE_INFO]: markRaw(defineAsyncComponent(() => import('./steps/accountable-info.vue'))),
    [ClientInfoEnterStep.ADDITIONAL_INFO]: markRaw(defineAsyncComponent(() => import('./steps/additional-info.vue'))),
    [ClientInfoEnterStep.PAYMENT]: markRaw(defineAsyncComponent(() => import('./steps/payment.vue'))),
    [ClientInfoEnterStep.MANUAL_SUCCESS]: markRaw(defineAsyncComponent(() => import('./steps/manual-success.vue'))),
  };

  return stepComponentMap[currentStep.value];
});

const isTinkoffPaymentType = computed(() => {
  return props.partner.defaultPaymentType === PartnerViewDefaultPaymentTypeEnum.TINKOFF_ACQUIRING;
});

const isManualPaymentType = computed(() => {
  return props.partner.defaultPaymentType === PartnerViewDefaultPaymentTypeEnum.MANUAL;
});

const register = async () => {
  isLoading.value = true;
  try {
    const {
      data: { shipmentIds },
    } = await api.simcard.register(registrationRequest.value);

    if (isTinkoffPaymentType.value) {
      const {
        data: { paymentURL },
      } = await api.tinkoffPayment.payTinkoff({ shipmentIds });
      paymentUrl.value = paymentURL ?? '';
      currentStep.value = ClientInfoEnterStep.PAYMENT;
      return;
    }

    if (isManualPaymentType.value) {
      await api.manualPayment.payManually({ shipmentIds });
      currentStep.value = ClientInfoEnterStep.MANUAL_SUCCESS;
      return;
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      notify({
        title: 'Произошла ошибка',
        text: error.message,
        type: 'error',
      });
    }
  } finally {
    isLoading.value = false;
  }
};

const nextStep = async () => {
  if (currentStep.value > stepList.value.length - 1) return;

  if (currentStep.value === ClientInfoEnterStep.ADDITIONAL_INFO) {
    await register();
    return;
  }

  currentStep.value = stepList.value[currentStep.value + 1];
};

watch(
  () => props.simcards,
  () => {
    registrationRequest.value.simcards = props.simcards;
  },
  { immediate: true, deep: true },
);
</script>

<style lang="scss" scoped>
.header {
  min-height: 90px;
  background-color: var(--background-white);
  display: flex;
  align-items: center;
  padding-left: 56px;
  border-bottom: 1px solid var(--divider-gray);
  margin-bottom: 32px;

  margin-top: calc(-1 * var(--main-padding-y));
  width: calc(100% + var(--main-padding-x) * 2);
  transform: translateX(calc(-1 * var(--main-padding-x)));
}

.steps {
  max-width: 644px;

  &.is-tinkoff {
    max-width: 820px;
  }
}

.price-card {
  max-width: 640px;
}
</style>
