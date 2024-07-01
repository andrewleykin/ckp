<template>
  <label
    class="ui-checkbox"
    :class="[
      { 'is-checked': componentModelValue },
      { 'is-disabled': props.isDisabled },
      { 'is-error': props.isError },
      $attrs.class,
    ]"
  >
    <input
      type="checkbox"
      :disabled="props.isDisabled"
      :checked="componentModelValue"
      v-bind="$attrs"
      data-test-id="ui-checkbox__input"
      @change="onChangeCheckbox"
    />
    <ui-typography>
      <slot />
    </ui-typography>
  </label>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';

import { UiTypography } from '@/shared/ui/ui-typography';

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(
  defineProps<{
    modelValue?: boolean;
    isDisabled?: boolean;
    isError?: boolean;
  }>(),
  {},
);

const emit = defineEmits<{
  'update:modelValue': [value: boolean];
}>();

const componentModelValue = ref(props.modelValue);

const onChangeCheckbox = (event: Event) => {
  const isChecked = (event.target as HTMLInputElement).checked;

  componentModelValue.value = isChecked;
  emit('update:modelValue', isChecked);
};

watch(
  () => props.modelValue,
  (newValue) => {
    componentModelValue.value = newValue;
  },
);
</script>

<style scoped lang="scss">
.ui-checkbox {
  position: relative;
  display: flex;
  align-items: center;
  transition: 0.2s;
  cursor: pointer;
  user-select: none;
  --background: var(--background-white);
  --border-color: var(--divider-dark-gray);
}
.ui-checkbox.is-error {
  --background: var(--background-white);
  --border-color: var(--additional-red);
}
.ui-checkbox:hover:not(.is-disabled, .is-error, .is-checked) {
  --border-color: var(--divider-gray);
}
.ui-checkbox.is-checked {
  --background: var(--text-black);
  --border-color: var(--text-black);
}
.ui-checkbox.is-checked::before {
  content: url("data:image/svg+xml,%3Csvg width='18' height='13' viewBox='0 0 18 13' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17.5161 1.09559C18.1019 1.68138 18.1019 2.63112 17.5161 3.21691L8.97547 11.7575C7.61474 13.1183 5.40856 13.1183 4.04782 11.7575L0.87684 8.58656C0.291053 8.00078 0.291053 7.05103 0.87684 6.46524C1.46263 5.87946 2.41237 5.87946 2.99816 6.46524L6.16915 9.63623C6.3583 9.82539 6.66499 9.82539 6.85415 9.63623L15.3948 1.09559C15.9806 0.509803 16.9303 0.509803 17.5161 1.09559Z' fill='white'/%3E%3C/svg%3E%0A");
}
.ui-checkbox.is-disabled {
  --border-color: var(--divider-gray);
  --background: var(--background-gray);
  cursor: default;
}
.ui-checkbox.is-disabled.is-checked {
  opacity: 0.9;
}
.ui-checkbox::before {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  box-sizing: border-box;
  content: '';
  background-color: var(--background);
  transition: 0.2s;
}
.ui-checkbox input[type='checkbox'] {
  display: none;
  visibility: hidden;
}

.ui-checkbox {
  padding-left: 42px;
}
</style>
