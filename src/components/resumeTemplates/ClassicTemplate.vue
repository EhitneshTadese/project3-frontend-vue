<template>
  <div class="classic-template">
    <!-- Header -->
    <div class="text-center mb-6">
      <h1 class="text-h3 font-weight-bold mb-2">{{ resume.name }}</h1>
      <p class="text-subtitle-1">
        {{ resume.address }} | {{ resume.phone }} | {{ resume.email }}
        <template v-if="resume.linkedin">| {{ resume.linkedin }}</template>
      </p>
    </div>

    <!-- Professional Summary -->
    <div class="mb-6">
      <h2 class="section-title">PROFESSIONAL SUMMARY</h2>
      <p class="text-body-1">{{ resume.professionalSummary }}</p>
    </div>

    <!-- Education -->
    <div class="mb-6">
      <h2 class="section-title">EDUCATION</h2>
      <div v-for="(edu, index) in resume.education" :key="'edu-'+index">
        <div class="d-flex justify-space-between align-center">
          <div>
            <strong>{{ edu.institution }}</strong>, {{ edu.degree }}
            <div v-if="edu.gpa" class="text-body-2">GPA: {{ edu.gpa }}</div>
          </div>
          <div class="text-right">
            {{ formatDate(edu.graduationDate) }}
          </div>
        </div>
      </div>
    </div>

    <!-- Professional Experience -->
    <div class="mb-6">
      <h2 class="section-title">PROFESSIONAL EXPERIENCE</h2>
      <div v-for="(exp, index) in resume.experience" :key="'exp-'+index" class="mb-4">
        <div class="d-flex justify-space-between align-center">
          <div>
            <strong>{{ exp.companyName }}</strong>, {{ exp.jobTitle }}
          </div>
          <div class="text-right">
            {{ formatDate(exp.startDate) }} - {{ formatDate(exp.endDate) || 'Present' }}
          </div>
        </div>
        <ul class="mt-2 experience-bullets" v-if="exp.description">
          <li>{{ exp.description }}</li>
        </ul>
      </div>
    </div>

    <!-- Skills -->
    <div v-if="resume.skills && resume.skills.length" class="mb-6">
      <h2 class="section-title">SKILLS</h2>
      <ul class="skills-list">
        <li v-for="(skill, index) in resume.skills" :key="'skill-'+index">
          {{ skill.name }} - {{ skill.proficiency }}
        </li>
      </ul>
    </div>

    <!-- Awards -->
    <div v-if="resume.awards && resume.awards.length" class="mb-6">
      <h2 class="section-title">AWARDS</h2>
      <div v-for="(award, index) in resume.awards" :key="'award-'+index">
        <div class="d-flex justify-space-between">
          <strong>{{ award.name }}</strong>
          <span>{{ formatDate(award.date) }}</span>
        </div>
      </div>
    </div>

    <!-- Activities -->
    <div v-if="resume.activities" class="mb-6">
      <h2 class="section-title">ACTIVITIES</h2>
      <p>{{ resume.activities }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClassicTemplate',
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
.classic-template {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  font-family: 'Times New Roman', Times, serif;
}

.section-title {
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  border-bottom: 1px solid #000;
  margin-bottom: 1rem;
  padding-bottom: 0.25rem;
}

.experience-bullets {
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-top: 0.5rem;
}

.skills-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  columns: 2;
}

h1 {
  font-size: 2rem !important;
  text-transform: uppercase;
}

.text-subtitle-1 {
  font-size: 1rem;
}

.mb-6 {
  margin-bottom: 1.5rem;
}

ul li {
  margin-bottom: 0.5rem;
}

@media print {
  .classic-template {
    padding: 0;
  }
}
</style> 