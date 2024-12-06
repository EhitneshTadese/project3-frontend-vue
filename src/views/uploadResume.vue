<template>
  <v-container>
    <h1 class="text-center">Upload Your Resume</h1>

    <!-- Upload Section -->
    <v-row justify="center" class="mt-5">
      <v-col cols="12" sm="6" md="4">
        <v-btn large block color="primary" @click="triggerFileInput">
          <v-icon left>mdi-plus</v-icon> Upload Resume
        </v-btn>

        <!-- Hidden File Input -->
        <input
          type="file"
          ref="fileInput"
          accept=".pdf,.doc,.docx,.txt"
          @change="handleFileUpload"
          style="display: none;"
        />
      </v-col>
    </v-row>

    <!-- Display File Name -->
    <v-row justify="center" class="mt-5">
      <v-col cols="12" sm="8" md="6">
        <v-textarea v-model="fileName" label="Selected File" readonly outlined />
      </v-col>
    </v-row>

    <!-- Submit Button -->
    <v-row justify="center" class="mt-3">
      <v-col cols="12" sm="6" md="4">
        <v-btn 
          block 
          color="success" 
          :disabled="!fileName"
          @click="submitResume"
          :loading="isUploading"
        >
          Submit Resume
        </v-btn>
      </v-col>
    </v-row>

    <!-- Snackbar for notifications -->
    <v-snackbar v-model="snackbar" :color="snackbarColor">
      {{ snackbarText }}
    </v-snackbar>
  </v-container>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const fileName = ref("");
    const selectedFile = ref(null);
    const isUploading = ref(false);
    const snackbar = ref(false);
    const snackbarText = ref("");
    const snackbarColor = ref("success");

    const triggerFileInput = () => {
      document.querySelector('input[type="file"]').click();
    };

    const handleFileUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        fileName.value = file.name;
        selectedFile.value = file;
      }
    };

    const submitResume = () => {
      if (!selectedFile.value) return;

      isUploading.value = true;

      // Create a resume object
      const resume = {
        id: Date.now(), // Unique ID for the resume
        fileName: fileName.value,
        uploadDate: new Date().toISOString(),
      };

      // Store the resume in localStorage
      const resumes = JSON.parse(localStorage.getItem('resumes')) || [];
      resumes.push(resume);
      localStorage.setItem('resumes', JSON.stringify(resumes));

      showSnackbar('Resume uploaded successfully!', 'success');
      fileName.value = ""; // Reset the file name
      selectedFile.value = null; // Reset the selected file
      isUploading.value = false;
    };

    const showSnackbar = (text, color) => {
      snackbarText.value = text;
      snackbarColor.value = color;
      snackbar.value = true;
    };

    return {
      fileName,
      selectedFile,
      isUploading,
      snackbar,
      snackbarText,
      snackbarColor,
      triggerFileInput,
      handleFileUpload,
      submitResume,
      showSnackbar,
    };
  }
};
</script>

<style scoped>
h1 {
  margin-top: 50px;
  font-weight: bold;
}

.v-btn {
  display: flex;
  justify-content: center;
  align-items: center;
}

.v-textarea {
  margin-top: 20px;
}
</style>
  