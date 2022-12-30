<template>
  <div v-if="submitted" class="container submitted">
  <h2>Thanks for reaching out! I'll get back to you shortly.</h2>
  </div>
  <form v-else @submit.prevent="handleSubmit" id="contactForm">
    <div class="form__element">
      <label for="name">Name</label>
      <input id="name" type="text" v-model="name" placeholder="Name" required />
    </div>
    <div class="form__element">
      <label for="email">Email</label>
      <input
        id="email"
        type="email"
        v-model="email"
        placeholder="Email"
        required
      />
    </div>
    <div class="form__element">
      <label for="org">Subject</label>
      <input
        id="org"
        type="text"
        v-model="subject"
        placeholder="Subject"
        required
      />
    </div>
    <div class="form__element">
      <label for="body">Your Inquiry</label>
      <textarea
        id="body"
        type="text"
        v-model="body"
        placeholder="Your Inquiry"
        required
      />
    </div>
    <CustomButton label="Send Jon an Email"/>
  </form>
</template>

<script setup>
import emailjs from "@emailjs/browser";
import CustomButton from "./CustomButton.vue";

const name = ref("");
const email = ref("");
const subject = ref("");
const body = ref("");
const submitted = ref(false);

const handleSubmit = () => {
  const templateParams = {
    name: name.value,
    email: email.value,
    subject: subject.value,
    body: body.value,
  };

emailjs.send(
  "service_epg22qw",
  "template_mzer7kn",
  templateParams,
  "9N-PltVTHVxDEt0_D"
)
  submitted.value = true;
  name.value = "";
  email.value = "";
  subject.value = "";
  body.value = "";
};
</script>

<style scoped>

form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 24px 0;
}

.form__element {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

label,
input,
textarea {
  font-size: 20px;
  border-radius: 0;
  border: none;
}

label {
  padding: 0;
}

input, textarea {
  padding: 5px;
}

textarea {
  min-height: 150px;
}

label:focus, input:focus, textarea:focus {
  outline: 2px solid #333333;
}

@media(min-width: 768px){
  form, .submitted {
    width: 50%;
    margin: 0 auto;
  }
}

@media(min-width: 1024px){
  form, .submitted {
    width: 880px;
  }
}
</style>
