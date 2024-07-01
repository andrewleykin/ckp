import { createApp } from 'vue';

import App from './App.vue';
import { withPlugins } from './plugins';

withPlugins(createApp(App)).mount('#app');
