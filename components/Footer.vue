<script setup lang="ts">
import { useStore } from "~/stores/store"
import Resume from "~/public/BrundageResume.pdf"
import LinkedInIcon from "./icons/LinkedInIcon.vue"
import GithubIcon from "./icons/GithubIcon.vue"
import ResumeIcon from "./icons/ResumeIcon.vue"
import ChevronIcon from "./icons/ChevronIcon.vue"
import { storeToRefs } from "pinia"
import { useBreakpointStore } from "~/stores/breakpointStore"

const store = useStore()
const { scrollY, projects } = storeToRefs(store)

const breakpointStore = useBreakpointStore()
const { isMobile } = storeToRefs(breakpointStore)

const links = computed(() => {
	return [
		{
			name: "Resume",
			href: Resume,
			icon: ResumeIcon,
		},
		{
			name: "LinkedIn",
			href: "https://www.linkedin.com/in/jbrundagejr/",
			icon: LinkedInIcon,
		},
		{
			name: "Github",
			href: "https://github.com/jbrundagejr",
			icon: GithubIcon,
		},
	]
})

const handlePageClick = (e: Event) => {
	const el = document.getElementById(projects.value[0].title)
	if (el) {
		if (scrollY.value === 0) {
			// If at the top of the page, scroll to the Projects section
			el.scrollIntoView({
				behavior: "smooth",
				block: "center",
			})
		} else {
			// If not at the top, scroll back to the top
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			})
		}
	}
}
</script>

<template>
	<footer id="footer">
		<div class="footer__container">
			<button
				v-if="!isMobile"
				@click="handlePageClick"
				aria-label="Go To Projects"
				class="scroll-button"
			>
				{{ scrollY === 0 ? `Scroll` : `Back to Top` }}
				<ChevronIcon :up="scrollY !== 0" />
			</button>
			<ul>
				<li v-for="link in links" :key="link.name">
					<a :href="link.href" target="_blank" rel="noreferrer"
						><component :is="link.icon" />
					</a>
				</li>
			</ul>
		</div>
	</footer>
</template>

<style scoped>
#footer {
	position: fixed;
	bottom: 0;
	display: flex;
	justify-content: flex-end;
	z-index: 10;
	background: var(--white);
	padding: 12px 24px 24px;
	width: calc(100% - 48px);
}

.tool-icon {
	width: 36px;
	height: 36px;
}

.footer__container {
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
	width: 100%;
	position: relative;
}

.scroll-button {
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	background: transparent;
	border: 1px solid (var--black);
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
	color: inherit;
	padding: 8px 16px;
}

#footer::after {
	content: "";
	position: absolute;
	bottom: 100%;
	left: 0;
	width: 100%;
	height: 24px;
	background: linear-gradient(to top, var(--white) 0%, transparent 100%);
	pointer-events: none;
}

#footer ul {
	display: flex;
	flex-direction: row;
	gap: 24px;
	justify-content: flex-end;
}

#footer ul li a {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 100%;
}

button:hover::before,
a:hover::before {
	transform: scaleX(0);
}

@media (min-width: 1080px) {
	#footer {
		padding: 12px 24px 24px;
		position: sticky;
	}
}

@media (prefers-color-scheme: dark) {
	#footer {
		background: var(--black);
	}

	#footer::after {
		background: linear-gradient(to top, var(--black) 0%, transparent 100%);
	}
}
</style>
