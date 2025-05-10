<template>
  <div>
    <div class="main-nav-bar">
      <button @click="navigateToHome" class="nav-btn">
        <i class="fas fa-home icon"></i> <span>Home</span>
      </button>
      <button @click="navigateToAbout" class="nav-btn">
        <i class="fas fa-user icon"></i> <span>About</span>
      </button>
      <button @click="navigateToSkill" class="nav-btn">
        <i class="fas fa-cogs icon"></i> <span>Skills</span>
      </button>
      <button @click="navigateToProject" class="nav-btn">
        <i class="fas fa-project-diagram icon"></i> <span>Projects</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const navigateToHome = () => router.push("/");
const navigateToAbout = () => router.push("/about");
const navigateToSkill = () => router.push("/skills");
const navigateToProject = () => router.push("/projects");
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Space+Mono:wght@600&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #0a192f;
}

.main-nav-bar {
  position: fixed;
  top: 10px;
  left: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 12px;
  background: rgba(10, 25, 47, 0.95);
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
}

.nav-btn {
  display: flex;
  align-items: center;
  padding: 10px 15px;
  background: linear-gradient(45deg, rgba(255, 255, 204, 0.2), rgba(10, 25, 47, 0.9));
  color: rgb(255, 255, 204);
  border: none;
  cursor: pointer;
  font-family: "Space Mono", monospace;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
  gap: 12px;
  position: relative;
  overflow: hidden;
}

.nav-btn:hover {
  background: rgba(255, 255, 204, 0.568);
  color: #0a192f;
}

.nav-btn:active {
  transform: scale(0.95);
}

.icon {
  font-size: 20px;
  transition: all 0.3s ease-in-out;
}

.nav-btn:hover .icon {
  color: #0a192f;
}

@media (max-width: 768px) {
  .main-nav-bar {
    top: 0;
    left: 0;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    padding: 10px;
    border-radius: 0;
  }

  .nav-btn {
    padding: 10px 14px;
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .nav-btn {
    font-size: 12px;
    padding: 8px 10px;
    gap: 6px;
  }

  .nav-btn span {
    display: none;
  }

  .icon {
    font-size: 16px;
  }
}
</style>
