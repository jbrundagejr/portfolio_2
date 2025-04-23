import type { PageInterface } from "./types"

export const BASE_URL =
	import.meta.env.MODE === "production"
		? "https://jons-porfolio-2.netlify.app"
		: "http://localhost:3000"

export const pages: PageInterface[] = [
	{
		title: "Projects",
	},
	{
		title: "About",
	},
]
