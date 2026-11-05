# Md Hasibul Islam — Portfolio

Personal website built with [Astro](https://astro.build) (static, near-zero JavaScript) and deployed to GitHub Pages.

Live: https://nabileus.github.io/portfolio/

## Editing content

All text (about, research, publications, experience, education, skills, links) lives in
**`src/data.ts`**. Edit it and push — the site rebuilds automatically.

- Profile photo: `src/assets/headshot.png` (resized to AVIF/WebP/JPEG at build time)
- Styles: `src/styles/global.css`
- Page layout: `src/pages/index.astro`

## Local development

```bash
npm install
npm run dev       # http://localhost:4321/portfolio/ with live reload
npm run build     # outputs static site to dist/
npm run preview   # serve the built site
```

## Deployment

`.github/workflows/deploy.yml` builds and deploys on every push to `main`.
One-time setup: GitHub repo → **Settings → Pages → Source: GitHub Actions**.

If you move to a custom domain or a `nabileus.github.io` repo, change `base` in
`astro.config.mjs` to `'/'`.
