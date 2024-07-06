import type { RouteRecordRaw } from 'vue-router';

import { LayoutType, RouteName } from '@/shared/config';

export const route: RouteRecordRaw = {
  path: '/payment/:id/success',
  name: RouteName.PAYMENT_SUCCESS,
  component: () => import('./ui/payment-success.vue'),

  meta: {
    layout: LayoutType.DEFAULT,
  },
};
