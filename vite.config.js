import { defineConfig } from "vite";

export default defineConfig({
  base: "/weather-app/",
  build: {
    rollupOptions: {
      output: {
        // Inclure le dossier "images" dans le chemin de base
        assetFileNames: "images/",
      },
    },
  },
});
