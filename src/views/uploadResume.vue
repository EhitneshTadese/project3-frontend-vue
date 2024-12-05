<template>
    <v-container>
      <h1 class="text-center">Upload Your Resume</h1>
  
      <!-- Upload Section -->
      <v-row justify="center" class="mt-5">
        <v-col cols="12" sm="6" md="4">
          <v-btn
            large
            block
            color="primary"
            @click="triggerFileInput"
          >
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
          <v-textarea
            v-model="fileName"
            label="Selected File"
            readonly
            outlined
          />
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        fileName: "", // File name of the uploaded resume
      };
    },
    methods: {
      // Trigger the file input click action
      triggerFileInput() {
        this.$refs.fileInput.click();
      },
      // Handle file selection
      handleFileUpload(event) {
        const file = event.target.files[0];
        if (file) {
          this.fileName = file.name; // Show the file name in the textarea
        }
      },
    },
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
  