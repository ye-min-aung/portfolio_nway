<template>
  <div class="projects-container">
    <div class="content">
      <h2 class="projects-title">My Projects</h2>
      <div class="project-list">
        <div class="project-card">
          <div class="card-header">
            <span class="file-name">school-assignments.html</span>
          </div>
          <div class="card-body">
            <p class="project-description">
              Various assignments completed during my academic journey, ranging
              from basic to complex web development challenges.
            </p>
          </div>
        </div>

        <div class="project-card">
          <div class="card-header">
            <span class="file-name">pizza-order-system.php</span>
          </div>
          <div class="card-body">
            <p class="project-description">
              A pizza ordering system built using PHP Laravel, designed as part of
              a course project. Users can browse, order, and pay for pizzas.
            </p>
          </div>
        </div>

        <div class="project-card">
          <div class="card-header">
            <span class="file-name">student-management-system.php</span>
          </div>
          <div class="card-body">
            <p class="project-description">
              A student information management system built using pure PHP. This
              project allows the management of student data and grades.
            </p>
          </div>
        </div>

        <div class="project-card">
          <div class="card-header">
            <span class="file-name">directory-system-j2ee.java</span>
          </div>
          <div class="card-body">
            <p class="project-description">
              A directory system for school internships developed using J2EE. The
              application connects students and employers in Yangon, allowing
              students to find internship opportunities and employers to post
              available positions.
            </p>
          </div>
        </div>

        <div class="project-card">
          <div class="card-header">
            <span class="file-name">team-management-project.rb</span>
          </div>
          <div class="card-body">
            <p class="project-description">
              A team management system currently in development, utilizing Ruby on
              Rails for the backend API and Vue for the frontend. This project is
              part of my work at the company.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;700&display=swap');

.projects-container {
  margin-top: 50px;
  padding: 20px;
  background: #1f2a3d;
  border-radius: 15px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  overflow: scroll;
}

.content {
  text-align: center;
}

.projects-title {
  font-size: 24px;
  color: #f5f5f5;
  font-weight: 700;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: 'Fira Code', monospace;
}

.project-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 15px;
  padding: 0 15px;
}

.project-card {
  background: #34495e;
  border-radius: 10px;
  padding: 12px;
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.2);
}

.card-header {
  background-color: #2c3e50;
  padding: 8px 12px;
  border-radius: 8px;
  font-family: 'Fira Code', monospace;
  color: #f39c12;
  font-size: 14px;
  text-transform: uppercase;
  margin-bottom: 10px;
  letter-spacing: 1px;
}

.file-name {
  font-weight: bold;
}

.card-body {
  background: #2c3e50;
  padding: 10px;
  border-radius: 8px;
  font-family: 'Fira Code', monospace;
}

.project-description {
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 12px;
  color: #ecf0f1;
}

@media (max-width: 768px) {
  .projects-title {
    font-size: 22px;
  }

  .project-description {
    font-size: 13px;
  }

  .card-header {
    font-size: 13px;
  }

  .card-body {
    padding: 8px;
  }
}
</style>
