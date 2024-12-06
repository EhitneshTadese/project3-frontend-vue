<template>
  <v-container>
    <h1 class="text-center mb-6">Your Resumes</h1>

    <!-- Resume List -->
    <v-row>
      <v-col v-for="resume in resumes" :key="resume.id" cols="12" md="6" lg="4">
        <v-card class="mx-auto" max-width="400">
          <v-card-title>
            {{ resume.resumeName }}
          </v-card-title>

          <v-card-subtitle>
            Uploaded: {{ formatDate(resume.uploadDate) }}
          </v-card-subtitle>

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
        <p class="text-h6 grey--text">No resumes uploaded yet</p>
        <v-btn color="primary" class="mt-4" @click="goToUpload">
          Upload Your First Resume
        </v-btn>
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
      return new Date(date).toLocaleDateString();
    };

    const viewResume = (resume) => {
      router.push({ name: 'resume-view', params: { id: resume.id } });
    };

    const deleteResume = (id) => {
      resumes.value = resumes.value.filter(resume => resume.id !== id);
      localStorage.setItem('resumes', JSON.stringify(resumes.value));
    };

    const goToUpload = () => {
      // Logic to navigate to upload page
    };

    // Load resumes from localStorage when the component is mounted
    onMounted(() => {
      const storedResumes = JSON.parse(localStorage.getItem('resumes')) || [];
      resumes.value = storedResumes;
    });

    return {
      resumes,
      formatDate,
      viewResume,
      deleteResume,
      goToUpload,
    };
  }
};
</script>

<style scoped>
</style>
  