# Portfolio Build — Progress

## Status: COMPLETE

| Step | Description | Status |
|------|-------------|--------|
| 1  | Portfolio Data Config (`portfolio.json`) | ? Done |
| 2  | Vite Build Config | ? Done |
| 3  | Root HTML Meta | ? Done |
| 4  | CSS Design System | ? Done |
| 5  | Nav Component | ? Done |
| 6  | Hero Component | ? Done |
| 7  | About Component | ? Done |
| 8  | Experience Component | ? Done |
| 9  | Skills Component | ? Done |
| 10 | Projects Component | ? Done |
| 11 | Contact Component | ? Done |
| 12 | App.tsx Wiring | ? Done |
| 13 | Build & Verify | ? Done |

## Build Output (at repo root)
- `index.html` (1.45 kB)
- `assets/index-*.css` (1.63 kB)
- `assets/index-*.js` (215 kB / 68 kB gzip)

## Action Required Before Publishing
1. Open `tj-portfolio/src/data/portfolio.json`
2. Replace `contact.linkedin` with your real LinkedIn URL
3. Replace `contact.email` with `mailto:your@email.com`
4. Run `npm run build` again inside `tj-portfolio/`
5. Commit and push — GitHub Pages will serve the new `index.html`

## Notes
- Vite warning about outDir being a parent directory is expected — build still works correctly.
- `emptyOutDir: false` ensures `.git`, `downloads/`, `bigplan.md`, etc. are preserved on each build.
- All content is data-driven from `portfolio.json` — update content there, rebuild, done.
