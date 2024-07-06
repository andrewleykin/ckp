<template>
  <ui-card class="price-card">
    <div class="item">
      <ui-typography
        variant="Body5"
        color="gray"
      >
        Кол-во SIM
      </ui-typography>
      <ui-typography
        variant="Body2"
        color="black"
      >
        {{ props.count }}
      </ui-typography>
    </div>
    <span class="divider" />
    <div class="item">
      <ui-typography
        variant="Body5"
        color="gray"
      >
        Итоговая стоимость
      </ui-typography>
      <ui-typography
        variant="Body2"
        color="black"
      >
        {{ props.totalPrice }}
      </ui-typography>
    </div>
    <span class="divider" />
    <div class="item">
      <ui-typography
        variant="Body5"
        color="gray"
      >
        Срок оказания услуг
      </ui-typography>
      <ui-typography
        variant="Body2"
        color="black"
      >
        {{ props.durationOfService }}
      </ui-typography>
    </div>
  </ui-card>
</template>

<script setup lang="ts">
import { UiCard } from '@/shared/ui/ui-card';
import { UiTypography } from '@/shared/ui/ui-typography';

const props = defineProps<{
  count: number;
  totalPrice: number;
  durationOfService: string;
}>();
</script>

<style lang="scss" scoped>
.price-card {
  display: flex;
  justify-content: space-around;
}

.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.divider {
  display: block;
  width: 2px;
  background-color: var(--divider-gray);
}
</style>
