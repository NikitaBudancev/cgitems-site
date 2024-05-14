import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue(), 'vitest'],
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
