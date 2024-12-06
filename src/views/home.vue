<template>
  <v-container>
    <!-- Title -->
    <h1 class="text-center">Resume Management</h1>
    <h4 class="text-center">{{ message }}</h4>

    <!-- Buttons Section -->
    <v-row class="mt-5" justify="center">
      <v-col cols="12" sm="6" md="3">
        <v-btn large block @click="goCreateResume" color="primary">Create Resume</v-btn>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-btn large block @click="goAllResumes" color="primary">All Your Resumes</v-btn>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-btn large block @click="goCheckAI" color="primary">Check with AI</v-btn>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-btn large block @click="goUploadResume" color="primary">Upload Your Resume</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      message: "Choose an option to get started",
    };
  },
  methods: {
    goCreateResume() {
      this.$router.push({ name: "create-resume" }); // Navigate to Create Resume page
    },
    goAllResumes() {
      this.$router.push({ name: "all-resumes" }); // Navigate to All Resumes page
    },
    goCheckAI() {
      this.$router.push({ name: "check-ai" }); // Navigate to Check AI page
    },
    goUploadResume() {
      this.$router.push({ name: "upload-resume" }); // Navigate to Upload Resume page
    },
  },
};
</script>

<style scoped>
/* You can adjust the spacing and styles here */
h1 {
  margin-top: 50px;
  font-weight: bold;
}

h4 {
  margin-bottom: 30px;
}

.v-btn {
  margin: 10px 0;
}
</style>
