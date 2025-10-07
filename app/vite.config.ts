import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  // Set base path for GitHub Pages deployment
  base: process.env.NODE_ENV === "production" ? "/React19Learn/" : "/",
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
  ],
  build: {
    outDir: "dist",
    sourcemap: true,
  },
});
