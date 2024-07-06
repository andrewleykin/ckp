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
        {{ totalPrice }}
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
        {{ durationOfService }}
      </ui-typography>
    </div>
  </ui-card>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { DEFAULT_PERIOD_MONTH, DEFAULT_PRICE_ONE_SIM } from '@/shared/config';
import { separateThousand } from '@/shared/lib';
import { UiCard } from '@/shared/ui/ui-card';
import { UiTypography } from '@/shared/ui/ui-typography';

const props = defineProps<{
  count: number;
}>();

const totalPrice = computed(() => `${separateThousand(props.count * DEFAULT_PRICE_ONE_SIM)} рублей`);
const durationOfService = computed(() => `${DEFAULT_PERIOD_MONTH} месяцев`);
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
