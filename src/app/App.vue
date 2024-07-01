<template>
  <Suspense>
    <component :is="layoutComponent"></component>
  </Suspense>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

import { LayoutType } from '@/shared/config/router';

import { layoutComponents } from './plugins/plugin-router';

const route = useRoute();

const layoutComponent = ref();

watchEffect(() => {
  /**
   * при первом срабатывании у currentRoute нет meta.layout
   * поэтому мелькает ELayoutType.DEFAULT
   */
  if (!route.name) return;

  const layoutName = (route.meta.layout ?? LayoutType.DEFAULT) as LayoutType;
  layoutComponent.value = layoutComponents[layoutName];
});
</script>

<style lang="scss">
@import url('./style.scss');
</style>
