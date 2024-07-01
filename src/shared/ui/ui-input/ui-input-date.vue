<template>
  <date-picker
    :key="inputKey"
    v-model="componentModelValue"
    :is-range="props.isRange"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <template #default="{ togglePopover, inputValue, inputEvents }">
      <ui-input
        v-bind="{ ...$attrs, ...props }"
        :model-value="getInputValue(inputValue)"
        class="m-input-date"
        :mask="inputMask"
        :error-text="props.errorText"
        :is-disabled="props.isDisabled"
        :placeholder="inputPlaceholder"
        v-on="getInputEvents(inputEvents)"
      >
        <slot name="default" />

        <template
          v-if="slots['input-before']"
          #before
        >
          <slot name="input-before" />
        </template>
        <template #after>
          <slot name="input-after">
            <ui-icon
              :style="{ cursor: 'pointer' }"
              name="calendar"
              @click="togglePopover"
            />
          </slot>
        </template>
      </ui-input>
    </template>
  </date-picker>
</template>

<script
  lang="ts"
  setup
  generic="T extends number | string | Date | { start: number | string | Date; end: number | string | Date }"
>
import { DatePicker } from 'v-calendar';
import { computed, ref, useAttrs, watch } from 'vue';

import { UiIcon } from '@/shared/ui/ui-icon';

import UiInput from './ui-input.vue';

const INPUT_RANGE_SEPARATOR = ' – ';

const parseDMY = (s: string): Date => {
  const [d, m, y] = s.split(/\D/);
  return new Date(Number(y), Number(m) - 1, Number(d));
};

const attributes = useAttrs();

defineOptions({
  inheritAttrs: false,
});

const slots = defineSlots<{
  default?: () => void;
  'input-before': () => void;
  'input-after': () => void;
  'input-message': () => void;
}>();

const props = withDefaults(
  defineProps<{
    modelValue?: T;
    errorText?: string;
    isDisabled?: boolean;
    isRange?: boolean;
  }>(),
  {
    modelValue: undefined,
    errorText: undefined,
  },
);

const emit = defineEmits<{
  'update:modelValue': [value: T];
}>();

const inputKey = ref(0);

const componentModelValue = ref(props.modelValue);

const inputMask = computed<string>(() => {
  const dateMask = '##.##.####';
  if (props.isRange) return `${dateMask} – ${dateMask}`;

  return dateMask;
});

const inputPlaceholder = computed<string>(() => {
  const datePlaceholder = '__.__.____';
  if (props.isRange) return `${datePlaceholder}${INPUT_RANGE_SEPARATOR}${datePlaceholder}`;

  return datePlaceholder;
});

const getInputValue = (inputValue: string | { start: string; end: string }): string => {
  if (typeof inputValue === 'object' && 'start' in inputValue && 'end' in inputValue) {
    return `${inputValue.start} – ${inputValue.end}`;
  }

  return inputValue;
};

const onChangeInputRange = (value: string) => {
  if (value.length === 0) {
    componentModelValue.value = undefined;
    return;
  }

  const dates = value.split(INPUT_RANGE_SEPARATOR);

  // если не валидная дата то обновляем весь компонент
  if (dates.length < 2) {
    inputKey.value += 1;
    return;
  }

  const [start, end] = dates;
  // @todo поправить типы
  // @ts-expect-error type
  componentModelValue.value = {
    start: parseDMY(start),
    end: parseDMY(end),
  };
};

const getInputEvents = (inputEvents: object | { start: object; end: object }) => {
  if (attributes.disabled || attributes.readonly) return;

  if ('start' in inputEvents && 'end' in inputEvents) {
    return {
      // @ts-expect-error type
      mousemove: inputEvents.start.mousemove,
      //  @ts-expect-error type
      mouseleave: inputEvents.start.mouseleave,
      change: (event: any) => {
        onChangeInputRange(event.target.value);
      },
    };
  }

  return inputEvents;
};

watch(
  () => props.modelValue,
  (newValue) => {
    // @todo поправить типы
    // @ts-expect-error type
    componentModelValue.value = newValue;
  },
);
</script>
