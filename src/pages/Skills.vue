<template>
  <div class="container">
    <div class="content">
      <div class="text">
        <h5 class="intro" id="intro">💻 Skills & Technologies</h5>
        <p class="letter" id="letter">
           These are the technologies and tools I have experience with:
        </p>

        <div class="skills-wrapper">
          <div class="skills-list">
            <h6 class="category">🎨 Frontend</h6>
            <ul>
              <li>HTML, CSS, Bootstrap</li>
              <li>JavaScript, Vue 3, Nuxt</li>
              <li>jQuery, AJAX</li>
            </ul>
          </div>

          <div class="skills-list">
            <h6 class="category">⚙️ Backend</h6>
            <ul>
              <li>PHP, Laravel</li>
              <li>Ruby on Rails</li>
              <li>J2EE</li>
            </ul>
          </div>

          <div class="skills-list">
            <h6 class="category">🗄 Databases</h6>
            <ul>
              <li>MySQL</li>
            </ul>
          </div>

          <div class="skills-list">
            <h6 class="category">🛠 Other Tools & Concepts</h6>
            <ul>
              <li>Git & Version Control</li>
              <li>Web APIs & RESTful Services</li>
              <li>Responsive Design & UI/UX</li>
            </ul>
          </div>
        </div>
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
  padding: 40px 30px;
  background: linear-gradient(135deg, #1f2a3d, #253a52);
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
  max-width: 1100px;
  width: 100%;
  text-align: center;
  transition: all 0.3s ease-in-out;
}

.container:hover {
  box-shadow: 0 15px 60px rgba(0, 0, 0, 0.5);
}

.content {
  max-width: 850px;
  margin: 0 auto;
}

.intro {
  font-size: 24px;
  color: #f5f5f5;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.letter {
  font-size: 18px;
  color: #ecf0f1;
  line-height: 1.8;
  margin-bottom: 30px;
}

.skills-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  text-align: left;
}

.skills-list {
  background: rgba(255, 255, 255, 0.05);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.skills-list:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.category {
  font-size: 20px;
  color: #f39c12;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

ul li {
  font-size: 16px;
  color: #ecf0f1;
  line-height: 1.7;
  padding: 5px 0;
  transition: color 0.3s ease;
}

ul li:hover {
  color: #f39c12;
}

@media (max-width: 768px) {
  .container {
    padding: 15px;
    margin-bottom:30px;
  }

  .intro {
    font-size: 20px;
  }

  .letter {
    font-size: 16px;
  }

  .category {
    font-size: 18px;
  }

  ul li {
    font-size: 14px;
    line-height: 20px;
  }
}
</style>
