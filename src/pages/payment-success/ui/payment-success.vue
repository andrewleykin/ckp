<template>
  <main>
    <ui-success title="Оплата прошла успешно">
      <info-card />
    </ui-success>
  </main>
</template>

<script lang="ts" setup>
import { useNotification } from '@kyvg/vue3-notification';
import { AxiosError } from 'axios';
import { useRoute } from 'vue-router';

import { api } from '@/shared/api';
import { InfoCard } from '@/shared/ui/info-card';
import { UiSuccess } from '@/shared/ui/ui-success';

const { notify } = useNotification();
const route = useRoute();

const confirmPayment = async () => {
  if (typeof route.params.id !== 'string') {
    notify({
      title: 'Ошибка подтверждения оплаты. Обратитесь в поддержку',
      type: 'error',
    });

    return;
  }

  try {
    await api.tinkoffPayment.confirmTinkoff({
      paymentId: route.params.id,
    });
  } catch (error) {
    if (error instanceof AxiosError) {
      notify({
        title: 'Произошла ошибка одтверждения оплаты. Обратитесь в поддержку',
        text: error.message,
        type: 'error',
      });
    }
  }
};

confirmPayment();
</script>
