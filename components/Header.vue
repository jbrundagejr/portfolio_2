<script setup lang="ts">
import { useStore } from "~/stores/store"
import { storeToRefs } from "pinia"
import { pages } from "~/util/constants"
import { useBreakpointStore } from "~/stores/breakpointStore"

const store = useStore()
const { scrollY, currentPage } = storeToRefs(store)

const breakPointStore = useBreakpointStore()
const { isMobile } = storeToRefs(breakPointStore)

const atTopOfPage = computed(() => {
	return scrollY.value === 0
})

const handlepageClick = (e: Event) => {
	const target = e.target as HTMLButtonElement
	const page = target.value
	if (page === "About") {
		const el = document.getElementById(page)
		if (el) {
			el.scrollIntoView({ behavior: "smooth" })
		}
	} else {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		})
	}
}

const linksToRender = computed(() => {
	// if (currentPage.value === "Projects") {
	// 	return pages.filter((page) => page.title === "About")
	// } else {
	// 	return pages.filter((page) => page.title === "Projects")
	// }
	return pages.filter((page) => page.title !== currentPage.value)
})

const tagline = ["Software Engineer.", "Problem Solver.", "Life-long Learner."]
</script>

<template>
	<header id="header">
		<div class="header__header">
			<div class="header__title">
				<h1>Jon Brundage Jr.</h1>
				<span v-if="atTopOfPage || !isMobile" class="tag-line fade-in">
					<p v-for="line in tagline" :key="line">{{ line }}</p>
				</span>
			</div>
			<ul class="header__nav fade-in">
				<li v-for="page in linksToRender" :key="page.title">
					<button
						@click="handlepageClick"
						class="header__nav__link link"
						:value="page.title"
						:aria-label="`Scroll to ${page.title}`"
					>
						{{ page.title }}
					</button>
				</li>
			</ul>
		</div>
		<h2>{{ currentPage }}</h2>
	</header>
</template>

<style scoped>
#header {
	display: flex;
	flex-direction: column;
	padding: 24px 24px 0;
	z-index: 10;
	background: var(--white);
	position: sticky;
	top: 0;
	left: 0;
}

.h1--mobile {
	display: flex;
	flex-direction: column;
	gap: 0;
}

.last-name {
	text-align: center;
}

.suffix {
	width: 100%;
	text-align: right;
}

.tag-line {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}

.tag-line p {
	font-size: 16px;
	line-height: 20px;
	font-weight: 200;
}

#header::after {
	content: "";
	position: absolute;
	top: 100%;
	left: 0;
	width: 100%;
	height: 24px;
	background: linear-gradient(to bottom, var(--white) 0%, transparent 100%);
	pointer-events: none;
}
.header__header {
	display: flex;
	flex-direction: column;
}

.header__title {
	display: flex;
	flex-direction: column;
	min-height: 126px;
}

.header__nav {
	display: flex;
	flex-direction: row;
	gap: 12px;
	position: sticky;
	top: 0;
	justify-content: flex-end;
}

h2 {
	padding: 0 0 24px;
}

@media (min-width: 768px) {
	#header {
		padding: 24px 0 0;
	}

	.header__header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}

	.header__title {
		min-height: none;
	}
}

@media (min-width: 1080px) {
	.header__title {
		min-height: 110px;
	}

	h2 {
		padding: 0;
	}

	.header__nav__link {
		font-size: 24px;
	}

	.header__nav li {
		padding: 0 24px;
	}
}

@media (prefers-color-scheme: dark) {
	#header {
		background: var(--black);
	}

	#header::after {
		background: linear-gradient(to bottom, var(--black) 0%, transparent 100%);
	}
}
</style>
