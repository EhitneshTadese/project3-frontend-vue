<template>
  <div class="classic-template">
    <!-- Header -->
    <div class="header">
      <div class="name-section">
        <h1>{{ resume.name }}</h1>
        <div class="underline"></div>
      </div>
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
      <div class="section-header">
        <i class="mdi mdi-account-tie section-icon"></i>
        <h2>Professional Summary</h2>
      </div>
      <div class="section-content summary">
        {{ resume.professionalSummary }}
      </div>
    </div>

    <!-- Experience -->
    <div v-if="resume.experience && resume.experience.length" class="section">
      <div class="section-header">
        <i class="mdi mdi-briefcase section-icon"></i>
        <h2>Professional Experience</h2>
      </div>
      <div class="section-content">
        <div v-for="(exp, index) in resume.experience" :key="'exp-'+index" class="experience-item">
          <div class="exp-header">
            <div class="exp-title">
              <h3>{{ exp.jobTitle }}</h3>
              <div class="company">{{ exp.companyName }}</div>
            </div>
            <span class="date">
              {{ formatDate(exp.startDate) }} - {{ exp.endDate ? formatDate(exp.endDate) : 'Present' }}
            </span>
          </div>
          <div v-if="exp.description" class="description">
            {{ exp.description }}
          </div>
        </div>
      </div>
    </div>

    <!-- Education -->
    <div v-if="resume.education && resume.education.length" class="section">
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
          <div v-if="edu.gpa" class="gpa">GPA: {{ edu.gpa }}</div>
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

    <!-- Awards -->
    <div v-if="resume.awards && resume.awards.length" class="section">
      <div class="section-header">
        <i class="mdi mdi-trophy section-icon"></i>
        <h2>Awards & Achievements</h2>
      </div>
      <div class="section-content">
        <div v-for="(award, index) in resume.awards" :key="'award-'+index" class="award-item">
          <div class="award-header">
            <span class="award-name">{{ award.name }}</span>
            <span class="date">{{ formatDate(award.date) }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Activities -->
    <div v-if="resume.activities" class="section">
      <div class="section-header">
        <i class="mdi mdi-account-group section-icon"></i>
        <h2>Activities</h2>
      </div>
      <div class="section-content">
        {{ resume.activities }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.classic-template {
  max-width: 850px;
  margin: 0 auto;
  padding: 3rem;
  font-family: 'Playfair Display', Georgia, serif;
  line-height: 1.6;
  color: #1a1a1a;
  background: #ffffff;
  border: 1px solid #e0e0e0;
}

.header {
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  padding-bottom: 2rem;
}

.header::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 2px;
  background: #c0a080;
}

.name-section h1 {
  font-size: 3rem;
  color: #2d2d2d;
  margin: 0;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.contact-info {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 1.5rem;
  font-family: 'Lato', sans-serif;
  font-size: 0.95rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #666;
}

.contact-item i {
  color: #c0a080;
  font-size: 1.2rem;
}

.section {
  margin-bottom: 3rem;
  position: relative;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  border-bottom: none;
  position: relative;
}

.section-header::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, #c0a080 50%, #e0e0e0 50%);
}

.section-icon {
  font-size: 1.5rem;
  color: #c0a080;
}

.section h2 {
  font-size: 1.6rem;
  color: #2d2d2d;
  margin: 0;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.section-content {
  padding: 1rem 0;
  font-family: 'Lato', sans-serif;
}

.summary {
  text-align: justify;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #404040;
}

.education-item, .experience-item, .award-item {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #fafafa;
  border: none;
  position: relative;
  transition: transform 0.2s ease;
}

.education-item::before, 
.experience-item::before, 
.award-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 3px;
  background: #c0a080;
  transition: height 0.2s ease;
}

.education-item:hover::before, 
.experience-item:hover::before, 
.award-item:hover::before {
  height: 100%;
}

.edu-header h3, 
.exp-header h3 {
  font-size: 1.3rem;
  color: #2d2d2d;
  margin: 0;
  font-weight: 600;
}

.degree {
  color: #404040;
  font-style: italic;
  font-size: 1.1rem;
  margin: 0.5rem 0;
}

.company {
  color: #666;
  font-size: 1.1rem;
  font-weight: 500;
}

.date {
  color: #c0a080;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
}

.description {
  margin-top: 1rem;
  color: #404040;
  line-height: 1.8;
  white-space: pre-line;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}

.skill-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background: #fafafa;
  border: 1px solid #e0e0e0;
  transition: all 0.3s ease;
}

.skill-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  border-color: #c0a080;
}

.skill-name {
  font-weight: 600;
  color: #2d2d2d;
}

.skill-level {
  color: #c0a080;
  font-weight: 500;
  font-size: 0.9rem;
  text-transform: uppercase;
}

.award-name {
  font-weight: 600;
  color: #2d2d2d;
  font-size: 1.1rem;
}

@media print {
  .classic-template {
    padding: 0;
    border: none;
  }
  
  .education-item, 
  .experience-item, 
  .award-item,
  .skill-item {
    break-inside: avoid;
  }
}

@media (max-width: 768px) {
  .classic-template {
    padding: 1.5rem;
  }

  .name-section h1 {
    font-size: 2.2rem;
  }

  .contact-info {
    flex-direction: column;
    gap: 1rem;
  }

  .edu-header, 
  .exp-header, 
  .award-header {
    flex-direction: column;
    gap: 0.5rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
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
  }
}
</script>