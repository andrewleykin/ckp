import type { App } from 'vue';

import 'v-calendar/style.css';

import { setupCalendar } from 'v-calendar';

export const withCalendar = (app: App): void => {
  app.use(setupCalendar, {});
};
