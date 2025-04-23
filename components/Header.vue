<script setup lang="ts">
import { useStore } from "~/stores/store"
import { storeToRefs } from "pinia"
import { pages } from "~/util/constants"

const store = useStore()
const { scrollY } = storeToRefs(store)

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
</script>

<template>
	<header id="header">
		<div class="header__title">
			<h1>Jon Brundage Jr.</h1>
			<p v-if="atTopOfPage" class="fade-in">
				Software Engineer. Problem Solver. Life-long Learner.
			</p>
		</div>
		<nav v-if="!atTopOfPage" class="header__nav fade-in">
			<ul>
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
		</nav>
	</header>
</template>

<style scoped>
#header {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	position: sticky;
	top: 0;
	background: var(--white);
	z-index: 5;
	padding: 24px 0;
}

.header__title {
	display: flex;
	flex-direction: column;
}

.header__nav ul {
	display: flex;
	flex-direction: row;
	gap: 12px;
}

@media (min-width: 1080px) {
	.header__title {
		min-height: 108px;
	}
}

@media (prefers-color-scheme: dark) {
	#header {
		background: var(--black);
	}
}
</style>
