import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
  build: {
    // Output to 'dist' when building on Vercel, or to repo root for GitHub Pages
    outDir: process.env.VERCEL ? "dist" : "../",
    emptyOutDir: false,
    // Do NOT wipe repo root — preserves .git, downloads/, bigplan.md, etc.
  },
});
