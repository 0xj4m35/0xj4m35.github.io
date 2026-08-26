# Nguyen Thai Bao CV

Static CV site built with Next.js App Router, TypeScript, Tailwind CSS, and RemixIcon.

## Commands

```sh
pnpm install
pnpm dev
pnpm lint
pnpm build
```

`pnpm build` exports the site to `out/` for GitHub Pages.

## Deploy

The GitHub Actions workflow deploys on every push to `main` and can also be run manually from the Actions tab.

For the recommended user-site URL, create the GitHub repository as:

```txt
0xj4m35.github.io
```

Then enable GitHub Pages with **GitHub Actions** as the source.

## CV Data

Edit [src/data/cv.ts](./src/data/cv.ts) to update CV content.
