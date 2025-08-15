import type { APIRoute } from "astro"

// Simple in-memory store for demo purposes
const newsStore: Array<{
	id: string
	title: string
	content: string
	date: string
}> = []

export const prerender = false

export const GET: APIRoute = async () => {
	return new Response(JSON.stringify(newsStore), {
		headers: { "Content-Type": "application/json" },
	})
}

export const POST: APIRoute = async ({ request }) => {
	try {
		// First verify we can read the request body
		const rawBody = await request.text()

		// Then parse it as JSON
		const data = JSON.parse(rawBody)

		if (!data.title || !data.content) {
			return new Response(
				JSON.stringify({
					error: "Title and content are required",
					received: data,
				}),
				{
					status: 400,
					headers: { "Content-Type": "application/json" },
				},
			)
		}

		const newArticle = {
			id: Date.now().toString(),
			title: data.title,
			content: data.content,
			date: new Date().toISOString(),
		}

		newsStore.push(newArticle)
		return new Response(JSON.stringify(newArticle), {
			status: 201,
			headers: { "Content-Type": "application/json" },
		})
	} catch (error) {
		console.error("Error processing request:", error)
		return new Response(
			JSON.stringify({
				error: "Invalid request format",
				details: error instanceof Error ? error.message : String(error),
			}),
			{
				status: 400,
				headers: { "Content-Type": "application/json" },
			},
		)
	}
}
