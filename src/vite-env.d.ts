/// <reference types="vite/client" />

declare module 'vue-router' {
  interface RouteLocationNormalized {
    name: RouteName | null | undefined;
  }

  type TMetaTitle = {
    route: RouteLocationNormalized;
    readableRouteName: string;
  };

  export interface RouteMeta {
    /**
     * Функция для построения динамического заголовка.
     * Если просто читабельный заголовок из readableRouteName, то не нужно использовать эту функцию
     *
     * @param payload.route – текущий vue-route
     * @param payload.readableRouteName – читабельный заголовок из readableRouteName
     * @returns
     */
    title?: ({ route, readableRouteName }: TMetaTitle) => string;
  }
}

// Не удалять. (Чтобы гарантировать, что он будет рассматриваться как модуль, добавьте хотя бы один оператор экспорта.) https://router.vuejs.org/guide/advanced/meta.html#TypeScript
export {};