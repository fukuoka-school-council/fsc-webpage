export interface ExecutiveContent {
	name: string
	furigana?: string
	schoolRole: string
	role: string
	schoolName: string
	grade: number
	comment: string
}

export interface NewsContent {
	id: number
	date: string
	en: {
		title: string
		content: string
	}
	ja: {
		title: string
		content: string
	}
	author: {
		name: string
		icon: string
	}
}

export type ContentUnion = ExecutiveContent[] | NewsContent[]
