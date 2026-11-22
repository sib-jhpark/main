import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Use relative base path so assets resolve cleanly on both root
// (https://<user>.github.io/) and subpath (https://<org>.github.io/<repo>/)
export default defineConfig({
  base: './',
  plugins: [react()],
});
