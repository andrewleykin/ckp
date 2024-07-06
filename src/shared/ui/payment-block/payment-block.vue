<template>
  <div class="payment-block">
    <a :href="props.paymentUrl">
      <ui-button>Оплатить сейчас</ui-button>
    </a>
    <ui-typography variant="Body4">или</ui-typography>
    <ui-input
      :model-value="props.paymentUrl"
      class="payment-block__link-input"
    >
      Скопировать ссылку на оплату
      <template #after>
        <ui-icon
          v-tooltip="{ content: 'Ссылка скопирована', showTriggers: ['click'], delay: 0 }"
          class="payment-block__link-input-icon"
          name="document-link"
          size="22px"
          @click="copyText(props.paymentUrl)"
        />
      </template>
    </ui-input>
  </div>
</template>

<script lang="ts" setup>
import { copyText } from '@/shared/lib';
import { UiButton } from '@/shared/ui/ui-button';
import { UiIcon } from '@/shared/ui/ui-icon';
import { UiInput } from '@/shared/ui/ui-input';
import { UiTypography } from '@/shared/ui/ui-typography';

const props = defineProps<{
  paymentUrl: string;
}>();
</script>

<style lang="scss" scoped>
.payment-block {
  display: flex;
  align-items: center;
  gap: 42px;
}

.payment-block__link-input {
  min-width: 350px;
}

.payment-block__link-input-icon {
  cursor: pointer;
}
</style>
