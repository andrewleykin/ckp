<template>
  <div class="step-wrapper">
    <ui-typography
      variant="HeadlineH4"
      class="title"
    >
      4. Оплата
    </ui-typography>
    <ui-typography variant="Body4">
      Необходимо оплатить сим-карты в течение 5 дней или они будут заблокированы.
    </ui-typography>
    <slot name="price-card" />
    <slot name="payment-block" />
  </div>
</template>

<script setup lang="ts">
import { UiTypography } from '@/shared/ui/ui-typography';

defineSlots<{
  'price-card'?: () => void;
  'payment-block'?: () => void;
}>();
</script>

<style lang="scss" scoped>
.step-wrapper {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.title {
  margin-bottom: 8px;
}
</style>
