import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://web-app-01.vercel.app/", // your Node.js server URL
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
