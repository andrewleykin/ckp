<template>
  <component
    :is="iconComponent"
    :width="finalWidth"
    :height="finalHeight"
    :class="['ui-icon', `ui-icon-${props.name}`, props.color]"
  />
</template>

<script setup lang="ts">
import { computed, shallowRef, watch } from 'vue';

import type { UiIconColor, UiIconNames } from './types';

const props = withDefaults(
  defineProps<{
    name: UiIconNames;
    size?: string | number;
    width?: string | number;
    height?: string | number;
    color?: UiIconColor;
  }>(),
  {
    size: 24,
    width: '',
    height: '',
    color: 'black',
  },
);

const iconComponent = shallowRef();

const finalWidth = computed(() => props.width || props.size);
const finalHeight = computed(() => props.height || props.size);

const loadIcon = async () => {
  iconComponent.value = await import(`./assets/${props.name}.svg?component`).then((e) => e.default);
};

watch(() => props.name, loadIcon, { immediate: true });
</script>

<style scoped>
.ui-icon {
  display: inline-block;
  user-select: none;
}

.black {
  fill: var(--text-black);
}

.gray {
  fill: var(--text-gray);
}

.light-gray {
  fill: var(--text-light-gray);
}

.white {
  fill: var(--text-white);
}

.additional-green {
  fill: var(--additional-green);
}
</style>
