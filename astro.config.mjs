import node from "@astrojs/node"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
	i18n: {
		locales: ["en", "jp"],
		defaultLocale: "jp",
		routing: {
			prefixDefaultLocale: false,
		},
	},
})
