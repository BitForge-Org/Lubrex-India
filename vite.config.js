import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
      },
      manifest: {
        name: "Lubrex India",
        short_name: "Lubrex",
        start_url: "/",
        display: "standalone",
        background_color: "#000000",
        theme_color: "#facc15",
      },
    }),
  ],
});
