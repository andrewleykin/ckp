<template>
  <ui-input
    v-model="componentModelValue"
    class="ui-input-phone"
    mask="##########"
    :error-text="props.errorText || phoneState === 'error' ? 'Некорректный номер' : undefined"
    :is-disabled="props.isDisabled"
    @update:model-value="emit('update:modelValue', getDigits($event.toString()))"
    @blur="checkPhone"
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
      <slot name="input-after">
        <ui-icon
          v-if="!props.errorText && phoneState === 'success'"
          name="checkmark-circle"
          color="additional-green"
          size="20px"
        />
      </slot>
    </template>
  </ui-input>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

import { PHONE_LENGTH } from '@/shared/config';
import { getDigits } from '@/shared/lib';
import { UiIcon } from '@/shared/ui/ui-icon';
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
    isDisabled?: boolean;
    errorText?: string;
  }>(),
  {
    modelValue: '',
    errorText: '',
  },
);

const emit = defineEmits<{
  'update:modelValue': [value: string];
}>();

const componentModelValue = ref(props.modelValue);

type PhoneState = 'rest' | 'error' | 'success';
const phoneState = ref<PhoneState>('rest');

const checkPhone = () => {
  phoneState.value = getDigits(componentModelValue.value).length === PHONE_LENGTH ? 'success' : 'error';
};

watch(
  () => props.modelValue,
  (newValue) => {
    componentModelValue.value = newValue;
  },
);
</script>

<style lang="scss" scoped>
.ui-input-phone {
  :deep(.input-wrapper) {
    max-width: 220px;
  }
}
</style>
