<template>
  <div
    class="ui-input"
    :class="[
      {
        active: componentModelValue,
        error: props.errorText,
        disabled: props.isDisabled,
      },
      $attrs.class,
    ]"
    :readonly="$attrs.readonly"
  >
    <ui-typography
      v-if="slots.default"
      :color="props.isDisabled ? 'light-gray' : 'gray'"
      variant="Body5"
      class="label"
    >
      <slot />
    </ui-typography>
    <div class="input-wrapper">
      <div
        v-if="slots.before"
        class="input-before"
      >
        <slot name="before" />
      </div>
      <input
        v-bind="$attrs"
        v-model="componentModelValue"
        v-mask="props.mask"
        class="input"
        type="text"
        :placeholder="props.placeholder"
        :disabled="props.isDisabled"
        @input="onInput"
      />
      <div
        v-if="slots.after"
        class="input-after"
      >
        <slot name="after" />
      </div>
    </div>

    <ui-typography
      v-if="props.errorText"
      component="span"
      variant="Body5"
      color="additional-red"
      class="error-text"
    >
      {{ props.errorText }}
    </ui-typography>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
// @ts-expect-error no types
import { masker } from 'vue-input-facade';

import { UiTypography } from '@/shared/ui/ui-typography';

defineOptions({
  inheritAttrs: false,
});

const slots = defineSlots<{
  before?: () => void;
  default?: () => void;
  after?: () => void;
}>();

const props = withDefaults(
  defineProps<{
    modelValue?: string;
    mask?: string | string[] | Record<string, any>;
    errorText?: string;
    placeholder?: string;
    isDisabled?: boolean;
  }>(),
  {
    modelValue: '',
    mask: undefined,
    errorText: undefined,
    label: '',
    placeholder: undefined,
  },
);

const emit = defineEmits<{
  'update:modelValue': [value: string];
}>();

const componentModelValue = ref<string | undefined>();

const updateModelValue = (value: string) => {
  emit('update:modelValue', value);
};

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.validity.badInput) return;

  updateModelValue(target.value);
};

watch(
  () => props.modelValue,
  (newValue) => {
    let value = newValue;

    if (props.mask) {
      value = masker(value.toString(), props.mask).masked;
    }

    componentModelValue.value = value;
  },
  {
    immediate: true,
  },
);
</script>

<style lang="scss" scoped>
.ui-input {
  --border-color: var(--divider-gray);
  --text-color: var(--text-black);
  --placeholder-color: var(--text-light-gray);
  --background-color: var(--background-white);
  --border-radius: 4px;

  &:hover:not(.disabled) {
    --border-color: var(--divider-dark-gray);
    --placeholder-color: var(--text-black);
  }
  &.active {
    --border-color: var(--divider-black);
  }
  &.disabled {
    --border-color: var(--divider-dark-gray);
    --text-color: var(--text-light-gray);
    --background-color: var(--background-gray);
  }
  &.error {
    --border-color: var(--additional-red);
    .input-before {
      --border-color: var(--divider-dark-gray);
    }
  }
}

.label {
  margin-bottom: 2px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.input-wrapper {
  border-radius: var(--border-radius);

  position: relative;
  border: 1px solid var(--border-color);
  display: flex;
  height: 36px;
  transition: all 0.2s;
}

.input-before {
  height: 100%;
  min-width: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid var(--border-color);
  background-color: var(--background-color);
  border-top-left-radius: var(--border-radius);
  border-bottom-left-radius: var(--border-radius);
}

.input {
  color: var(--text-color);
  width: 100%;
  height: 100%;
  border: none;
  border-radius: var(--border-radius);
  padding: 0 32px 0 12px;

  &::placeholder {
    color: var(--placeholder-color);
  }

  &:focus-visible {
    outline: none;
  }
}

.input-after {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
}

.error-text {
  margin-top: 2px;
}
</style>
