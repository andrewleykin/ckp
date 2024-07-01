<template>
  <main>
    <ui-typography
      variant="HeadlineH2"
      class="title"
    >
      Добрый день!
    </ui-typography>
    <ui-typography
      variant="Body1"
      class="text"
    >
      Выберите интересующий вас пункт,<br />чтобы продолжить
    </ui-typography>
    <ui-icon
      name="arrow"
      width="99px"
      height="62px"
    />
  </main>
</template>

<script lang="ts" setup>
import { UiIcon } from '@/shared/ui/ui-icon';
import { UiTypography } from '@/shared/ui/ui-typography';
</script>

<style lang="scss" scoped>
.title {
  margin-bottom: 64px;
}

.text {
  margin-bottom: 12px;
}
</style>
