import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(new URL('./src', import.meta.url).pathname),
    },
  },
  publicDir: 'public', // Secara eksplisit atur folder public (opsional, defaultnya 'public')
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.pdf')) {
            return 'assets/[name].[ext]'; // Salin PDF ke folder 'assets' di build
          }
          return 'assets/[name].[hash].[ext]'; // Aturan default untuk aset lain
        },
      },
    },
  },
});