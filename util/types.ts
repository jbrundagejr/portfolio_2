export interface PageInterface {
	title: string
}

export interface ProjectInterface {
	title: string
	tools: string[]
	image: string
	notes: string
	link: string
}

export interface AboutInterface {
	[key: string]: string
}
