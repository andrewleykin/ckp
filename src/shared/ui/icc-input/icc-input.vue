<template>
  <ui-input
    v-model="modelValue"
    mask="####"
    class="icc-input"
  >
    <template
      v-if="props.isShowLabel"
      #default
    >
      <icc-label />
    </template>
  </ui-input>
</template>

<script setup lang="ts">
import { UiInput } from '@/shared/ui/ui-input';

import IccLabel from './icc-label.vue';

const modelValue = defineModel<string>({ required: true });

const props = withDefaults(
  defineProps<{
    isShowLabel?: boolean;
  }>(),
  {
    isShowLabel: true,
  },
);
</script>

<style lang="scss" scoped>
.icc-input {
  max-width: 100px;
}
</style>
