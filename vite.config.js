import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Lubrex India",
        short_name: "Lubrex",
        start_url: "/",
        display: "standalone",
        background_color: "#000000",
        theme_color: "#facc15",
        icons: [
          {
            src: "https://lubrex.net/wp-content/uploads/2021/12/favicon.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "https://lubrex.net/wp-content/uploads/2021/12/favicon.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
