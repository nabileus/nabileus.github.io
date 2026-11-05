import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

// Hosted on GitHub Pages at https://nabileus.github.io/ (repo: nabileus/nabileus.github.io)
export default defineConfig({
  site: 'https://nabileus.github.io',
  integrations: [icon()],
  build: { inlineStylesheets: 'always' },
});
