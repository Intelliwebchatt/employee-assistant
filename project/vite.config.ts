import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'dist',
  },
  server: {
    mimeTypes: {
      'ts': 'application/javascript',
      'tsx': 'application/javascript',
    },
  },
});
