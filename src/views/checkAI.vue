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
  import axios from 'axios'; // Import Axios

  export default {
    data() {
      return {
        userInput: "", // User input
        aiFeedback: "", // AI feedback
      };
    },
    methods: {
      async getAIResponse() {
        try {
          const response = await axios.post('https://api.cohere.ai/v1/generate', {
            model: 'your-cohere-model', // Replace with your model name
            prompt: `Analyze the following input and provide suggestions: ${this.userInput}`,
            maxTokens: 100, // Adjust as needed
            temperature: 0.7, // Adjust as needed
          }, {
            headers: {
              'Authorization': `Bearer YOUR_COHERE_API_KEY`, // Replace with your API key
              'Content-Type': 'application/json',
            },
          });

          this.aiFeedback = response.data.generations[0].text; // Update with the AI's response
        } catch (error) {
          console.error('Error fetching AI response:', error);
          this.aiFeedback = 'Error fetching AI feedback. Please try again.';
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
  
  .v-textarea {
    margin-bottom: 20px;
  }
  
  .v-btn {
    margin-top: 20px;
  }
  </style>
  