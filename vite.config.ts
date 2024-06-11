// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import path from 'path';

export default defineConfig({
  plugins: [react()],
  // resolve: {
  //   alias: {
  //     '@components': path.resolve(__dirname, './src/components'),
  //     '@pages': path.resolve(__dirname, './src/pages'),
  //     '@layouts': path.resolve(__dirname, './src/layouts'),
  //     '@utils': path.resolve(__dirname, './src/utils'),
  //     '@assets': path.resolve(__dirname, './src/assets'),
  //   },
  // },
});
