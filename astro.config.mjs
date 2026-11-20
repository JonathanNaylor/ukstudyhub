import { satteri } from '@astrojs/markdown-satteri';
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
  markdown: {
    processor: satteri({ features: { smartPunctuation: false } }),
  },
  site: process.env.PAGES_SITE_URL || undefined,
  base: process.env.PAGES_BASE_PATH || '/',
});
