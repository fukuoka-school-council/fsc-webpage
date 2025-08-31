import en from "src/locales/en"
import ja from "src/locales/ja"

export default function t(
	rawKey: string,
	locale: string | undefined,
	placeholder?: Record<string, string>,
) {
	if (!locale) return "Error: Locale undefined. Please contact to dev."

	const dictionary = locale === "ja" || locale === "jp" ? ja : en

	const [page, key] = rawKey.split(".")
	const text = dictionary[page][key]

	if (placeholder) {
		return Object.entries(placeholder).reduce(
			(text, [key, value]) => text.replace(`{${key}}`, value),
			text,
		)
	}

	return text
}
