import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import type { App } from 'vue';

export const withStore = (app: App): void => {
  const pinia = createPinia();

  pinia.use(piniaPluginPersistedstate);

  app.use(pinia);
};
