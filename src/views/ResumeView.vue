<template>
  <div>
    <!-- Template selection buttons -->
    <div class="template-buttons">
      <v-btn
        @click="selectedTemplate = 'modern'"
        :class="{ active: selectedTemplate === 'modern' }"
      >
        MODERN TEMPLATE
      </v-btn>
      <v-btn
        @click="selectedTemplate = 'classic'"
        :class="{ active: selectedTemplate === 'classic' }"
      >
        CLASSIC TEMPLATE
      </v-btn>
      <v-btn
        @click="selectedTemplate = 'professional'"
        :class="{ active: selectedTemplate === 'professional' }"
      >
        PROFESSIONAL TEMPLATE
      </v-btn>
    </div>

    <!-- Action Buttons -->
    <div class="action-buttons">
      <v-btn color="primary" @click="goBack">BACK</v-btn>
      <v-btn color="success" @click="editResume">EDIT</v-btn>
      <v-btn 
        color="info" 
        @click="downloadPDF" 
        :loading="downloading"
      >
        DOWNLOAD PDF
      </v-btn>
    </div>

    <!-- Resume Templates -->
    <div v-if="resume" class="resume-container">
      <ModernTemplate 
        v-if="selectedTemplate === 'modern'" 
        :resume="resume"
        :formatDate="formatDate"
      />
      <ClassicTemplate 
        v-if="selectedTemplate === 'classic'" 
        :resume="resume"
        :formatDate="formatDate"
      />
      <ProfessionalTemplate 
        v-if="selectedTemplate === 'professional'" 
        :resume="resume"
        :formatDate="formatDate"
      />
    </div>
    <div v-else class="no-resume">
      <p>Loading resume...</p>
    </div>
  </div>
</template>

<script>
import ModernTemplate from '@/components/resumeTemplates/ModernTemplate.vue'
import ClassicTemplate from '@/components/resumeTemplates/ClassicTemplate.vue'
import ProfessionalTemplate from '@/components/resumeTemplates/ProfessionalTemplate.vue'
import html2pdf from 'html2pdf.js'

export default {
  name: 'ResumeView',
  components: {
    ModernTemplate,
    ClassicTemplate,
    ProfessionalTemplate
  },
  data() {
    return {
      resume: null,
      selectedTemplate: 'professional',
      downloading: false
    }
  },
  created() {
    this.loadResume()
  },
  methods: {
    loadResume() {
      try {
        const resumeId = parseInt(this.$route.params.id)
        console.log('Loading resume with ID:', resumeId)
        
        const resumes = JSON.parse(localStorage.getItem('resumes')) || []
        console.log('All stored resumes:', resumes)
        
        const foundResume = resumes.find(r => r.id === resumeId)
        console.log('Found resume:', foundResume)
        
        if (foundResume) {
          this.resume = foundResume
        } else {
          console.error('Resume not found with ID:', resumeId)
        }
      } catch (error) {
        console.error('Error loading resume:', error)
      }
    },
    formatDate(date) {
      if (!date) return ''
      return new Date(date).toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric'
      })
    },
    goBack() {
      this.$router.push({ name: 'all-resumes' })
    },
    editResume() {
      this.$router.push({
        name: 'create-resume',
        params: { id: this.resume.id }
      })
    },
    async downloadPDF() {
      try {
        this.downloading = true
        const element = document.querySelector(`.${this.selectedTemplate}-template`)
        const options = {
          margin: 10,
          filename: `${this.resume.resumeName || 'resume'}.pdf`,
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        }
        await html2pdf().from(element).set(options).save()
      } catch (error) {
        console.error('Error generating PDF:', error)
      } finally {
        this.downloading = false
      }
    }
  }
}
</script>

<style scoped>
.template-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.action-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
}

.resume-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  background: white;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

.no-resume {
  text-align: center;
  padding: 2rem;
  color: #666;
}

.active {
  background-color: #1976D2 !important;
  color: white !important;
}

@media print {
  .template-buttons,
  .action-buttons {
    display: none !important;
  }
  
  .resume-container {
    box-shadow: none;
    padding: 0;
  }
}
</style>