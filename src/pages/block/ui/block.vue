<template>
  <main>
    <ui-success
      v-if="isSuccess"
      title="Номер заблокирован"
    />
    <template v-else>
      <ui-typography
        variant="HeadlineH3"
        class="mb-24"
      >
        Блокировка выданного номера
      </ui-typography>
      <div class="group mb-32">
        <ui-input-phone v-model="formData.number">Номер телефона</ui-input-phone>
        <ui-input v-model="formData.inn">ИНН клиента</ui-input>
      </div>
      <ui-button
        :is-loading="isLoading"
        @click="acceptBlock"
      >
        Подтвердить
      </ui-button>
    </template>
  </main>
</template>

<script lang="ts" setup>
import { useNotification } from '@kyvg/vue3-notification';
import { AxiosError } from 'axios';
import { ref } from 'vue';

import type { BlockSimcardDto } from '@/shared/api';
import { api } from '@/shared/api';
import { PHONE_LENGTH } from '@/shared/config';
import { UiButton } from '@/shared/ui/ui-button';
import { UiInput, UiInputPhone } from '@/shared/ui/ui-input';
import { UiSuccess } from '@/shared/ui/ui-success';
import { UiTypography } from '@/shared/ui/ui-typography';

const { notify } = useNotification();

const formData = ref<BlockSimcardDto>({
  number: '',
  inn: '',
});
const isLoading = ref(false);
const isSuccess = ref(false);

const acceptBlock = async () => {
  if (isLoading.value) return;

  if (formData.value.number.length !== PHONE_LENGTH || !formData.value.inn) {
    notify({
      title: 'Некорректные данные',
      type: 'warn',
    });

    return;
  }

  isLoading.value = true;
  try {
    await api.simcard.block(formData.value);

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
}
</style>
