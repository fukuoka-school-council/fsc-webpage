import type { APIRoute } from "astro"

export const GET: APIRoute = async () => {
	const executives = [
		{
			id: 1,
			name: "Alex Johnson",
			title: "Chief Executive Officer",
			bio: "Leading our company with over 15 years of industry experience...",
		},
		{
			id: 2,
			name: "Taylor Smith",
			title: "Chief Technology Officer",
			bio: "Technology visionary with expertise in software architecture...",
		},
		{
			id: 3,
			name: "Jordan Lee",
			title: "Chief Marketing Officer",
			bio: "Marketing strategist with track record of successful campaigns...",
		},
	]

	return new Response(JSON.stringify(executives), {
		status: 200,
		headers: {
			"Content-Type": "application/json",
		},
	})
}
