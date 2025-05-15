import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  optimizeDeps: {
    exclude: ['chunk-MEQPFVXG.js'] // Add this to exclude the problematic chunk
  }
});