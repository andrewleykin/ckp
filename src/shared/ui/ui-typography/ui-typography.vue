<template>
  <component
    :is="props.component"
    :class="[props.variant, props.color]"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import type { UiTypographyColor, UiTypographyComponent, UiTypographyVariant } from './types';

const props = withDefaults(
  defineProps<{
    component?: UiTypographyComponent;
    variant?: UiTypographyVariant;
    color?: UiTypographyColor;
  }>(),
  {
    component: 'div',
    variant: 'Body1',
    color: 'black',
  },
);
</script>

<style scoped>
.HeadlineH1 {
  font-size: 48px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
}

.HeadlineH2 {
  font-size: 42px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
}

.HeadlineH3 {
  font-size: 32px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}

.HeadlineH4 {
  font-size: 28px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}

.HeadlineH5 {
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
}

.Body1 {
  font-size: 24px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}

.Body2 {
  font-size: 20px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}

.Body3 {
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}

.Body4 {
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}

.Body5 {
  font-size: 13px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}

.black {
  color: var(--text-black);
}

.gray {
  color: var(--text-gray);
}

.light-gray {
  color: var(--text-light-gray);
}

.white {
  color: var(--text-white);
}

.additional-red {
  color: var(--additional-red);
}

.additional-blue {
  color: var(--additional-blue);
}

.additional-dark-blue {
  color: var(--additional-dark-blue);
}

.additional-green {
  color: var(--additional-green);
}
</style>
