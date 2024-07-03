import Notifications from '@kyvg/vue3-notification';
import type { App } from 'vue';

export const withNotifications = (app: App): void => {
  app.use(Notifications);
};
