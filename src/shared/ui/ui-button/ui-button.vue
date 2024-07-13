<template>
  <button
    :disabled="props.isDisabled"
    :class="['ui-button', props.size, { 'is-loading': props.isLoading }]"
  >
    <ui-typography
      component="span"
      :variant="buttonTypographyBySize"
      color="white"
      class="text"
    >
      <slot />
    </ui-typography>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import type { UiTypographyVariant } from '@/shared/ui/ui-typography';
import { UiTypography } from '@/shared/ui/ui-typography';

import type { UiButtonSize } from './types';

const props = withDefaults(
  defineProps<{
    isDisabled?: boolean;
    size?: UiButtonSize;
    isLoading?: boolean;
  }>(),
  {
    size: 'large',
  },
);

const buttonTypographyBySize = computed<UiTypographyVariant>(() => {
  const typographyMapBySize: Record<UiButtonSize, UiTypographyVariant> = {
    large: 'Body3',
    small: 'Body4',
  };

  return typographyMapBySize[props.size];
});
</script>

<style lang="scss">
.ui-button {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  min-height: var(--height);
  padding: 0 16px;
  border: none;
  border-radius: 6px;
  outline: none;
  background-color: var(--button-black);
  transition: background-color 0.2s;

  &:disabled {
    cursor: default;
    opacity: 0.9;
  }

  &:hover:not(:disabled):not(.is-loading),
  &:active:not(:disabled):not(.is-loading) {
    cursor: pointer;
    background-color: var(--text-black);
  }

  &.small {
    --height: 44px;
  }

  &.large {
    --height: 51px;
  }

  &.is-loading {
    cursor: default;
    background-color: var(--button-middle-black);

    .text {
      opacity: 0;
    }

    &::after {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 60;
      display: flex;
      align-items: center;
      justify-content: center;
      content: url('./loader-bars.svg');
    }
  }
}
</style>
