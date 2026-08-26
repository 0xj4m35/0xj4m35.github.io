# 01: Add Geist fonts and base CV tokens

**What to build:** The CV page uses self-hosted Geist Sans and Geist Mono with a light-only Geist-inspired token base, while keeping the current document structure and static export behavior intact.

**Blocked by:** None (can start immediately).

**Status:** resolved

- [x] The maintained `geist` font package is added and the CV uses self-hosted Geist Sans for primary text.
- [x] Geist Mono is available for precise metadata such as Role periods, education periods, awards periods, and small labels.
- [x] The base visual tokens use a light-only Geist-inspired palette with restrained grays, borders, text colors, and surfaces.
- [x] The CV remains a single document-style page and does not gain a large hero, metrics panel, product dashboard, or Vercel branding.
- [x] Static export compatibility is preserved and `pnpm build` succeeds.
