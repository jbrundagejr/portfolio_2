<template>
  <NuxtLayout>
    <template #body>
      <div id="about" class="container">
        <h1>About</h1>
        <div class="half__grid">
          <img :src="about.img" alt="Jon Brundage jr." class="bio__image"/>
          <div class="bio">
            <p>{{ about.bio1 }}</p>
            <p>{{ about.bio2 }}</p>
            <span>
              <a :href="resume" target="_blank" rel="noreferrer">View Jon's Resume</a>
            </span>
          </div>
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>

<script setup>
import { about } from "~~/data/about.js";
import resume from '~/assets/BrundageResume.pdf'

useHead({
  title: "About"
})
</script>

<style scoped>
.bio {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.bio__image {
  width: 100%;
  height: auto;
}

@media(min-width: 768px){
  .bio {
    gap: 30px;
  }

  .bio__image {
    max-width: 600px;
  }
}
</style>
