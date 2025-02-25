import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
=======

 // base: "/TechEuphoria2k25",
  base: "/",  // Adjust if neededz
  server: {
    host: "0.0.0.0",  // Allow external access
    port: process.env.PORT || 10000,  // Use Render's assigned port
    strictPort: true,
    allowedHosts: ["techeuphoria2k25.onrender.com"],  // Allow Render domain
  },

>>>>>>> 0837a48ef66c4e4ba4759ad7b267ddedc2e83ee6
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
