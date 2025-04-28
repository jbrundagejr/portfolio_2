import type { PageInterface } from "./types"

export const BASE_URL =
	import.meta.env.MODE === "production"
		? "https://jonbrundagejr.com"
		: "http://localhost:3000"

export const pages: PageInterface[] = [
	{
		title: "Projects",
	},
	{
		title: "About",
	},
]
