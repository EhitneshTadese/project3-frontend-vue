<template>
    <v-container>
      <h1 class="text-center">Check with AI</h1>
  
      <!-- Input Section -->
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6">
          <v-textarea
            v-model="userInput"
            label="Enter your data"
            rows="4"
            outlined
          />
        </v-col>
      </v-row>
  
      <!-- AI Feedback Section -->
      <v-row justify="center" class="mt-5">
        <v-col cols="12" sm="8" md="6">
          <v-textarea
            v-model="aiFeedback"
            label="AI Feedback"
            rows="4"
            outlined
            readonly
          />
        </v-col>
      </v-row>
  
      <!-- Check Button -->
      <v-row justify="center" class="mt-5">
        <v-col cols="12" sm="6" md="3">
          <v-btn
            large
            block
            color="primary"
            @click="getAIResponse"
          >
            Get AI Feedback
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        userInput: "", // User input
        aiFeedback: "", // AI feedback
      };
    },
    methods: {
      // Simulating AI response for now
      getAIResponse() {
        // Here, you can integrate with an actual AI API or service.
        // For now, we're just simulating a response.
        this.aiFeedback = `AI processed your input: ${this.userInput}`;
      },
    },
  };
  </script>
  
  <style scoped>
  h1 {
    margin-top: 50px;
    font-weight: bold;
  }
  
  .v-textarea {
    margin-bottom: 20px;
  }
  
  .v-btn {
    margin-top: 20px;
  }
  </style>
  