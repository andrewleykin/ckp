<template>
  <div :class="['ui-steps', { changeable: isChangeable }]">
    <div
      v-for="(step, index) in stepsWithStatuses"
      :key="step.key ?? `step-${index}`"
      :class="['step', `step-${step.status}`]"
      @click="selectStep(index)"
    >
      <span class="step-count">
        <ui-icon
          v-if="step.status === 'done'"
          name="checkmark-circle"
          size="34px"
          class="ready-icon"
          color="additional-green"
        />
        <ui-typography
          v-else
          variant="Body3"
          class="step-count-text"
          :color="getStepCountTextColor(index)"
        >
          {{ index + 1 }}
        </ui-typography>
      </span>
      <ui-typography
        component="span"
        variant="Body5"
        class="step-text"
        :color="getStepTextColor(index)"
      >
        {{ step.text }}
      </ui-typography>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';

import { UiIcon } from '@/shared/ui/ui-icon';
import type { UiTypographyColor } from '@/shared/ui/ui-typography';
import { UiTypography } from '@/shared/ui/ui-typography';

import type { UiStep, UiStepStatus, UiStepWithStatus } from './types';

const props = withDefaults(
  defineProps<{
    steps: UiStep[];
    currentStep?: number;
    isChangeable?: boolean;
  }>(),
  {
    currentStep: 0,
    isChangeable: true,
  },
);

const emit = defineEmits<{
  'update:currentStep': [step: number];
}>();

const componentModelValue = ref(props.currentStep);

const getStepStatus = (stepNumber: number): UiStepStatus => {
  if (stepNumber < componentModelValue.value) {
    return 'done';
  } else if (stepNumber === componentModelValue.value) {
    return 'active';
  }
  return 'rest';
};

const stepsWithStatuses = computed<UiStepWithStatus[]>(() => {
  return props.steps.map((step, index) => {
    return {
      ...step,
      status: getStepStatus(index),
    };
  });
});

const selectStep = (stepNumber: number) => {
  if (!props.isChangeable) return;

  componentModelValue.value = stepNumber;
  emit('update:currentStep', stepNumber);
};

const getStepCountTextColor = (stepNumber: number): UiTypographyColor => {
  const stepCountTextColorByStatus: Record<UiStepStatus, UiTypographyColor> = {
    done: 'additional-green',
    active: 'black',
    rest: 'light-gray',
  };

  return stepCountTextColorByStatus[getStepStatus(stepNumber)];
};

const getStepTextColor = (stepNumber: number): UiTypographyColor => {
  const stepTextColorByStatus: Record<UiStepStatus, UiTypographyColor> = {
    done: 'additional-green',
    active: 'black',
    rest: 'light-gray',
  };

  return stepTextColorByStatus[getStepStatus(stepNumber)];
};

watch(
  () => props.currentStep,
  (newValue) => {
    componentModelValue.value = newValue;
  },
);
</script>

<style scoped lang="scss">
.ui-steps {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  width: 100%;

  &.changeable {
    .step {
      cursor: pointer;
    }
  }
}

.step {
  flex: auto;
  display: flex;
  align-items: center;
  padding: 4px;
  gap: 8px;

  &:after {
    content: '';
    width: 100%;
    height: 2px;
    background-color: var(--stroke-background);
  }

  &:last-child {
    flex: none;
  }
}

.step-rest {
  --border-color: var(--divider-dark-gray);
  --stroke-background: var(--divider-gray);
}

.step-active {
  --border-color: var(--divider-black);
  --stroke-background: var(--text-black);
  cursor: default;
}

.step-done {
  --stroke-background: var(--additional-green);
}

.step-count {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 2px solid var(--border-color);
}

.step-text {
  transition: color 0.2s ease;
  flex: none;
}
</style>
