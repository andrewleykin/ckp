import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url';
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  return {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('src', import.meta.url)),
      },
    },
    plugins: [svgLoader({svgo: false}),vue()],
    // Для сборки в github
    // base: mode === 'production' ? '/ckp/' : '/'
  }

})
