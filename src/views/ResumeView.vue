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
      <ModernTemplate 
        v-if="selectedTemplate === 'modern'" 
        :resume="resume"
        :formatDate="formatDate"
      />

      <!-- Classic Template -->
      <ClassicTemplate
        v-if="selectedTemplate === 'classic'"
        :resume="resume"
        :formatDate="formatDate"
      />

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
import ModernTemplate from '@/components/resumeTemplates/ModernTemplate.vue';
import ClassicTemplate from '@/components/resumeTemplates/ClassicTemplate.vue';

export default {
  name: 'ResumeView',
  components: {
    ModernTemplate,
    ClassicTemplate
  },
  data() {
    return {
      resume: null,
      loading: true,
      downloading: false,
      selectedTemplate: 'modern'
    };
  },
  created() {
    this.loadResume();
  },
  methods: {
    formatDate(date) {
      if (!date) return '';
      return new Date(date).toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric'
      });
    },
    loadResume() {
      try {
        const resumeId = parseInt(this.$route.params.id);
        const resumes = JSON.parse(localStorage.getItem('resumes')) || [];
        const foundResume = resumes.find(r => r.id === resumeId);
        
        if (foundResume) {
          console.log('Found resume:', foundResume); // Debug log
          this.resume = foundResume;
        }
      } catch (error) {
        console.error('Error loading resume:', error);
      } finally {
        this.loading = false;
      }
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
        const element = document.querySelector('.modern-template');
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
        await html2pdf().from(element).set(options).save();
      } catch (error) {
        console.error('Error generating PDF:', error);
      } finally {
        this.downloading = false;
      }
    }
  }
};
</script>

<style scoped>
.v-card-text {
  padding-top: 12px;
  padding-bottom: 12px;
}

@media print {
  .v-btn-group,
  .action-buttons {
    display: none !important;
  }
}
</style>
