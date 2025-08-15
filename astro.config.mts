import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import tailwindcss from "@tailwindcss/vite"

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  output: 'server',

  adapter: node({
      mode: 'standalone'
  }),

  vite: {
      plugins: [tailwindcss()]
  },

  i18n: {
      locales: ["en", "jp"],
      defaultLocale: "jp",
      routing: {
          prefixDefaultLocale: false,
      }
  },

  integrations: [preact()]
})