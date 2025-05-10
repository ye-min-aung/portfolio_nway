<template>
  <div class="container">
    <div class="content d-flex">
      <div class="text text-danger">
        <h5 class="intro" id="intro">Hi, my name is</h5>
        <p class="name" id="name">Nway Pwint Phyu.</p>
        <p class="moto" id="moto">I bring ideas to life on the web.</p>
        <p class="letter" id="letter">
          A Junior Web Developer from Myanmar. I specialize in full-stack web
          development, with experience in PHP, Laravel, Ruby on Rails, J2EE, and
          Vue 3. Passionate about building dynamic and efficient web
          applications, I enjoy learning new technologies and improving my
          skills.
        </p>

        <Button @click="navigateToAbout" :label="'Let’s Curious About Nway'" />
      </div>

      <div class="vector-image">
        <img
          src="../assets/images/npp1.png"
          width="250px"
          alt="Nway Pwint Phyu"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from "../components/button.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const navigateToAbout = () => router.push("/about");
</script>

<style scoped>
@import "../assets/styles.css";


.container {
  margin-top: 80px; 
}

.content {
  margin: 1% 0 0 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.intro {
  font-size: 17px;
  color: rgba(255, 255, 255, 0.762);
}

.name {
  font-size: 40px;
  color: rgb(255, 255, 204);
  font-weight: 700;
}

.moto {
  font-size: 35px;
  font-weight: 700;
  color: rgba(255, 255, 204, 0.549);
}

.letter {
  width: 60%;
  font-size: 17px;
  color: rgba(255, 255, 255, 0.762);
  line-height: 30px;
}

.vector-image {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.vector-image img {
  width: 350px;
  height: auto;
  filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.5)); /* Soft shadow */
  mask-image: radial-gradient(
    circle,
    rgba(0, 0, 0, 0.096) 60%,
    rgba(0, 0, 0, 0) 90%
  ); 
  -webkit-mask-image: radial-gradient(
    circle,
    rgba(0, 0, 0, 1) 60%,
    rgba(0, 0, 0, 0) 90%
  );
  z-index: 2;
}

.vector-image::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 400px; 
  height: 400px; 
  background: linear-gradient(
    45deg,
    rgba(255, 255, 204, 0.397),
    /* Light yellow */ #0a192fe1 /* Dark navy blue */
  );
  clip-path: polygon(
    0 0,
    80% 0,
    100% 50%,
    50% 100%,
    0% 100%
  ); 
  z-index: 1; 
}

@media (max-width: 992px) {
  .container {
    padding: 0;
  }
  .content {
    margin: 0px;
  }
  .name {
    font-size: 32px; 
    margin-bottom: 10px; 
  }

  .moto {
    font-size: 30px; 
  }

  .letter {
    width: 100%; 
    font-size: 25px; 
    line-height: 50px;

  }

  .vector-image img {
    width: 300px; 
    height: auto; 
    margin: 10px 0 10px 10px;
  }

  .vector-image::before {
    width: 350px; 
    height: 300px; 
  }

  .content {
    flex-direction: column; /* Stack content vertically */
    align-items: center; /* Center align the text */
    text-align: justify; /* Align text in the center */
  }

  .vector-image {
    order: -1; /* Place the image above the paragraphs */
  }
}
@media (max-width: 480px) {
  .container {
    padding: 0 20px 0 0; /* Adjusted padding for better spacing */
  }
  .content {
    margin: 10%;
  }
  .name {
    font-size: 22px; /* Adjust font size */
    margin-bottom: 10px; /* Adds space between name and image */
  }

  .moto {
    font-size: 20px; /* Adjust font size */
  }

  .letter {
    width: 100%; /* Ensure full width for text */
    font-size: 15px; /* Adjust font size */
    line-height: 25px;
  }

  .vector-image img {
    width: 220px; /* Adjust the image size for smaller screens */
    height: auto; /* Maintain aspect ratio */
    margin-bottom: 5px;
  }

  .vector-image::before {
    width: 250px; /* Adjust size as needed */
    height: 250px; /* Adjust size as needed */
    clip-path: polygon(
      0 0,
      80% 0,
      100% 30%,
      50% 100%,
      0% 100%
    ); /* Unequal corners */
  }

  .content {
    flex-direction: column; /* Stack content vertically */
    align-items: center; /* Center align the text */
    text-align: justify; /* Align text in the center */
  }

  .vector-image {
    order: -1; /* Place the image above the paragraphs */
  }
}
</style>
