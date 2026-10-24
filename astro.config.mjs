import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://titanium0923.github.io',
  base: '/',
  output: 'static',
  integrations: [tailwind(), mdx()],
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en', 'kk'],
    routing: {
      prefixDefaultLocale: false,
    }
  }
});