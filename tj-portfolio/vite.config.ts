import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
  build: {
    // Output built files to the repo root for GitHub Pages
    outDir: "../",
    // Do NOT wipe repo root — preserves .git, downloads/, bigplan.md, etc.
    emptyOutDir: false,
  },
});
