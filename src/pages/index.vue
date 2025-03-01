<template>
  <div class="container mt-5">
    <h5 class="intro" id="intro">Hi, my name is</h5>
    <p class="name" id="name">Nway Pwint Phyu.</p>
    <p class="moto" id="moto">I build things for the web.</p>
    <p class="letter" id="letter">
      a Junior Web Developer working at a Japan-based Myanmar software company.
      I specialize in full-stack web development, with experience in PHP,
      Laravel, Ruby on Rails, J2EE, and Vue 3. Passionate about building dynamic
      and efficient web applications, I enjoy learning new technologies and
      improving my skills.
    </p>

    <Button :label="'Check'" />
  </div>
</template>

<script setup>
import Button from "../components/button.vue";
</script>

<style scoped>
@import "../assets/styles.css";
</style>
