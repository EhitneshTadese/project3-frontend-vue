<template>
  <div class="minimal-template">
    <!-- Header -->
    <div class="header">
      <h1>{{ resume.name }}</h1>
      <div class="contact-info">
        {{ resume.address }} | {{ resume.phone }} | {{ resume.email }}
        <template v-if="resume.linkedin">| {{ resume.linkedin }}</template>
      </div>
    </div>

    <!-- Professional Summary -->
    <div v-if="resume.professionalSummary" class="section">
      <h2>PROFESSIONAL SUMMARY</h2>
      <p>{{ resume.professionalSummary }}</p>
    </div>

    <!-- Education -->
    <div class="section">
      <h2>EDUCATION</h2>
      <div v-for="(edu, index) in resume.education" :key="'edu-'+index" class="education-item">
        <div class="flex-between">
          <strong>{{ edu.institution }}</strong>
          <span>{{ formatDate(edu.graduationDate) }}</span>
        </div>
        <div>{{ edu.degree }}</div>
        <div v-if="edu.gpa">GPA: {{ edu.gpa }}</div>
      </div>
    </div>

    <!-- Experience -->
    <div class="section">
      <h2>EXPERIENCE</h2>
      <div v-for="(exp, index) in resume.experience" :key="'exp-'+index" class="experience-item">
        <div class="flex-between">
          <div>
            <strong>{{ exp.jobTitle }}</strong>
            <div class="company-name">{{ exp.companyName }}</div>
          </div>
          <span>{{ formatDate(exp.startDate) }} - {{ formatDate(exp.endDate) || 'Present' }}</span>
        </div>
        <ul v-if="exp.description">
          <li>{{ exp.description }}</li>
        </ul>
      </div>
    </div>

    <!-- Skills -->
    <div v-if="resume.skills && resume.skills.length" class="section">
      <h2>SKILLS</h2>
      <div class="skills-list">
        <div v-for="(skill, index) in resume.skills" :key="'skill-'+index" class="skill-item">
          {{ skill.name }} - {{ skill.proficiency }}
        </div>
      </div>
    </div>

    <!-- Awards -->
    <div v-if="resume.awards && resume.awards.length" class="section">
      <h2>AWARDS & ACHIEVEMENTS</h2>
      <div v-for="(award, index) in resume.awards" :key="'award-'+index" class="award-item">
        <div class="flex-between">
          <strong>{{ award.name }}</strong>
          <span>{{ formatDate(award.date) }}</span>
        </div>
      </div>
    </div>

    <!-- Activities -->
    <div v-if="resume.activities" class="section">
      <h2>ACTIVITIES</h2>
      <p>{{ resume.activities }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfessionalTemplate',
  props: {
    resume: {
      type: Object,
      required: true
    },
    formatDate: {
      type: Function,
      required: true
    }
  }
}
</script>

<style scoped>
.minimal-template {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Times New Roman', Times, serif;
  line-height: 1.5;
}

.header {
  text-align: center;
  margin-bottom: 2rem;
}

.header h1 {
  font-size: 24px;
  margin-bottom: 0.5rem;
}

.contact-info {
  font-size: 14px;
}

.section {
  margin-bottom: 1.5rem;
}

.section h2 {
  font-size: 16px;
  font-weight: bold;
  border-bottom: 1px solid #000;
  margin-bottom: 1rem;
  padding-bottom: 0.25rem;
}

.education-item, .experience-item, .award-item {
  margin-bottom: 1rem;
}

.flex-between {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.company-name {
  font-style: italic;
}

ul {
  margin-top: 0.5rem;
  padding-left: 1.5rem;
}

.skills-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 0.5rem;
}

.skill-item {
  padding: 0.25rem 0;
}

@media print {
  .minimal-template {
    padding: 0;
  }
}

@media (max-width: 600px) {
  .flex-between {
    flex-direction: column;
  }
  
  .skills-list {
    grid-template-columns: 1fr;
  }
}
</style> 