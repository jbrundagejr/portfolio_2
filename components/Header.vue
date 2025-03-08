<script setup lang="ts">
import { useStore } from "~/store/store"
import { pages } from "~/data/pages"
import { storeToRefs } from "pinia"

const store = useStore()
const { scrollY } = storeToRefs(store)

const atTopOfPage = computed(() => {
	return scrollY.value === 0
})

const handleRouteClick = (e: Event) => {
	const target = e.target as HTMLButtonElement
	const route = target.value
	const el = document.getElementById(route)
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
				<li v-for="route in pages" :key="route.title">
					<button
						@click="handleRouteClick"
						class="header__nav__link link"
						:value="route.title"
					>
						{{ route.title }}
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

@media (prefers-color-scheme: dark) {
	#header {
		background: var(--black);
	}
}
</style>
