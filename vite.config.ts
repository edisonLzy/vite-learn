import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import inspect from 'vite-plugin-inspect';
import svgr from './plugins/svgr';
import virtualModulePlugin from './plugins/virtual-module';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    virtualModulePlugin(),
    svgr({
      defaultExport: 'component',
    }),
    inspect(),
  ],
});
