import { defineAsyncComponent, markRaw, type App } from 'vue';
import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';

import { blockRoute } from '@/pages/block';
import { homeRoute } from '@/pages/home';
import { paymentRoute } from '@/pages/payment';
import { registrationRoute } from '@/pages/registration';
import { replaceRoute } from '@/pages/replace';
import { termsRoute } from '@/pages/terms';
import type { RouteName } from '@/shared/config';
import { LayoutType, readableRouteName } from '@/shared/config';

export const layoutComponents = {
  [LayoutType.DEFAULT]: markRaw(defineAsyncComponent(() => import('@/shared/ui/ui-layout/ui-layout.vue'))),
};

export const routes: RouteRecordRaw[] = [
  homeRoute,
  registrationRoute,
  blockRoute,
  paymentRoute,
  replaceRoute,
  termsRoute,
];

export const withRouter = (app: App): void => {
  const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(_, __, savedPosition) {
      return savedPosition || { top: 0 };
    },
  });

  // Установка динамического заголовка
  router.afterEach((to) => {
    const routeName = to.name ? readableRouteName(to.name as RouteName) : '';

    if (!to.meta.title) {
      document.title = routeName;

      return;
    }

    document.title = to.meta.title({ readableRouteName: routeName, route: to });
  });

  app.use(router);
};
