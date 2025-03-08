import { defineStore } from "pinia"

export const useStore = defineStore("store", () => {
	const mobileMenuOpen = ref(false)
	const currentProject = ref(0)
	const currentPage = ref<string>("Projects")

	const scrollY = ref(0)

	const setCurrentPage = (string: string) => {
		currentPage.value = string
	}

	const setScrollY = (number: number) => {
		scrollY.value = number
	}

	return {
		mobileMenuOpen,
		currentProject,
		currentPage,
		setCurrentPage,
		scrollY,
		setScrollY,
	}
})
