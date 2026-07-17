// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages project-site defaults. Once the custom domain is connected,
// set SITE_URL to the domain and SITE_BASE to "/" (or add a CNAME file).
const site = process.env.SITE_URL ?? 'https://arwa1229.github.io';
const base = process.env.SITE_BASE ?? '/SmartRecipeSite';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
