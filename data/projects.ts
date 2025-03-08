import aspi from "~/public/images/aspi.png"
import bloomberg from "~/public/images/bloomberg.png"
import pefa from "~/public/images/pefa.png"
import schema from "~/public/images/schema.png"
import sedus from "~/public/images/sedus.png"

export interface Project {
	title: string
	tools: string[]
	image: string
	notes: string
	link: string
}

export const projects: Project[] = [
	{
		title: "Schema Design Website",
		tools: ["Vue3", "Custom CMS"],
		image: schema,
		notes: "",
		link: "https://www.schemadesign.com",
	},
	{
		title: "Sedus Workscape of Tomorrow",
		tools: ["Nuxt3", "Sanity CMS"],
		image: sedus,
		notes: "",
		link: "https://www.workscapeoftomorrow.com",
	},
	{
		title: "PEFA Global Report 2022",
		tools: ["React", "Gatsby"],
		image: pefa,
		notes: "",
		link: "https://www.pefa.org/global-report-2022/en/",
	},
	{
		title: "Asia Society Blackbox of Chinese Politics",
		tools: ["Svelte", "d3", "Drupal"],
		image: aspi,
		notes: "",
		link: "https://asiasociety.org/policy-institute/decoding-chinas-20th-party-congress",
	},
	{
		title: "Bloomberg NEF 2022",
		tools: ["ThreeJS", "d3"],
		image: bloomberg,
		notes: "",
		link: "",
	},
]
