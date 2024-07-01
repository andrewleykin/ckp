<template>
  <div class="ui-success">
    <div class="ui-success__title">
      <ui-icon
        name="checkmark-circle"
        color="additional-green"
        size="94px"
      />
      <ui-typography variant="HeadlineH2">{{ props.title }}</ui-typography>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { UiIcon } from '@/shared/ui/ui-icon';
import { UiTypography } from '@/shared/ui/ui-typography';

const props = defineProps<{
  title: string;
}>();
</script>

<style lang="scss" scoped>
.ui-success {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 56px;
}

.ui-success__title {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
}
</style>
