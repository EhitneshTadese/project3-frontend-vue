<template>
    <div class="modern-template">
      <!-- Header -->
      <div class="header">
        <div class="header-content">
          <h1 class="name">{{ resume.name }}</h1>
          <div class="contact-grid">
            <div class="contact-item">
              <i class="mdi mdi-map-marker"></i>
              <span>{{ resume.address }}</span>
            </div>
            <div class="contact-item">
              <i class="mdi mdi-phone"></i>
              <span>{{ resume.phone }}</span>
            </div>
            <div class="contact-item">
              <i class="mdi mdi-email"></i>
              <span>{{ resume.email }}</span>
            </div>
            <div v-if="resume.linkedin" class="contact-item">
              <i class="mdi mdi-linkedin"></i>
              <span>{{ resume.linkedin }}</span>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Professional Summary -->
      <div v-if="resume.professionalSummary" class="section">
        <div class="section-header">
          <h2>Professional Summary</h2>
          <div class="section-line"></div>
        </div>
        <div class="summary-content">
          {{ resume.professionalSummary }}
        </div>
      </div>
  
      <!-- Education -->
      <div class="section">
        <div class="section-header">
          <h2>Education</h2>
          <div class="section-line"></div>
        </div>
        <div class="education-grid">
          <div v-for="(edu, index) in resume.education" :key="'edu-'+index" class="education-item">
            <div class="education-header">
              <h3>{{ edu.institution }}</h3>
              <span class="date">{{ formatDate(edu.graduationDate) }}</span>
            </div>
            <p class="degree">{{ edu.degree }}</p>
            <p v-if="edu.gpa" class="gpa">GPA: {{ edu.gpa }}</p>
          </div>
        </div>
      </div>
  
      <!-- Experience -->
      <div class="section">
        <div class="section-header">
          <h2>Experience</h2>
          <div class="section-line"></div>
        </div>
        <div class="experience-timeline">
          <div v-for="(exp, index) in resume.experience" :key="'exp-'+index" class="experience-item">
            <div class="experience-header">
              <h3>{{ exp.jobTitle }}</h3>
              <span class="company">{{ exp.companyName }}</span>
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
          <h2>Skills</h2>
          <div class="section-line"></div>
        </div>
        <div class="skills-container">
          <div v-for="(skill, index) in resume.skills" :key="'skill-'+index" class="skill-tag">
            {{ skill.name }}
            <span class="proficiency">{{ skill.proficiency }}</span>
          </div>
        </div>
      </div>
  
      <!-- Awards -->
      <div v-if="resume.awards && resume.awards.length" class="section">
        <div class="section-header">
          <h2>Awards & Achievements</h2>
          <div class="section-line"></div>
        </div>
        <div class="awards-grid">
          <div v-for="(award, index) in resume.awards" :key="'award-'+index" class="award-item">
            <h3>{{ award.name }}</h3>
            <span class="date">{{ formatDate(award.date) }}</span>
          </div>
        </div>
      </div>
  
      <!-- Activities -->
      <div v-if="resume.activities" class="section">
        <div class="section-header">
          <h2>Activities</h2>
          <div class="section-line"></div>
        </div>
        <div class="activities-content">
          {{ resume.activities }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
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
  
  <style scoped>
  .modern-template {
    max-width: 850px;
    margin: 0 auto;
    padding: 2rem;
    font-family: 'Roboto', sans-serif;
    color: #333;
    background: #fff;
    line-height: 1.6;
  }
  
  .header {
    background: linear-gradient(135deg, #1a237e 0%, #283593 100%);
    color: white;
    padding: 2.5rem 2rem;
    border-radius: 8px;
    margin-bottom: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .name {
    font-size: 2.5rem;
    font-weight: 300;
    margin-bottom: 1.5rem;
    letter-spacing: 1px;
  }
  
  .contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
  }
  
  .contact-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;
  }
  
  .section {
    margin-bottom: 2.5rem;
  }
  
  .section-header {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
  }
  
  .section-header h2 {
    font-size: 1.5rem;
    font-weight: 500;
    color: #1a237e;
    margin-right: 1rem;
    white-space: nowrap;
  }
  
  .section-line {
    flex-grow: 1;
    height: 2px;
    background: linear-gradient(90deg, #1a237e 0%, #e8eaf6 100%);
  }
  
  .education-item, .experience-item {
    margin-bottom: 1.5rem;
    padding: 1rem;
    background: #f8f9fa;
    border-radius: 6px;
    border-left: 4px solid #1a237e;
  }
  
  .education-header, .experience-header {
    margin-bottom: 0.5rem;
  }
  
  .education-header h3, .experience-header h3 {
    font-size: 1.2rem;
    color: #1a237e;
    margin-bottom: 0.25rem;
  }
  
  .company {
    display: block;
    color: #666;
    font-size: 0.9rem;
    margin-bottom: 0.25rem;
  }
  
  .date {
    color: #666;
    font-size: 0.85rem;
  }
  
  .experience-bullets {
    list-style-type: none;
    padding-left: 0;
  }
  
  .experience-bullets li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 0.5rem;
  }
  
  .experience-bullets li::before {
    content: "•";
    color: #1a237e;
    position: absolute;
    left: 0.5rem;
  }
  
  .skills-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }
  
  .skill-tag {
    background: #e8eaf6;
    color: #1a237e;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .proficiency {
    background: #1a237e;
    color: white;
    padding: 0.2rem 0.5rem;
    border-radius: 10px;
    font-size: 0.8rem;
  }
  
  .award-item {
    background: #f8f9fa;
    padding: 1rem;
    border-radius: 6px;
    margin-bottom: 1rem;
  }
  
  .activities-content {
    padding: 1rem;
    background: #f8f9fa;
    border-radius: 6px;
    line-height: 1.8;
  }
  
  @media print {
    .modern-template {
      padding: 0;
    }
    
    .header {
      background: #1a237e !important;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  }
  
  @media (max-width: 600px) {
    .contact-grid {
      grid-template-columns: 1fr;
    }
    
    .header {
      padding: 1.5rem 1rem;
    }
    
    .name {
      font-size: 2rem;
    }
  }
  </style> 