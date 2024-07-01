import type { RouteRecordRaw } from 'vue-router';

import { LayoutType, RouteName } from '@/shared/config';

export const route: RouteRecordRaw = {
  path: '/payment',
  name: RouteName.PAYMENT,
  component: () => import('./ui/payment.vue'),

  meta: {
    layout: LayoutType.DEFAULT,
  },
};
