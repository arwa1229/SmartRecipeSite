# Smart Recipe — Company Website

Bilingual (English/Arabic) website for **Smart Recipe**, an IT solutions company.
Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com),
deployed to GitHub Pages.

## Structure

| Path | Purpose |
|------|---------|
| `src/i18n/ui.ts` | **All site copy (EN + AR)** — edit content here |
| `src/components/` | Page components shared by both languages |
| `src/pages/` | Routes: `/` and `/contact` (English), `/ar/…` (Arabic, RTL) |
| `src/layouts/BaseLayout.astro` | Header, footer, language switcher, SEO tags |
| `src/styles/global.css` | Tailwind + brand color tokens |
| `public/brand/` | Logo assets used by the site |
| `branding/` | Full brand kit and logo concepts |
| `.github/workflows/deploy.yml` | Auto-deploy to GitHub Pages on push to `main` |

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
```

## Deployment (GitHub Pages)

1. In the repository settings, set **Pages → Source** to **GitHub Actions**.
2. Merge to `main` — the workflow builds and deploys automatically.
3. The site is served at `https://arwa1229.github.io/SmartRecipeSite/`.

### Connecting the custom domain

When ready to point the domain here:

1. Add the domain under **Settings → Pages → Custom domain** (this creates a
   `CNAME` file).
2. Point the domain's DNS at GitHub Pages (CNAME record to
   `arwa1229.github.io`, or A records for an apex domain).
3. Set the env vars for the build in `.github/workflows/deploy.yml`:
   `SITE_URL=https://yourdomain.com` and `SITE_BASE=/` (see `astro.config.mjs`).

## Pending content

Current copy is **placeholder** — real content will be added to
`src/i18n/ui.ts` from the company documentation. The contact form needs a
form-backend endpoint (e.g. Formspree) — replace `FORM_ENDPOINT` in
`src/components/ContactPage.astro`.
