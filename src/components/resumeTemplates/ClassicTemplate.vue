<template>
  <div class="classic-template">
    <!-- Header -->
    <div class="header">
      <div class="name-section">
        <h1>{{ resume.name }}</h1>
        <div class="underline"></div>
      </div>
      <div class="contact-info">
        <span><i class="mdi mdi-map-marker"></i> {{ resume.address }}</span>
        <span><i class="mdi mdi-phone"></i> {{ resume.phone }}</span>
        <span><i class="mdi mdi-email"></i> {{ resume.email }}</span>
        <span v-if="resume.linkedin"><i class="mdi mdi-linkedin"></i> {{ resume.linkedin }}</span>
      </div>
    </div>

    <!-- Professional Summary -->
    <div v-if="resume.professionalSummary" class="section">
      <div class="section-header">
        <i class="mdi mdi-account-tie section-icon"></i>
        <h2>Professional Summary</h2>
      </div>
      <div class="section-content summary">
        {{ resume.professionalSummary }}
      </div>
    </div>

    <!-- Education -->
    <div class="section">
      <div class="section-header">
        <i class="mdi mdi-school section-icon"></i>
        <h2>Education</h2>
      </div>
      <div class="section-content">
        <div v-for="(edu, index) in resume.education" :key="'edu-'+index" class="education-item">
          <div class="edu-header">
            <h3>{{ edu.institution }}</h3>
            <span class="date">{{ formatDate(edu.graduationDate) }}</span>
          </div>
          <div class="degree">{{ edu.degree }}</div>
          <div v-if="edu.gpa && parseFloat(edu.gpa) > 3.0" class="gpa">
            GPA: {{ edu.gpa }}
          </div>
        </div>
      </div>
    </div>

    <!-- Experience -->
    <div class="section">
      <div class="section-header">
        <i class="mdi mdi-briefcase section-icon"></i>
        <h2>Experience</h2>
      </div>
      <div class="section-content">
        <div v-for="(exp, index) in resume.experience" :key="'exp-'+index" class="experience-item">
          <div class="exp-header">
            <div class="exp-title">
              <h3>{{ exp.jobTitle }}</h3>
              <div class="company">{{ exp.companyName }}</div>
            </div>
            <span class="date">{{ formatDateShort(exp.startDate) }} – {{ formatDateShort(exp.endDate) || 'Present' }}</span>
          </div>
          <ul v-if="exp.description" class="experience-bullets">
            <li>{{ exp.description }}</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Skills -->
    <div v-if="resume.skills && resume.skills.length" class="section">
      <div class="section-header">
        <i class="mdi mdi-lightbulb section-icon"></i>
        <h2>Skills</h2>
      </div>
      <div class="section-content skills-grid">
        <div v-for="(skill, index) in resume.skills" :key="'skill-'+index" class="skill-item">
          <span class="skill-name">{{ skill.name }}</span>
          <div class="skill-level">{{ skill.proficiency }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.classic-template {
  max-width: 850px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Crimson Text', Georgia, serif;
  line-height: 1.6;
  color: #2c3e50;
  background: #fff;
  box-shadow: 0 0 20px rgba(0,0,0,0.1);
}

.header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.name-section {
  position: relative;
  display: inline-block;
  margin-bottom: 1rem;
}

.name-section h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin: 0;
  font-weight: 700;
  letter-spacing: 1px;
}

.underline {
  height: 3px;
  background: linear-gradient(to right, #2c3e50, #3498db);
  margin-top: 0.5rem;
}

.contact-info {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  font-size: 0.95rem;
  color: #666;
}

.contact-info span {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.contact-info i {
  color: #3498db;
}

.section {
  margin-bottom: 2rem;
  padding-bottom: 1rem;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #ecf0f1;
  padding-bottom: 0.5rem;
}

.section-icon {
  font-size: 1.5rem;
  color: #3498db;
}

.section h2 {
  font-size: 1.5rem;
  color: #2c3e50;
  margin: 0;
  font-weight: 600;
}

.summary {
  text-align: justify;
  padding: 0 1rem;
}

.edu-header, .exp-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.5rem;
}

.edu-header h3, .exp-header h3 {
  font-size: 1.2rem;
  color: #2c3e50;
  margin: 0;
}

.degree {
  color: #666;
  font-style: italic;
}

.company {
  color: #666;
  font-size: 0.95rem;
}

.date {
  color: #95a5a6;
  font-size: 0.9rem;
}

.experience-bullets {
  list-style-type: none;
  padding-left: 1.5rem;
  margin-top: 0.5rem;
}

.experience-bullets li {
  position: relative;
  margin-bottom: 0.5rem;
}

.experience-bullets li::before {
  content: "•";
  color: #3498db;
  position: absolute;
  left: -1rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  padding: 0 1rem;
}

.skill-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  background: #f8f9fa;
  border-radius: 4px;
  border-left: 3px solid #3498db;
  transition: transform 0.2s ease;
}

.skill-item:hover {
  transform: translateX(5px);
}

.skill-level {
  font-size: 0.9rem;
  color: #3498db;
  font-weight: 500;
}

@media print {
  .classic-template {
    padding: 0;
    box-shadow: none;
  }
}

@media (max-width: 600px) {
  .contact-info {
    flex-direction: column;
    gap: 0.5rem;
  }

  .edu-header, .exp-header {
    flex-direction: column;
    gap: 0.25rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .name-section h1 {
    font-size: 2rem;
  }
}
</style>

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