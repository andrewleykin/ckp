<template>
  <main class="registration">
    <client-info-enter
      v-if="partner && simcards.length"
      :partner="partner"
      :simcards="simcards"
    />
    <simcards-enter
      v-else
      @update:partner="partner = $event"
      @update:simcards="simcards = $event"
    />
  </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import type { PartnerView, SimIccModel } from '@/shared/api';

import ClientInfoEnter from './client-info-enter.vue';
import SimcardsEnter from './simcards-enter.vue';

const simcards = ref<SimIccModel[]>([]);
const partner = ref<PartnerView | undefined>();
</script>

<style lang="scss" scoped>
.registration {
  display: flex;
  flex-direction: column;
}
</style>
