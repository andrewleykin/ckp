<template>
  <div class="icc-label">
    Код ICC
    <ui-icon
      v-tooltip="'Уникальный серийный номер SIM-карты'"
      class="icc-label__icon"
      name="info"
      size="16px"
      color="gray"
    />
  </div>
</template>

<script setup lang="ts">
import { UiIcon } from '@/shared/ui/ui-icon';
</script>

<style lang="scss" scoped>
.icc-label {
  display: flex;
  align-items: center;
  gap: 8px;
}

.icc-label__icon {
  margin-top: -2px;
}
</style>
