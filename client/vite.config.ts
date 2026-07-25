import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // Tự động làm mới trang (Auto-refresh/HMR) đã được bật theo yêu cầu của bạn.
      hmr: true,
      watch: {
        usePolling: true,
      },
    },
    build: {
      outDir: 'build',
    },
  };
});
