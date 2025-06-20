import { defineStore } from "pinia"
import { BASE_URL } from "~/util/constants"
import type {
	PageInterface,
	ProjectInterface,
	AboutInterface,
} from "~/util/types"

export const useStore = defineStore("store", () => {
	const projects = ref<ProjectInterface[]>([])
	const about = ref<AboutInterface | null>(null)
	const mobileMenuOpen = ref(false)
	const currentPage = ref<string>("Projects")
	const projectIndex = ref<number>(0)
	const scrollY = ref(0)

	const getProjects = async () => {
		const data = await fetch(`${BASE_URL}/data/projects.json`)
		const json = await data.json()
		if (json.length > 0) {
			projects.value = json
		}
	}

	const getAbout = async () => {
		const data = await fetch(`${BASE_URL}/data/about.json`)
		const json = await data.json()
		if (json) {
			about.value = json
		}
	}

	const toggleMobileMenu = () => {
		mobileMenuOpen.value = !mobileMenuOpen.value
	}

	const setCurrentPage = (string: string) => {
		currentPage.value = string
	}

	const setProjectIndex = (index: number) => {
		projectIndex.value = index
	}

	const setScrollY = (number: number) => {
		scrollY.value = number
	}

	return {
		projects,
		getProjects,
		about,
		getAbout,
		mobileMenuOpen,
		toggleMobileMenu,
		projectIndex,
		setProjectIndex,
		currentPage,
		setCurrentPage,
		scrollY,
		setScrollY,
	}
})
