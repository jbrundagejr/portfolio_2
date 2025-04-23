export interface PageInterface {
	title: string
}

export interface Tool {
	icon: string
	link: string
}

export interface ProjectInterface {
	title: string
	tools: Tool[]
	image: string
	notes: string[]
	link: string
}

export interface AboutInterface {
	[key: string]: string
}
