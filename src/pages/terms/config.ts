import type { RouteRecordRaw } from 'vue-router';

import { LayoutType, RouteName } from '@/shared/config';

export const route: RouteRecordRaw = {
  path: '/terms',
  name: RouteName.TERMS,
  component: () => import('./ui/terms.vue'),

  meta: {
    layout: LayoutType.DEFAULT,
  },
};
