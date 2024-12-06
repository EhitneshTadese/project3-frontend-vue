<template>
  <v-container>
    <!-- Template Selection Buttons -->
    <v-row justify="center" class="mb-6">
      <v-col cols="auto">
        <v-btn-group>
          <v-btn
            :color="selectedTemplate === 'modern' ? 'primary' : ''"
            @click="selectedTemplate = 'modern'"
            class="mx-2"
          >
            Modern Template
          </v-btn>
          <v-btn
            :color="selectedTemplate === 'classic' ? 'primary' : ''"
            @click="selectedTemplate = 'classic'"
            class="mx-2"
          >
            Classic Template
          </v-btn>
          <v-btn
            :color="selectedTemplate === 'professional' ? 'primary' : ''"
            @click="selectedTemplate = 'professional'"
            class="mx-2"
          >
            Professional Template
          </v-btn>
        </v-btn-group>
      </v-col>
    </v-row>

    <div v-if="resume">
      <!-- Modern Template -->
      <v-card v-if="selectedTemplate === 'modern'" class="mb-4 modern-template">
        <v-card-title class="text-h3 font-weight-bold text-center py-6 primary white--text">
          {{ resume.resumeName || 'Untitled Resume' }}
        </v-card-title>
        
        <v-card-text class="mt-4">
          <div class="text-center mb-6">
            <h2 class="text-h4">{{ resume.name }}</h2>
            <p class="text-subtitle-1">{{ resume.email }} | {{ resume.address }}</p>
            <p v-if="resume.introduction" class="mt-2">{{ resume.introduction }}</p>
          </div>

          <v-divider class="my-4"></v-divider>

          <!-- Modern sections here -->
          <template v-if="resume.skills && resume.skills.length">
            <h3 class="text-h5 mb-3 primary--text">Skills</h3>
            <v-chip-group>
              <v-chip
                v-for="(skill, index) in resume.skills"
                :key="'skill-'+index"
                color="primary"
                outlined
                class="ma-1"
              >
                {{ skill.name }} - {{ skill.proficiency }}
              </v-chip>
            </v-chip-group>
          </template>

          <!-- Add other sections similarly -->
        </v-card-text>
      </v-card>

      <!-- Classic Template -->
      <v-card v-else-if="selectedTemplate === 'classic'" class="mb-4 classic-template">
        <v-card-title class="text-h4 text-center py-4">
          {{ resume.name }}
        </v-card-title>
        
        <v-card-subtitle class="text-center pb-4">
          {{ resume.email }} | {{ resume.address }}
        </v-card-subtitle>

        <v-card-text>
          <div v-if="resume.introduction" class="mb-4">
            <p class="text-body-1">{{ resume.introduction }}</p>
          </div>

          <!-- Classic sections here -->
          <template v-if="resume.experience && resume.experience.length">
            <h3 class="text-h5 mb-3">Professional Experience</h3>
            <v-timeline dense>
              <v-timeline-item
                v-for="(exp, index) in resume.experience"
                :key="'exp-'+index"
                small
              >
                <template v-slot:opposite>
                  <span class="text-caption">{{ exp.startDate }} - {{ exp.endDate || 'Present' }}</span>
                </template>
                <div>
                  <h4 class="text-h6">{{ exp.jobTitle }}</h4>
                  <p class="subtitle-1">{{ exp.companyName }}</p>
                  <p>{{ exp.description }}</p>
                </div>
              </v-timeline-item>
            </v-timeline>
          </template>
        </v-card-text>
      </v-card>

      <!-- Professional Template -->
      <v-card v-else class="mb-4 professional-template">
        <div class="d-flex">
          <!-- Sidebar -->
          <div class="professional-sidebar pa-4" style="width: 30%; background-color: #f5f5f5;">
            <div class="text-center mb-6">
              <h2 class="text-h4">{{ resume.name }}</h2>
              <p class="text-subtitle-1">{{ resume.email }}</p>
              <p class="text-subtitle-1">{{ resume.address }}</p>
            </div>

            <template v-if="resume.skills && resume.skills.length">
              <h3 class="text-h6 mb-2">Skills</h3>
              <v-list dense>
                <v-list-item v-for="(skill, index) in resume.skills" :key="'skill-'+index">
                  <v-list-item-content>
                    <v-list-item-title>{{ skill.name }}</v-list-item-title>
                    <v-list-item-subtitle>{{ skill.proficiency }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </template>
          </div>

          <!-- Main Content -->
          <div class="professional-main pa-4" style="width: 70%;">
            <div v-if="resume.introduction" class="mb-4">
              <h3 class="text-h6 mb-2">Professional Summary</h3>
              <p>{{ resume.introduction }}</p>
            </div>

            <template v-if="resume.experience && resume.experience.length">
              <h3 class="text-h6 mb-2">Experience</h3>
              <div v-for="(exp, index) in resume.experience" :key="'exp-'+index" class="mb-4">
                <h4 class="text-subtitle-1 font-weight-bold">{{ exp.jobTitle }}</h4>
                <p class="subtitle-2">{{ exp.companyName }}</p>
                <p class="caption">{{ exp.startDate }} - {{ exp.endDate || 'Present' }}</p>
                <p>{{ exp.description }}</p>
              </div>
            </template>
          </div>
        </div>
      </v-card>

      <!-- Action Buttons -->
      <v-row justify="center" class="mt-4">
        <v-col cols="auto">
          <v-btn color="primary" @click="goBack">Back</v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn color="secondary" @click="editResume">Edit</v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn 
            color="success" 
            @click="downloadPDF"
            :loading="downloading"
          >
            <v-icon left>mdi-download</v-icon>
            Download PDF
          </v-btn>
        </v-col>
      </v-row>
    </div>

    <!-- Loading or Error State -->
    <div v-else class="text-center">
      <p v-if="loading">Loading...</p>
      <p v-else class="error--text">Resume not found</p>
    </div>
  </v-container>
</template>

<script>
import html2pdf from 'html2pdf.js';

export default {
  name: 'ResumeView',
  data() {
    return {
      resume: null,
      loading: true,
      downloading: false,
      selectedTemplate: 'modern' // Default template
    };
  },
  created() {
    this.loadResume();
  },
  methods: {
    loadResume() {
      const resumeId = parseInt(this.$route.params.id);
      const resumes = JSON.parse(localStorage.getItem('resumes')) || [];
      this.resume = resumes.find(r => r.id === resumeId);
      this.loading = false;
    },
    goBack() {
      this.$router.push({ name: 'all-resumes' });
    },
    editResume() {
      this.$router.push({ 
        name: 'create-resume',
        params: { id: this.resume.id }
      });
    },
    async downloadPDF() {
      try {
        this.downloading = true;
        
        // Get the resume content
        const element = document.querySelector('.v-card');
        
        // PDF options
        const options = {
          margin: 10,
          filename: `${this.resume.resumeName || 'resume'}.pdf`,
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { 
            scale: 2,
            useCORS: true,
            letterRendering: true
          },
          jsPDF: { 
            unit: 'mm', 
            format: 'a4', 
            orientation: 'portrait' 
          }
        };

        // Generate PDF
        await html2pdf().from(element).set(options).save();
        
        // Show success message (optional)
        this.$nextTick(() => {
          // You can add a success notification here if you want
          console.log('PDF downloaded successfully');
        });
      } catch (error) {
        console.error('Error generating PDF:', error);
        // You can add error handling/notification here
      } finally {
        this.downloading = false;
      }
    }
  }
};
</script>

<style scoped>
.modern-template {
  .text-h6 {
    color: #1976D2;
    margin-bottom: 16px;
  }
}

.classic-template {
  .text-h5 {
    border-bottom: 2px solid #1976D2;
    padding-bottom: 8px;
    margin-bottom: 16px;
  }
}

.professional-template {
  .professional-sidebar {
    border-right: 1px solid #e0e0e0;
  }
  
  .text-h6 {
    color: #1976D2;
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 8px;
    margin-bottom: 16px;
  }
}

.v-card-text {
  padding-top: 12px;
  padding-bottom: 12px;
}

/* Add these styles to ensure better PDF rendering */
@media print {
  .v-card {
    break-inside: avoid;
    page-break-inside: avoid;
  }
  
  .v-timeline {
    break-inside: avoid;
    page-break-inside: avoid;
  }
  
  .professional-template {
    display: block !important;
    .d-flex {
      display: block !important;
    }
    .professional-sidebar,
    .professional-main {
      width: 100% !important;
    }
  }
}
</style>

  };
  </script>
  
  <style scoped>
  </style>
