<template>
  <div class="modern-template">
    <!-- Header -->
    <div class="text-center mb-6">
      <h1 class="name">{{ resume.name }}</h1>
      <p class="contact-info">
        {{ resume.address }} | {{ resume.phone }} | {{ resume.email }}
        <template v-if="resume.linkedin"> | {{ resume.linkedin }}</template>
      </p>
    </div>

    <!-- Professional Summary -->
    <div v-if="resume.professionalSummary" class="mb-6">
      <h2 class="section-title">PROFESSIONAL SUMMARY (Optional)</h2>
      <p class="summary-text">{{ resume.professionalSummary }}</p>
    </div>

    <!-- Education -->
    <div class="mb-6">
      <h2 class="section-title">EDUCATION</h2>
      <div v-for="(edu, index) in resume.education" :key="'edu-'+index" class="mb-3">
        <div class="d-flex justify-space-between">
          <div class="education-left">
            <strong>{{ edu.institution }}</strong>
          </div>
          <div class="education-right">
            {{ formatDate(edu.startDate) }} - {{ formatDate(edu.graduationDate) }}
          </div>
        </div>
        <div>{{ edu.degree }}</div>
        <div v-if="edu.gpa && parseFloat(edu.gpa) > 3.0" class="gpa">
          GPA: {{ edu.gpa }}
        </div>
      </div>
    </div>

    <!-- Experience -->
    <div class="mb-6">
      <h2 class="section-title">EXPERIENCE</h2>
      <div v-for="(exp, index) in resume.experience" :key="'exp-'+index" class="mb-4">
        <div class="d-flex justify-space-between">
          <div class="experience-title">
            <strong>{{ exp.jobTitle }}</strong>, {{ exp.companyName }}
          </div>
          <div class="experience-date">
            {{ formatDateShort(exp.startDate) }} – {{ formatDateShort(exp.endDate) || 'Present' }}
          </div>
        </div>
        <ul class="experience-bullets" v-if="exp.description">
          <li>{{ exp.description }}</li>
        </ul>
      </div>
    </div>

    <!-- Skills Section -->
    <div v-if="resume.skills && resume.skills.length" class="mb-6">
      <h2 class="section-title">SKILLS</h2>
      <ul class="skills-list">
        <li v-for="(skill, index) in resume.skills" :key="'skill-'+index">
          {{ skill.name }} - {{ skill.proficiency }}
        </li>
      </ul>
    </div>

    <!-- Awards Section -->
    <div v-if="resume.awards && resume.awards.length" class="mb-6">
      <h2 class="section-title">AWARDS & ACHIEVEMENTS</h2>
      <div v-for="(award, index) in resume.awards" :key="'award-'+index" class="mb-2">
        <div class="d-flex justify-space-between">
          <strong>{{ award.name }}</strong>
          <span>{{ formatDate(award.date) }}</span>
        </div>
      </div>
    </div>

    <!-- Activities Section -->
    <div v-if="resume.activities" class="mb-6">
      <h2 class="section-title">EXTRACURRICULAR ACTIVITIES</h2>
      <p>{{ resume.activities }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    resume: {
      type: Object,
      required: true,
      validator: function(obj) {
        return obj.name !== undefined &&
               obj.email !== undefined &&
               obj.address !== undefined &&
               obj.phone !== undefined &&
               obj.professionalSummary !== undefined &&
               obj.experience !== undefined &&
               obj.education !== undefined &&
               obj.skills !== undefined;
      }
    },
    formatDate: {
      type: Function,
      required: true
    }
  },
  methods: {
    formatDateShort(date) {
      if (!date) return '';
      const d = new Date(date);
      return `${String(d.getMonth() + 1).padStart(2, '0')}/${String(d.getFullYear()).slice(-2)}`;
    }
  }
}
</script>

<style scoped>
.modern-template {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  font-family: Times New Roman, serif;
  line-height: 1.5;
}

.name {
  font-size: 24px !important;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-transform: none;
}

.contact-info {
  font-size: 14px;
  margin-bottom: 1.5rem;
}

.section-title {
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  border-bottom: 1px solid #000;
  margin-bottom: 1rem;
  padding-bottom: 0.25rem;
}

.summary-text {
  text-align: justify;
  margin-bottom: 1rem;
}

.education-left, .education-right {
  font-size: 14px;
}

.experience-title, .experience-date {
  font-size: 14px;
}

.experience-bullets {
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-top: 0.5rem;
  font-size: 14px;
}

.experience-bullets li {
  margin-bottom: 0.5rem;
}

.gpa {
  font-size: 14px;
  margin-top: 0.25rem;
}

.skills-list {
  list-style-type: disc;
  padding-left: 1.5rem;
}

.d-flex {
  display: flex;
}

.justify-space-between {
  justify-content: space-between;
}

.mb-6 {
  margin-bottom: 1.5rem;
}

.mb-4 {
  margin-bottom: 1rem;
}

.mb-3 {
  margin-bottom: 0.75rem;
}

.mb-2 {
  margin-bottom: 0.5rem;
}

@media print {
  .modern-template {
    padding: 0;
  }
}
</style> 