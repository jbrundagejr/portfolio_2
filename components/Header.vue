<script setup lang="ts">
import { useStore } from "~/stores/store"
import { storeToRefs } from "pinia"
import { pages } from "~/util/constants"

const store = useStore()
const { scrollY, currentPage } = storeToRefs(store)

const atTopOfPage = computed(() => {
	return scrollY.value === 0
})

const handlepageClick = (e: Event) => {
	const target = e.target as HTMLButtonElement
	const page = target.value
	const el = document.getElementById(page)
	if (el) {
		el.scrollIntoView({ behavior: "smooth" })
	}
}

const pageTitle = computed(() => {})
</script>

<template>
	<header id="header">
		<div class="header__header">
			<div class="header__title">
				<h1>Jon Brundage Jr.</h1>
				<p v-if="atTopOfPage" class="fade-in">
					Software Engineer. Problem Solver. Life-long Learner.
				</p>
			</div>
			<ul v-if="!atTopOfPage" class="header__nav fade-in">
				<li v-for="page in pages" :key="page.title">
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
	padding: 24px 0 0;
	z-index: 5;
	background: var(--white);
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
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
}

.header__title {
	display: flex;
	flex-direction: column;
}

.header__nav {
	display: flex;
	flex-direction: row;
	gap: 12px;
}

@media (min-width: 1080px) {
	#header {
		position: sticky;
		top: 0;
		left: 0;
	}
	.header__title {
		min-height: 110px;
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
