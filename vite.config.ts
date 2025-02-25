import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
=======
  base: "/TechEuphoria2k25",
  base: "/",  // Adjust if needed
  server: {
    host: "0.0.0.0",  // Allow external access
    port: process.env.PORT || 10000,  // Use Render's assigned port
    strictPort: true,
    allowedHosts: ["techeuphoria2k25.onrender.com"],  // Allow Render domain
  },
>>>>>>> f99f06d004423c38fb5d26832c055aadc5f798e3
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
