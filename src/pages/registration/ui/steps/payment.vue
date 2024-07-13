<template>
  <div class="step-wrapper">
    <ui-typography
      variant="HeadlineH4"
      class="mb-24"
    >
      4. Оплата
    </ui-typography>
    <ui-typography
      variant="Body4"
      class="mb-24"
    >
      Необходимо оплатить сим-карты в течение 5 дней или они будут заблокированы.
    </ui-typography>
    <div
      v-if="slots['price-card']"
      class="mb-24"
    >
      <slot name="price-card" />
    </div>
    <slot name="payment-block" />
  </div>
</template>

<script setup lang="ts">
import { UiTypography } from '@/shared/ui/ui-typography';

const slots = defineSlots<{
  'price-card'?: () => void;
  'payment-block'?: () => void;
}>();
</script>

<style lang="scss" scoped>
.step-wrapper {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
</style>
