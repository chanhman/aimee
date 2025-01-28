import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Makes the app accessible on your local network
    port: 5173, // Ensure the port matches the one you're using
  },
});
