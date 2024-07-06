<template>
  <div class="step-wrapper">
    <ui-typography variant="HeadlineH4">2. Информация об ответственном лице</ui-typography>
    <div class="group">
      <ui-input v-model="client.accountableName">ФИО ответственного за sim карту</ui-input>
      <ui-input-phone v-model="client.accountablePhoneNumber">
        Номер телефона ответственного за sim карту
      </ui-input-phone>
      <ui-input v-model="client.bossName">ФИО руководителя клиента</ui-input>
      <ui-input v-model="client.email">Электронная почта клиента (не обязательно)</ui-input>
    </div>
    <ui-button @click="nextStep">Продолжить</ui-button>
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

import type { ClientDto } from '@/shared/api';
import { UiButton } from '@/shared/ui/ui-button';
import { UiInput, UiInputPhone } from '@/shared/ui/ui-input';
import { UiTypography } from '@/shared/ui/ui-typography';

const client = defineModel<ClientDto>('client', { required: true });

const slots = defineSlots<{
  'price-card'?: () => void;
}>();

const emit = defineEmits<{
  'next-step': [];
}>();

const { notify } = useNotification();

const nextStep = () => {
  if (!client.value.accountableName || !client.value.accountablePhoneNumber || !client.value.bossName) {
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
  gap: 24px;
  height: 100%;
}

.group {
  display: grid;
  grid-template-columns: 366px 366px;
  gap: 14px 18px;
  margin-bottom: 8px;
}

.price-card {
  margin-top: auto;
}
</style>
