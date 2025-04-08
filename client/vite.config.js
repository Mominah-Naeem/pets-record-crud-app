import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Forward API requests to the backend
      '/pets': 'http://localhost:2006', // Your backend API
    },
  },
});
