import FloatingVue from 'floating-vue';
import type { App } from 'vue';

import 'floating-vue/dist/style.css';

export const withTooltip = (app: App): void => {
  app.use(FloatingVue, {});
};
