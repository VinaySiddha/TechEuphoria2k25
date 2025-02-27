import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/',
  // server: {
  //   host: "0.0.0.0",  // Allow external access
  //   port: process.env.PORT || 10000,  // Use Render's assigned port
  //   strictPort: true,
  //   allowedHosts: ["techeuphoria2k25.onrender.com"],  // Allow Render domain
  // },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
