import type { RouteRecordRaw } from 'vue-router';

import { LayoutType, RouteName } from '@/shared/config';

export const route: RouteRecordRaw = {
  path: '/',
  name: RouteName.HOME,
  component: () => import('./ui/home.vue'),

  meta: {
    layout: LayoutType.DEFAULT,
  },
};
