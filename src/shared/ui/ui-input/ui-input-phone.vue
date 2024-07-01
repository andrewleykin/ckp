<template>
  <ui-input
    v-model="componentModelValue"
    class="ui-input-phone"
    mask="### ### ## ##"
    placeholder="___ ___ __ __"
    :error-text="props.errorText"
    :is-disabled="props.isDisabled"
    @update:model-value="emit('update:modelValue', $event.toString())"
  >
    <slot name="default" />

    <template #before>
      <slot name="input-before">
        <ui-typography
          variant="Body4"
          :color="props.isDisabled ? 'light-gray' : 'gray'"
        >
          +7
        </ui-typography>
      </slot>
    </template>
    <template #after>
      <slot name="input-after" />
    </template>
  </ui-input>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

import { UiTypography } from '@/shared/ui/ui-typography';

import UiInput from './ui-input.vue';

defineSlots<{
  default?: () => void;
  'input-before': () => void;
  'input-after': () => void;
}>();

const props = withDefaults(
  defineProps<{
    modelValue?: string;
    errorText?: string;
    isDisabled?: boolean;
  }>(),
  {
    modelValue: '',
    errorText: undefined,
  },
);

const emit = defineEmits<{
  'update:modelValue': [value: string];
}>();

const componentModelValue = ref(props.modelValue);

watch(
  () => props.modelValue,
  (newValue) => {
    componentModelValue.value = newValue;
  },
);
</script>
