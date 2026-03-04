import { defineConfig } from "vite";

export default defineConfig({
  root: ".",
  base: "/Portfolio/", // GitHub repo name is Portfolio (capital P)
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  server: {
    host: true,
  },
});
