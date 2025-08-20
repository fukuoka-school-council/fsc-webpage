import { defineConfig } from 'astro/config'
import tailwindcss from "@tailwindcss/vite"


// https://astro.build/config
export default defineConfig({
    output: 'server',
    i18n: {
        locales: ["en", "jp"],
        defaultLocale: "jp",
        routing: {
            prefixDefaultLocale: false,
        }
    }
})
