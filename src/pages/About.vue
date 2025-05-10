<template>
  <div class="container">
    <div class="content">
      <div class="text">
        <h5 class="intro" id="intro">About Me</h5>
        <p class="letter" id="letter">
           Hi, I'm <strong class="highlight">Nway Pwint Phyu</strong>, a Junior Web Developer based in Myanmar, currently working at a Japan-based software company. I graduated with a <strong class="highlight">Computer Science degree</strong> in 2024 and have since been diving into exciting web development projects.
        </p>

        <p class="journey-text">
          My journey into web development began during my university years, where I discovered a passion for both frontend and backend development. Throughout my academic career, I participated in hands-on projects and internships, gaining practical skills in programming and problem-solving. Over time, I realized that I could combine my creativity and technical abilities to build dynamic web applications.
        </p>

        <p class="journey-text">
          I am proficient in HTML, CSS, JavaScript, and frameworks like Vue 3. I also have experience working with backend technologies such as PHP and Ruby on Rails. My projects have ranged from simple websites to complex web applications, and I’m always keen to learn new technologies to further enhance my skills.
        </p>

        <p class="journey-text">
          Beyond coding, I have a strong interest in UI/UX design. I believe that great user experiences are key to successful products, and I aim to create clean, intuitive, and engaging interfaces. I prioritize accessibility and responsiveness to ensure my projects are usable by everyone, regardless of device or ability.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
@import "../assets/styles.css";

.container {
  margin-top: 50px;
  padding: 40px 25px;
  background: linear-gradient(135deg, #1f2a3d, #253a52);
  border-radius: 15px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
  width: 100%;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.content {
  max-width: 850px;
  margin: 0 auto;
  text-align: left;
  color: #ecf0f1;
}

.intro {
  font-size: 26px;
  color: #f5f5f5;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.letter {
  font-size: 18px;
  line-height: 1.8;
  margin-bottom: 30px;
  font-weight: 400;
}

.journey-text {
  font-size: 17px;
  line-height: 1.7;
  margin-bottom: 20px;
  font-weight: 400;
}

.highlight {
  color: #f39c12;
  font-weight: bold;
}

.moto {
  font-size: 32px;
  color: #f39c12;
  font-weight: 700;
  margin-bottom: 30px;
}

.text:hover {
  transform: translateY(-5px);
  transition: transform 0.3s ease;
}

@media (max-width: 768px) {
  .container {
    padding: 25px;
    margin:10px;
  }

  .intro {
    font-size: 22px;
  }

  .moto {
    font-size: 28px;
  }

  .letter, .journey-text {
    font-size: 15px;
  }
}
</style>
