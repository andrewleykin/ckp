import type { App } from 'vue';

import { withCalendar } from './plugin-calendar';
import { withMask } from './plugin-mask';
import { withNotifications } from './plugin-notification';
import { withRouter } from './plugin-router';
import { withStore } from './plugin-store';
import { withTooltip } from './plugin-tooltip';

// сначала withStore, чтобы другие могли достать данные из хранилища
const plugins = [withStore, withRouter, withCalendar, withTooltip, withMask, withNotifications];

export const withPlugins = (app: App): App => {
  plugins.forEach((plugin): void => {
    plugin(app);
  });

  return app;
};
