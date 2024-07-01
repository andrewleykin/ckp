<template>
  <div
    class="ui-alert"
    :class="[props.type]"
  >
    <ui-icon
      v-if="props.icon"
      :name="props.icon"
      :color="iconColorByType"
      size="20px"
    />
    <ui-typography variant="Body4">
      <slot />
    </ui-typography>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { UiIcon, type UiIconColor, type UiIconNames } from '@/shared/ui/ui-icon';
import { UiTypography } from '@/shared/ui/ui-typography';

import type { UiAlertType } from './types';

const props = withDefaults(defineProps<{ icon?: UiIconNames; type?: UiAlertType }>(), {
  type: 'success',
  icon: undefined,
});

const iconColorByType = computed<UiIconColor>(() => {
  const colorMap: Record<UiAlertType, UiIconColor> = {
    success: 'additional-green',
  };

  return colorMap[props.type];
});
</script>

<style lang="scss" scoped>
.ui-alert {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 18px;
  border-radius: 10px;
  background-color: var(--background-color);
  border: 1px solid var(--border-color);

  &.success {
    --background-color: var(--additional-green-05);
    --border-color: var(--additional-green);
  }
}
</style>
