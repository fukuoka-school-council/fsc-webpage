import en from "src/locales/en"
import jp from "src/locales/ja"

export default function t(
	rawKey: string,
    locale: string,
	placeholder?: Record<string, string>,
) {
	const dictionary = locale === 'jp' ? jp : en

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
