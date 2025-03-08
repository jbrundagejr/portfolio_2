<script setup lang="ts">
import { useStore } from "~/store/store"
import Page from "~/components/Page.vue"
import { pages } from "~/data/pages"
import { storeToRefs } from "pinia"

const store = useStore()
const { currentPage, scrollY } = storeToRefs(store)
const { setScrollY } = store

useHead({
	title: "jon's portfolio",
})

onMounted(() => {
	window.addEventListener("scroll", () => {
		setScrollY(window.scrollY)
	})
})
</script>

<template>
	<NuxtLayout>
		<template #body>
			<h2
				v-if="scrollY > 0"
				v-for="page in pages"
				:key="page.title"
				:class="
					currentPage === page.title
						? 'page__header page__header--active fade-in'
						: 'page__header page__header--passive fade-in'
				"
			>
				{{ page.title }}
			</h2>
			<Page v-for="page in pages" :key="page.title" :page="page" />
			<!--
        <Project
          v-for="project in projects"
          :key="project.title"
          :project="project"
        />
      -->
		</template>
	</NuxtLayout>
</template>

<style scoped>
.page__header {
	transition: all 350ms;
}

.page__header--active {
	position: sticky;
	top: 120px;
	display: flex;
}

.page__header--passive {
	display: none;
}
</style>
