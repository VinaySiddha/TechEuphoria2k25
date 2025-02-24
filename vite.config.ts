import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",  // Adjust if needed
  server: {
    host: "0.0.0.0",  // Allows external access
    port: process.env.PORT || 10000,  // Use Render's assigned port
    strictPort: true
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
