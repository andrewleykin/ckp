import type { RouteRecordRaw } from 'vue-router';

import { LayoutType, RouteName } from '@/shared/config';

export const route: RouteRecordRaw = {
  path: '/replace',
  name: RouteName.REPLACE,
  component: () => import('./ui/replace.vue'),

  meta: {
    layout: LayoutType.DEFAULT,
  },
};
