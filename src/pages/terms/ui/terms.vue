<template>
  <main class="terms">
    <ui-typography variant="HeadlineH3">Договор оферты</ui-typography>
    <div class="image">
      <img src="./оферта.jpg" />
    </div>
  </main>
</template>

<script lang="ts" setup>
import { UiTypography } from '@/shared/ui/ui-typography';
</script>

<style lang="scss" scoped>
.terms {
  overflow-y: auto;
}

.image {
  margin-top: 28px;
  max-width: 760px;

  img {
    width: 100%;
  }
}
</style>
