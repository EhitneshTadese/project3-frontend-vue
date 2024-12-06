<template>
  <div class="professional-template">
    <!-- Header -->
    <div class="header">
      <h1>{{ resume.name }}</h1>
      <div class="contact-info">
        <div v-if="resume.address" class="contact-item">
          <i class="mdi mdi-map-marker"></i> {{ resume.address }}
        </div>
        <div v-if="resume.phone" class="contact-item">
          <i class="mdi mdi-phone"></i> {{ resume.phone }}
        </div>
        <div v-if="resume.email" class="contact-item">
          <i class="mdi mdi-email"></i> {{ resume.email }}
        </div>
        <div v-if="resume.linkedin" class="contact-item">
          <i class="mdi mdi-linkedin"></i> {{ resume.linkedin }}
        </div>
      </div>
    </div>

    <!-- Professional Summary -->
    <div v-if="resume.professionalSummary" class="section">
      <h2>Professional Summary</h2>
      <div class="content">
        {{ resume.professionalSummary }}
      </div>
    </div>

    <!-- Experience -->
    <div v-if="resume.experience && resume.experience.length" class="section">
      <h2>Professional Experience</h2>
      <div v-for="(exp, index) in resume.experience" :key="'exp-'+index" class="experience-item">
        <div class="title-row">
          <h3>{{ exp.jobTitle }}</h3>
          <span class="date">
            {{ formatDate(exp.startDate) }} - {{ exp.endDate ? formatDate(exp.endDate) : 'Present' }}
          </span>
        </div>
        <div class="company">{{ exp.companyName }}</div>
        <div v-if="exp.description" class="description">
          {{ exp.description }}
        </div>
      </div>
    </div>

    <!-- Education -->
    <div v-if="resume.education && resume.education.length" class="section">
      <h2>Education</h2>
      <div v-for="(edu, index) in resume.education" :key="'edu-'+index" class="education-item">
        <div class="title-row">
          <h3>{{ edu.institution }}</h3>
          <span class="date">{{ formatDate(edu.graduationDate) }}</span>
        </div>
        <div class="degree">{{ edu.degree }}</div>
        <div v-if="edu.gpa" class="gpa">GPA: {{ edu.gpa }}</div>
      </div>
    </div>

    <!-- Skills -->
    <div v-if="resume.skills && resume.skills.length" class="section">
      <h2>Skills</h2>
      <div class="skills-grid">
        <div v-for="(skill, index) in resume.skills" :key="'skill-'+index" class="skill-item">
          <span class="skill-name">{{ skill.name }}</span>
          <span class="skill-level">{{ skill.proficiency }}</span>
        </div>
      </div>
    </div>

    <!-- Awards -->
    <div v-if="resume.awards && resume.awards.length" class="section">
      <h2>Awards & Achievements</h2>
      <div v-for="(award, index) in resume.awards" :key="'award-'+index" class="award-item">
        <div class="title-row">
          <span class="award-name">{{ award.name }}</span>
          <span class="date">{{ formatDate(award.date) }}</span>
        </div>
      </div>
    </div>

    <!-- Activities -->
    <div v-if="resume.activities" class="section">
      <h2>Activities</h2>
      <div class="content">
        {{ resume.activities }}
      </div>
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
.professional-template {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;
}

.header {
  text-align: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #2196F3;
}

.header h1 {
  font-size: 2.5rem;
  color: #1976D2;
  margin-bottom: 1rem;
}

.contact-info {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #666;
}

.contact-item i {
  color: #1976D2;
}

.section {
  margin-bottom: 2rem;
}

.section h2 {
  color: #1976D2;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e0e0e0;
}

.title-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.5rem;
}

.title-row h3 {
  color: #333;
  font-size: 1.2rem;
  margin: 0;
}

.company {
  color: #666;
  font-style: italic;
  margin-bottom: 0.5rem;
}

.date {
  color: #666;
  font-size: 0.9rem;
}

.description {
  margin-top: 0.5rem;
  color: #555;
  white-space: pre-line;
}

.education-item, .experience-item, .award-item {
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 4px;
  border-left: 3px solid #1976D2;
}

.degree {
  color: #444;
  font-weight: 500;
}

.gpa {
  color: #666;
  font-size: 0.9rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}

.skill-item {
  background-color: #f5f5f5;
  padding: 0.75rem 1rem;
  border-radius: 4px;
  border-left: 3px solid #1976D2;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.skill-name {
  font-weight: 500;
}

.skill-level {
  color: #1976D2;
  font-size: 0.9rem;
}

.award-name {
  font-weight: 500;
}

.content {
  color: #555;
  line-height: 1.8;
  white-space: pre-line;
}

@media print {
  .professional-template {
    padding: 0;
  }
}

@media (max-width: 600px) {
  .contact-info {
    flex-direction: column;
    gap: 0.5rem;
  }

  .title-row {
    flex-direction: column;
    gap: 0.25rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style> 