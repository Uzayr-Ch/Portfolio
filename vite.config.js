import { defineConfig } from "vite";

export default defineConfig({
  root: ".",
  base: "/portfolio/", // Change to "/" if deploying to custom domain
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  server: {
    host: true,
  },
});
