<script setup lang="ts">
import { useStore } from "~/stores/store"
import { storeToRefs } from "pinia"
import { pages } from "~/util/constants"
import Page from "~/components/Page.vue"

const store = useStore()
const { currentPage } = storeToRefs(store)

useHead({
	title: "jon's portfolio",
})
</script>

<template>
	<NuxtLayout>
		<template #body>
			<h2
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
	top: 156px;
	display: flex;
}

.page__header--passive {
	display: none;
}
</style>
