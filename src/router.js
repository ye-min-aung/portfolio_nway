import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/index.vue";
import About from "./pages/About.vue";
import Skills from "./pages/Skills.vue";
import Projects from "./pages/Projects.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/skills", component: Skills },
  { path: "/projects", component: Projects },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
