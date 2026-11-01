// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://YOUR-USERNAME.github.io',
  base: '/research-equity-action-hub',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});