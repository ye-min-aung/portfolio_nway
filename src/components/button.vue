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
  background: rgba(
    255,
    182,
    193,
    0.08
  ); /* Light pink with subtle transparency */
  border: 2px solid rgba(255, 182, 193, 0.3); /* Light pink border */
  transition: background 0.3s ease-in-out, border-color 0.3s ease-in-out;
  text-decoration: none; /* Prevent underlining */
}

/* 🔥 Logo Text */
.btn-text {
  font-size: 15px;
  letter-spacing: 2px;
  color: rgb(255, 255, 204) !important; /* Light pink on hover */
  font-family: "Poppins", sans-serif;
  transition: text-shadow 0.3s ease-in-out;
}

/* 🎯 Hover Effects - Glow Effect */
.btn-box:hover {
  background: rgba(255, 182, 193, 0.15); /* Slightly brighter light pink */
  border-color: rgba(255, 182, 193, 0.5); /* Light pink with more visibility */
}

.btn-text:hover {
  text-shadow: 0 0 8px #ffb6c150; /* Light pink glow on hover */
}

/* Responsive Styles */
@media (max-width: 768px) {
  .btn-box {
    padding: 8px 16px;
  }

  .btn-text {
    font-size: 14px;
  }
}
</style>
