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

The deploy workflow builds the site and publishes `dist/` to the `gh-pages`
branch (with `CNAME` for the custom domain) on every push to `main` or the
active development branch. GitHub Pages serves that branch.

**Live site:** https://smartrecipe.co

### DNS records (at the domain registrar)

| Type | Host | Value |
|------|------|-------|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `arwa1229.github.io` |

After DNS propagates, enable **Enforce HTTPS** in Settings → Pages.

## Pending content

Current copy is **placeholder** — real content will be added to
`src/i18n/ui.ts` from the company documentation. The contact form needs a
form-backend endpoint (e.g. Formspree) — replace `FORM_ENDPOINT` in
`src/components/ContactPage.astro`.
