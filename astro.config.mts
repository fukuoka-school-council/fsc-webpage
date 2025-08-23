import vercel from "@astrojs/vercel"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
	output: "server",

	adapter: vercel({
		edgeMiddleware: true,
	}),

	i18n: {
		locales: ["en", "jp"],
		defaultLocale: "jp",
		routing: {
			prefixDefaultLocale: false,
		},
	},
})
