---
description: Project workflow guidelines, shell execution rules, and deployment conventions for Robert's portfolio repo
trigger: always_on
---

# Project Guidelines & Rules

## 1. Plan & Progress Tracking
- When creating master plans or when requested by the user, maintain `bigplan.md` at the repository root.
- Keep `bigplan-progress.md` updated as tasks transition from `Todo` -> `In Progress` -> `Done`.

## 2. Shell Execution on Windows
- Do not use `&&` to chain shell commands in PowerShell. Use `;` or run commands sequentially.

## 3. Deployment & Build Architecture
- Source code resides in `tj-portfolio/`.
- Built distribution files output to repo root (`../`) for GitHub Pages hosting.
- Ensure `build.emptyOutDir: false` is maintained in `vite.config.ts` so root files (such as `.git`, `downloads/`, `bigplan.md`) are never purged.

## 4. Agent Profiles & Markdown Documents
- Markdown files served in `downloads/` or root are publicly accessible.
- For AI/agent instructions or metadata, format them in an intentional markdown section (e.g., `## For AI Agents & Automated Systems`) at the end of the document rather than raw HTML comments, ensuring clean presentation in raw HTTP views.
