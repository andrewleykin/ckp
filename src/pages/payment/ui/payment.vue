<template>
  <main>
    <ui-typography variant="HeadlineH3">Оплата SIM карт</ui-typography>
    <div class="group">
      <ui-input-phone
        v-model="formData.phoneNumber"
        :readonly="Boolean(paymentUrl)"
      >
        Номер телефона
      </ui-input-phone>
      <ui-input
        v-model="formData.inn"
        :readonly="Boolean(paymentUrl)"
      >
        ИНН клиента
      </ui-input>
    </div>
    <payment-block
      v-if="paymentUrl"
      :payment-url="paymentUrl"
    />
    <ui-button
      v-else
      @click="acceptPayment"
    >
      Подтвердить
    </ui-button>
  </main>
</template>

<script lang="ts" setup>
import { useNotification } from '@kyvg/vue3-notification';
import { AxiosError } from 'axios';
import { ref } from 'vue';

import type { FindByParams } from '@/shared/api';
import { api } from '@/shared/api';
import { PHONE_LENGTH } from '@/shared/config';
import { PaymentBlock } from '@/shared/ui/payment-block';
import { UiButton } from '@/shared/ui/ui-button';
import { UiInput, UiInputPhone } from '@/shared/ui/ui-input';
import { UiTypography } from '@/shared/ui/ui-typography';

const { notify } = useNotification();

const formData = ref<FindByParams>({
  phoneNumber: '',
  inn: '',
});
const isLoading = ref(false);
const isSuccess = ref(false);
const paymentUrl = ref();

const acceptPayment = async () => {
  if (isLoading.value) return;

  if (formData.value.phoneNumber.length !== PHONE_LENGTH || !formData.value.inn) {
    notify({
      title: 'Некорректные данные',
      type: 'warn',
    });

    return;
  }

  isLoading.value = true;
  try {
    const { data: shipment } = await api.shipmentController.findBy(formData.value);

    if (!shipment.id) {
      notify({
        title: 'Некорректные данные оплаты',
        type: 'warn',
      });

      return;
    }

    const { data } = await api.tinkoffPayment.payTinkoff({
      shipmentIds: [shipment.id],
    });

    if (!data.paymentURL) {
      notify({
        title: 'Некорректная ссылка оплаты. Обратитесь в поддержку',
        type: 'warn',
      });

      return;
    }

    paymentUrl.value = data.paymentURL;

    isSuccess.value = true;
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
</script>

<style lang="scss" scoped>
.group {
  display: grid;
  grid-template-columns: 200px 200px;
  gap: 14px;
  margin-top: 24px;
  margin-bottom: 32px;
}
</style>
