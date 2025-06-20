import { defineStore } from "pinia"
import { Breakpoints } from "~/util/enums"

export const useBreakpointStore = defineStore("breakpoint", () => {
	const windowWidth = ref<number | null>(window ? window.innerWidth : null)

	const setWindowWidth = (width: number) => {
		windowWidth.value = width
	}
	const isMobile = computed(
		() => windowWidth.value && windowWidth.value < Breakpoints.TABLET
	)
	const isTablet = computed(
		() =>
			windowWidth.value &&
			windowWidth.value >= Breakpoints.TABLET &&
			windowWidth.value < Breakpoints.DESKTOP
	)

	const isTabletOrGreater = computed(
		() => windowWidth.value && windowWidth.value >= Breakpoints.TABLET
	)
	const isDesktop = computed(
		() =>
			windowWidth.value &&
			windowWidth.value >= Breakpoints.DESKTOP &&
			windowWidth.value < Breakpoints.WIDE_DESKTOP
	)
	const isWideDesktop = computed(
		() =>
			windowWidth.value &&
			windowWidth.value >= Breakpoints.WIDE_DESKTOP &&
			windowWidth.value < Breakpoints.SUPER_WIDE_DESKTOP
	)
	const isSuperWideDesktop = computed(
		() =>
			windowWidth.value && windowWidth.value >= Breakpoints.SUPER_WIDE_DESKTOP
	)

	return {
		windowWidth,
		setWindowWidth,
		isMobile,
		isTablet,
		isTabletOrGreater,
		isDesktop,
		isWideDesktop,
		isSuperWideDesktop,
	}
})
