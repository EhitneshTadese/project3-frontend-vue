<template>
  <v-container>
    <h1 class="text-center mb-6">Resume Details</h1>

    <v-card v-if="resume" class="mx-auto">
      <!-- Template Selection -->
      <v-card-actions class="justify-center mb-4">
        <v-btn-toggle v-model="selectedTemplate" mandatory>
          <v-btn value="modern">Modern Template</v-btn>
          <v-btn value="classic">Classic Template</v-btn>
          <v-btn value="minimal">Minimal Template</v-btn>
        </v-btn-toggle>
      </v-card-actions>

      <div id="resume-content" class="pa-6">
        <!-- Dynamic Template Component -->
        <component
          :is="currentTemplate"
          :resume="resume"
          :formatDate="formatDate"
        ></component>
      </div>

      <v-card-actions>
        <v-btn color="primary" @click="goBack">Back to Resumes</v-btn>
        <v-btn color="warning" @click="editResume">Edit Resume</v-btn>
        <v-btn color="success" @click="downloadPDF">Download PDF</v-btn>
      </v-card-actions>
    </v-card>

    <v-alert v-else type="error" class="mt-4">
      Resume not found. Please check if the resume exists.
    </v-alert>

    <!-- Feedback Section -->
    <v-card v-if="resume.feedback" class="mt-4">
      <v-card-title>Admin Feedback</v-card-title>
      <v-card-text>
        <p>{{ resume.feedback }}</p>
        <small class="text-caption">
          Feedback provided on: {{ formatDate(resume.feedbackDate) }}
        </small>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import html2pdf from 'html2pdf.js/dist/html2pdf.bundle.min';
import ModernTemplate from '../components/resumeTemplates/ModernTemplate.vue';
import ClassicTemplate from '../components/resumeTemplates/ClassicTemplate.vue';
import MinimalTemplate from '../components/resumeTemplates/MinimalTemplate.vue';

export default {
  components: {
    ModernTemplate,
    ClassicTemplate,
    MinimalTemplate
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const resume = ref(null);
    const selectedTemplate = ref('modern');

    const currentTemplate = computed(() => {
      switch (selectedTemplate.value) {
        case 'modern':
          return 'ModernTemplate';
        case 'classic':
          return 'ClassicTemplate';
        case 'minimal':
          return 'MinimalTemplate';
        default:
          return 'ModernTemplate';
      }
    });

    const formatDate = (date) => {
      return new Date(date).toLocaleDateString();
    };

    const goBack = () => {
      router.push({ name: 'all-resumes' }); 
    };

    const editResume = () => {
      router.push({ name: 'createresume', params: { id: resume.value.id } }); 
    };

    const downloadPDF = () => {
      const element = document.getElementById('resume-content');
      const opt = {
        margin: 1,
        filename: `${resume.value.resumeName || 'resume'}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      };
      
      window.html2pdf().set(opt).from(element).save();
    };

    // Load the resume from localStorage when the component is mounted
    onMounted(() => {
      const storedResumes = JSON.parse(localStorage.getItem('resumes')) || [];
      const foundResume = storedResumes.find(r => r.id === Number(route.params.id));
      resume.value = foundResume || null;
    });

    return {
      resume,
      selectedTemplate,
      currentTemplate,
      formatDate,
      goBack,
      editResume,
      downloadPDF,
    };
  }
};
</script>

<style scoped>
#resume-content {
  padding: 20px;
}
</style>
