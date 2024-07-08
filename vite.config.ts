import { defineConfig, loadEnv } from 'vite'
import { fileURLToPath, URL } from 'node:url';
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd());
  
  return {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('src', import.meta.url)),
      },
    },
    plugins: [svgLoader({svgo: false}),vue()],
    base: env.NODE_ENV === 'production' ? '/ckp/' : '/'
  }

})
