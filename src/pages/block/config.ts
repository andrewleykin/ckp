import type { RouteRecordRaw } from 'vue-router';

import { LayoutType, RouteName } from '@/shared/config';

export const route: RouteRecordRaw = {
  path: '/block',
  name: RouteName.BLOCK,
  component: () => import('./ui/block.vue'),

  meta: {
    layout: LayoutType.DEFAULT,
  },
};
