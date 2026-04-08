import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import pkg from './package.json' with { type: 'json' };

// `base` is derived from package.json `name`, so cloning the template via
// the GitHub "Use this template" button or via API just works — no manual
// edits beyond renaming the repo (which sets package.json name in the
// generation step performed by ceidg-sync).
export default defineConfig({
  site: 'https://otwarty-trener.github.io',
  base: `/${pkg.name}`,
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap()],
});
