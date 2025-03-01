<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container py-2">
      <div >
        <img class="logo" src="../assets/images/icon.PNG" alt="" />
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">
              <span class="digit">01.</span>Home||
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/projects">
              <span class="digit">02.</span>About||
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">
              <span class="digit">03.</span>Projects||
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap");

.navbar {
  background-color: #0a192f !important;
}

.logo {
  width: 50px;
  height: 30px;
}
/* Navbar Links */
.navbar-nav {
  font-family: "Space Mono", monospace;
  font-size: 16px;
  font-weight: bold;
}

.navbar-brand,
.nav-link {
  color: #ccd6f6 !important;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #64ffda !important;
}
.digit {
  color: #64ffda !important;
}
</style>
