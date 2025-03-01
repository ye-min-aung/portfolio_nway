<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">My Portfolio</a>
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
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="Projects">Projects</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="About" >About</router-link>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #0a192f !important;
}

.navbar-brand, .nav-link {
  color: #ccd6f6 !important;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #64ffda !important;
}
</style>
