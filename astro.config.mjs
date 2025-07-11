import { defineConfig } from 'astro/config'
import astroIcon from 'astro-icon';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [astroIcon()],

  site: 'https://UnderscorePan.github.io',

  vite: {
    plugins: [tailwindcss()],
  },
})