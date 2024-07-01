import type { RouteRecordRaw } from 'vue-router';

import { LayoutType, RouteName } from '@/shared/config';

export const route: RouteRecordRaw = {
  path: '/registration',
  name: RouteName.REGISTRATION,
  component: () => import('./ui/registration.vue'),

  meta: {
    layout: LayoutType.DEFAULT,
  },
};
