<template>
  <v-container>
    <h1 class="text-center mb-6">Your Resumes</h1>

    <!-- Resume List -->
    <v-row>
      <v-col v-for="resume in resumes" :key="resume.id" cols="12" md="6" lg="4">
        <v-card class="mx-auto" max-width="400">
          <v-card-title>
            {{ resume.resumeName || 'Untitled Resume' }}
          </v-card-title>

          <v-card-subtitle>
            Created: {{ formatDate(resume.uploadDate) }}
          </v-card-subtitle>

          <v-card-text v-if="resume.name">
            <p>{{ resume.name }}</p>
          </v-card-text>

          <v-card-actions>
            <v-btn color="primary" text @click="viewResume(resume)">
              View
            </v-btn>
            <v-btn color="error" text @click="deleteResume(resume.id)">
              Delete
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- No Resumes Message -->
    <v-row v-if="resumes.length === 0" justify="center" align="center" class="mt-8">
      <v-col cols="12" class="text-center">
        <p class="text-h6 grey--text">No resumes yet</p>
        <div class="d-flex justify-center gap-4 mt-4">
          <v-btn color="primary" @click="goToUpload">
            Upload Your First Resume
          </v-btn>
          <v-btn color="secondary" @click="goToCreate">
            Create Your Resume
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const resumes = ref([]);

    const formatDate = (date) => {
      if (!date) return 'N/A';
      try {
        return new Date(date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        });
      } catch (error) {
        console.error('Date formatting error:', error);
        return 'Invalid Date';
      }
    };

    const viewResume = (resume) => {
      router.push({ name: 'resume-view', params: { id: resume.id } });
    };

    const deleteResume = (id) => {
      resumes.value = resumes.value.filter(resume => resume.id !== id);
      localStorage.setItem('resumes', JSON.stringify(resumes.value));
    };

    const goToUpload = () => {
      router.push({ name: 'upload-resume' });
    };

    const goToCreate = () => {
      router.push({ name: 'create-resume' });
    };

    onMounted(() => {
      const storedResumes = JSON.parse(localStorage.getItem('resumes')) || [];
      console.log('Raw stored resumes:', storedResumes);
      resumes.value = storedResumes;
    });

    return {
      resumes,
      formatDate,
      viewResume,
      deleteResume,
      goToUpload,
      goToCreate,
    };
  }
};
</script>

<style scoped>
.gap-4 {
  gap: 1rem;
}
</style>
  