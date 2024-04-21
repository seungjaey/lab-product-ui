import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ include: ['src'] })],
  build: {
    outDir: 'dist',
    lib: {
      entry: resolve(__dirname, 'src/entry.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react'],
      output: {
        entryFileNames: '[name].js',
      },
    },
  },
});
