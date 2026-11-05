import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

// Hosted on GitHub Pages at https://nabileus.github.io/portfolio/
// If you later use a custom domain or a <user>.github.io repo, set base to '/'.
export default defineConfig({
  site: 'https://nabileus.github.io',
  base: '/portfolio',
  integrations: [icon()],
  build: { inlineStylesheets: 'always' },
});
