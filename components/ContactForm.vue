<template>
  <form @submit.prevent="handleSubmit" id="contactForm">
    <label for="name">Name</label>
    <input id="name" type="text" v-model="name" placeholder="Name" required />
    <label for="email">Email</label>
    <input
      id="email"
      type="email"
      v-model="email"
      placeholder="Email"
      required
    />
    <label for="org">Subject</label>
    <input
      id="org"
      type="text"
      v-model="subject"
      placeholder="Subject"
      required
    />
    <label for="body">Your Inquiry</label>
    <textarea
      id="body"
      type="text"
      v-model="body"
      placeholder="Your Inquiry"
      required
    />
    <button>Submit</button>
  </form>
</template>

<script setup>
const name = ref("");
const email = ref("");
const subject = ref("");
const body = ref("");

const handleSubmit = () => {
  console.log("Submitted!");
};
</script>

<style scoped>
label,
input,
textarea {
  font-size: 20px;
}
</style>
