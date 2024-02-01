// vue3 在vite.config中无法使用import.meta.env.*
import 'dotenv/config';
import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  // dotenv：使用 process.env 訪問環境變數（依運行環境切換 base 路徑）
  base: process.env.NODE === 'production' ? `/${process.env.REPOSITORY_NAME}/` : '/',
  plugins: [
    vue(),
    // 增加畫面警告：指定 ESLint 檢查檔案
    eslintPlugin({
      include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue'],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
