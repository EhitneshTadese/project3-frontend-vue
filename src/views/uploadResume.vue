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
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const fileName = ref("");
    const selectedFile = ref(null);
    const isUploading = ref(false);
    const snackbar = ref(false);
    const snackbarText = ref("");
    const snackbarColor = ref("success");
    const fileInput = ref(null);

    const triggerFileInput = () => {
      document.querySelector('input[type="file"]').click();
    };

    const handleFileUpload = async (event) => {
      const file = event.target.files[0];
      if (file) {
        fileName.value = file.name;
        selectedFile.value = file;

        // Read file content
        try {
          const text = await readFileContent(file);
          // Store the file content
          selectedFile.value = {
            name: file.name,
            content: text,
            type: file.type
          };
        } catch (error) {
          console.error('Error reading file:', error);
          showSnackbar('Error reading file', 'error');
        }
      }
    };

    const readFileContent = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve(e.target.result);
        reader.onerror = (e) => reject(e);
        reader.readAsText(file);
      });
    };

    const submitResume = async () => {
      if (!selectedFile.value) return;

      isUploading.value = true;

      try {
        // Create a resume object with the file content
        const resume = {
          id: Date.now(),
          uploadDate: new Date().toISOString(),
          resumeName: fileName.value,
          content: selectedFile.value.content,
          fileType: selectedFile.value.type,
          // Add basic parsed data structure
          name: "",
          email: "",
          address: "",
          education: {
            degree: "",
            institution: "",
            graduationDate: ""
          },
          experience: {
            jobTitle: "",
            companyName: "",
            startDate: "",
            endDate: "",
            description: ""
          },
          skills: [],
          projects: [],
          awards: []
        };

        // Store the resume in localStorage
        const resumes = JSON.parse(localStorage.getItem('resumes')) || [];
        resumes.push(resume);
        localStorage.setItem('resumes', JSON.stringify(resumes));

        showSnackbar('Resume uploaded successfully!', 'success');
        
        // Navigate to the resume view
        router.push({ 
          name: 'resume-view', 
          params: { id: resume.id }
        });
      } catch (error) {
        console.error('Error uploading resume:', error);
        showSnackbar('Error uploading resume', 'error');
      } finally {
        isUploading.value = false;
      }
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
      fileInput,
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
  