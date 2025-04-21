import { defineStore } from "pinia"
import { Breakpoints } from "~/util/enums"

export const useBreakpointStore = defineStore("breakpoint", () => {
	const windowWidth = ref(window.innerWidth)

	const setWindowWidth = (width: number) => {
		windowWidth.value = width
	}
	const isMobile = computed(() => windowWidth.value < Breakpoints.TABLET)
	const isTablet = computed(
		() =>
			windowWidth.value >= Breakpoints.TABLET &&
			windowWidth.value < Breakpoints.DESKTOP
	)
	const isDesktop = computed(
		() =>
			windowWidth.value >= Breakpoints.DESKTOP &&
			windowWidth.value < Breakpoints.WIDE_DESKTOP
	)
	const isWideDesktop = computed(
		() =>
			windowWidth.value >= Breakpoints.WIDE_DESKTOP &&
			windowWidth.value < Breakpoints.SUPER_WIDE_DESKTOP
	)
	const isSuperWideDesktop = computed(
		() => windowWidth.value >= Breakpoints.SUPER_WIDE_DESKTOP
	)

	return {
		windowWidth,
		setWindowWidth,
		isMobile,
		isTablet,
		isDesktop,
		isWideDesktop,
		isSuperWideDesktop,
	}
})
