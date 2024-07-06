<template>
  <div class="simcards-enter">
    <ui-typography variant="HeadlineH3">Заполнение данных SIM карт</ui-typography>
    <div class="group">
      <div class="phone-list">
        <div class="phone-block">
          <ui-typography
            variant="Body5"
            color="gray"
          >
            №
          </ui-typography>
          <ui-typography
            variant="Body5"
            color="gray"
          >
            Номер телефона
          </ui-typography>
          <ui-typography
            variant="Body5"
            color="gray"
          >
            <icc-label />
          </ui-typography>
        </div>
        <div
          v-for="(phone, index) in phoneList"
          :key="phone.id"
          class="phone-block"
        >
          <ui-typography
            variant="Body4"
            color="black"
          >
            {{ index + 1 }}
          </ui-typography>
          <ui-input-phone
            v-model="phone.simNumber"
            :error-text="phone.errorText"
          />
          <icc-input
            v-model="phone.iccLastFourDigits"
            :is-show-label="false"
          />
          <ui-icon
            v-if="phoneList.length > 1"
            class="delete-phone"
            name="close"
            color="black"
            size="24px"
            @click="deletePhoneById(phone.id)"
          />
        </div>
        <ui-typography
          class="add-phone"
          variant="Body5"
          color="additional-dark-blue"
          @click="addPhone"
        >
          + Добавить номер
        </ui-typography>
      </div>
      <div class="image-card">
        <img
          src="./card.png"
          alt="Изображение SIM карты"
        />
      </div>
    </div>
    <ui-checkbox
      v-model="isAcceptOffer"
      class="checkbox"
    >
      Вы даёте подтверждение, что ознакомлены с условиями предоставления услуг (<ui-typography
        variant="Body4"
        color="additional-blue"
        component="a"
        :href="DOMAIN"
        target="_blank"
        rel="noopener noreferrer"
        >{{ DOMAIN }}</ui-typography
      >).
    </ui-checkbox>
    <ui-button @click="validateSim">Продолжить</ui-button>
  </div>
</template>

<script lang="ts" setup>
import { useNotification } from '@kyvg/vue3-notification';
import { AxiosError } from 'axios';
import { ref } from 'vue';

import type { PartnerView, SimIccModel } from '@/shared/api';
import { api } from '@/shared/api';
import { DOMAIN, PHONE_LENGTH } from '@/shared/config';
import { IccInput, IccLabel } from '@/shared/ui/icc-input';
import { UiButton } from '@/shared/ui/ui-button';
import { UiCheckbox } from '@/shared/ui/ui-checkbox';
import { UiIcon } from '@/shared/ui/ui-icon';
import { UiInputPhone } from '@/shared/ui/ui-input';
import { UiTypography } from '@/shared/ui/ui-typography';

import { convertClientSimIccModelToBackend } from '../lib';
import type { ClientSimIccModel } from '../types';

const emit = defineEmits<{
  'update:partner': [partner?: PartnerView];
  'update:simcards': [simcards: SimIccModel[]];
}>();

const { notify } = useNotification();

const phoneList = ref<ClientSimIccModel[]>([
  {
    id: 0,
    simNumber: '',
    iccLastFourDigits: '',
  },
]);
const isAcceptOffer = ref(false);

const addPhone = () => {
  phoneList.value.push({
    id: (phoneList.value.at(-1)?.id ?? 0) + 1,
    simNumber: '',
    iccLastFourDigits: '',
  });
};

const deletePhoneById = (id: ClientSimIccModel['id']) => {
  phoneList.value = phoneList.value.filter((phone) => phone.id !== id);
};

const validateSim = async () => {
  try {
    const simcards = phoneList.value.map(convertClientSimIccModelToBackend);

    const isValidSimcards = simcards.every(
      ({ simNumber, iccLastFourDigits }) => simNumber.length === PHONE_LENGTH || iccLastFourDigits,
    );

    if (!isValidSimcards) {
      notify({
        title: 'Некорректные данные',
        type: 'warn',
      });

      return;
    }

    if (!isAcceptOffer.value) {
      notify({
        title: 'Вы должны согласиться с условиями предоставления услуг',
        type: 'warn',
      });
      return;
    }

    const { data } = await api.simcard.validateSim({
      simcards,
    });

    if (!data.valid) {
      if (data.error) {
        notify({
          title: 'Произошла ошибка',
          text: data.error,
          type: 'error',
        });
      }

      data.simcardErrors?.forEach((simcardError) => {
        const phoneItem = phoneList.value.find((phone) => phone.simNumber === simcardError.simNumber);

        if (phoneItem) {
          phoneItem.errorText = simcardError.reason;
        }
      });

      return;
    }

    emit('update:partner', data.partner);
    emit('update:simcards', simcards);
  } catch (error) {
    if (error instanceof AxiosError) {
      notify({
        title: 'Произошла ошибка',
        text: error.message,
        type: 'error',
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.simcards-enter {
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 100%;
  max-width: 870px;
}

.group {
  flex: auto;
  display: flex;
  justify-content: space-between;
  gap: 16px;
}

.image-card {
  max-width: 305px;

  img {
    width: 100%;
  }
}

.phone-block {
  display: grid;
  align-items: center;
  grid-template-columns: 14px 200px 100px 24px;
  gap: 16px;

  &:first-child {
    margin-bottom: -4px;
  }

  & + & {
    margin-top: 12px;
  }
}

.delete-phone {
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    fill: var(--text-gray);
  }
}

.add-phone {
  margin-top: 8px;
  cursor: pointer;
  padding: 10px 4px;
  display: block;
  transition: all 0.2s;

  &:hover {
    color: var(--additional-blue);
  }
}

.checkbox {
  margin-bottom: 8px;
}
</style>
