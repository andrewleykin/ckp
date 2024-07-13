<template>
  <div class="step-wrapper">
    <ui-typography
      variant="HeadlineH4"
      class="mb-24"
    >
      3. Дополнительная информация
    </ui-typography>
    <div class="group mb-32">
      <ui-input v-model="salesman">Сотрудник принявший заявление</ui-input>
      <ui-input-date
        :model-value="props.partner.createdDate"
        readonly
      >
        Дата выставления счета
      </ui-input-date>
      <ui-input
        :model-value="props.partner.name"
        readonly
        class="name"
      >
        Наименование партнера
      </ui-input>
    </div>
    <ui-button
      :is-loading="props.isLoading"
      @click="nextStep"
    >
      Продолжить
    </ui-button>
    <div
      v-if="slots['price-card']"
      class="price-card"
    >
      <slot name="price-card" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNotification } from '@kyvg/vue3-notification';

import type { PartnerView } from '@/shared/api';
import { UiButton } from '@/shared/ui/ui-button';
import { UiInput, UiInputDate } from '@/shared/ui/ui-input';
import { UiTypography } from '@/shared/ui/ui-typography';

const salesman = defineModel<string>('salesman', { required: true });

const props = defineProps<{
  partner: PartnerView;
  isLoading: boolean;
}>();

const slots = defineSlots<{
  'price-card'?: () => void;
}>();

const emit = defineEmits<{
  'next-step': [];
}>();

const { notify } = useNotification();

const nextStep = () => {
  if (!salesman.value) {
    notify({
      title: 'Некорректные данные',
      type: 'warn',
    });

    return;
  }

  emit('next-step');
};
</script>

<style lang="scss" scoped>
.step-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.group {
  display: grid;
  grid-template-columns: 366px 163px;
  gap: 14px 18px;

  .name {
    grid-column: 1 / 3;
  }
}

.price-card {
  margin-top: auto;
}
</style>
