<template>
  <a class="navbar-brand btn-box" href="#">
    <span class="btn-text">{{ label }}</span>
  </a>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  label: {
    type: String,
    required: true,
  },
  route: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.btn-box {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  background: rgba(100, 255, 218, 0.08); /* Subtle transparency */
  clip-path: polygon(
    0% 20%,
    10% 0%,
    90% 0%,
    100% 20%,
    100% 80%,
    90% 100%,
    10% 100%,
    0% 80%
  );
  border: 2px solid rgba(100, 255, 218, 0.3);
  transition: background 0.3s ease-in-out, border-color 0.3s ease-in-out;
}

/* 🔥 Logo Text */
.btn-text {
  font-size: 22px;
  letter-spacing: 2px;
  color: #64ffda;
  font-family: "Poppins", sans-serif;
  transition: text-shadow 0.3s ease-in-out;
}

/* 🎯 Hover Effects - Glow Effect */
.btn-text-box:hover {
  background: rgba(100, 255, 218, 0.15); /* Slightly brighter */
  border-color: rgba(100, 255, 218, 0.5);
}

.btn-text:hover {
  text-shadow: 0 0 8px #64ffdb50;
}
</style>
