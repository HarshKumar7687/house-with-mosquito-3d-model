import { defineConfig } from "vite";

export default defineConfig({
  base: "/3d-objects/",        // repo name
  build: { outDir: "docs" }     // build directly to docs/ for GitHub Pages
});
