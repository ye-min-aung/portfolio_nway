<template>
  <div class="page-container">
    <div class="vs-code-effect">
      <div
        v-for="index in 100"
        :key="index"
        class="code-snippet"
        :style="getRandomSnippetPosition(index)"
      >
        {{ getRandomSnippet() }}
      </div>
    </div>

    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: { Navbar },
  data() {
    return {
      activeTab: "Home",
      tabs: ["Home", "About", "Projects", "Contact"],
    };
  },
  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;
    },

    getRandomSnippet() {
      const snippets = [
        "<div> </div>",
        'puts "Hello"',
        "const x = 5;",
        'print("Hi!")',
        'echo "OK";',
        'alert("Wow!")',
        "<p>Text</p>",
        "let x = 10;",
        "if (true) {}",
        "function test() {}",
      ];

      return snippets[Math.floor(Math.random() * snippets.length)];
    },

    getRandomSnippetPosition(index) {
      const randomTop = Math.random() * 100;
      const randomLeft = Math.random() * 100;
      const randomFontSize = Math.random() * 5 + 10;
      const animationDelay = Math.random() * 5;

      const colors = [
        "#D4D4D4",
        "#C586C0",
        "#F9A825",
        "#9CDCFE",
      ];

      const randomColor = colors[Math.floor(Math.random() * colors.length)];

      return {
        top: `${randomTop}%`,
        left: `${randomLeft}%`,
        fontSize: `${randomFontSize}px`,
        color: randomColor,
        animationDelay: `${animationDelay}s`,
      };
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&display=swap");
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css";

.page-container {
  display: flex;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background-color: #0a192f !important;
  flex-direction: column;
}

.vs-code-effect .code-snippet {
  position: absolute;
  font-family: "Courier New", monospace;
  animation: code-snippet 6s infinite ease-in-out;
  opacity: 0.2;
  word-wrap: break-word;
  line-height: 1.2;
  max-width: 150px;
  text-align: center;
}

.navbar,
.router-view {
  z-index: 2;
  position: relative;
}

@keyframes code-snippet {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  50% {
    opacity: 0.2;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
</style>
