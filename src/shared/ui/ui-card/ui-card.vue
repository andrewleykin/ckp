<template>
  <div class="ui-card">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.ui-card {
  background-color: var(--background-white);
  border-radius: 10px;
  padding: 18px;
  border: 1px solid var(--divider-gray);
}
</style>
