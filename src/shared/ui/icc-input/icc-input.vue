<template>
  <ui-input
    v-model="modelValue"
    mask="####"
  >
    <template
      v-if="props.isShowLabel"
      #default
    >
      Код ICC
      <ui-icon
        v-tooltip="'Уникальный серийный номер SIM-карты'"
        name="info"
        size="16px"
        color="gray"
      />
    </template>
  </ui-input>
</template>

<script setup lang="ts">
import { UiIcon } from '@/shared/ui/ui-icon';
import { UiInput } from '@/shared/ui/ui-input';

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
