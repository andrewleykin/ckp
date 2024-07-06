<template>
  <main>
    <ui-success
      v-if="isSuccess"
      title="Номер заблокирован"
    />
    <template v-else>
      <ui-typography variant="HeadlineH3">Замена выданного номера</ui-typography>
      <div class="group">
        <ui-input-phone v-model="formData.number">Номер телефона</ui-input-phone>
        <ui-input v-model="formData.inn">ИНН клиента</ui-input>
        <ui-input-phone v-model="formData.newNumber">Новый номер</ui-input-phone>
        <icc-input v-model="formData.iccEnd" />
      </div>
      <ui-button @click="saveNewPhone">Подтвердить</ui-button>
    </template>
  </main>
</template>

<script lang="ts" setup>
import { useNotification } from '@kyvg/vue3-notification';
import { AxiosError } from 'axios';
import { ref } from 'vue';

import { api, type ReplaceSimcardDto } from '@/shared/api';
import { PHONE_LENGTH } from '@/shared/config';
import { IccInput } from '@/shared/ui/icc-input';
import { UiButton } from '@/shared/ui/ui-button';
import { UiInput, UiInputPhone } from '@/shared/ui/ui-input';
import { UiSuccess } from '@/shared/ui/ui-success';
import { UiTypography } from '@/shared/ui/ui-typography';

const { notify } = useNotification();

const formData = ref<ReplaceSimcardDto>({
  number: '',
  newNumber: '',
  inn: '',
  iccEnd: '',
});
const isLoading = ref(false);
const isSuccess = ref(false);

const saveNewPhone = async () => {
  if (isLoading.value) return;

  if (
    formData.value.number.length !== PHONE_LENGTH ||
    formData.value.newNumber.length !== PHONE_LENGTH ||
    !formData.value.inn ||
    !formData.value.iccEnd
  ) {
    notify({
      title: 'Некорректные данные',
      type: 'warn',
    });

    return;
  }

  isLoading.value = true;

  try {
    await api.simcard.replace(formData.value);

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
