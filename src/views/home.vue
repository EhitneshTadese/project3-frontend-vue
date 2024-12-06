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
        <v-btn large block @click="goAllResumes" color="primary">My Resumes</v-btn>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-btn large block @click="goCheckAI" color="primary">Check with AI</v-btn>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-btn large block @click="goUploadResume" color="primary">Upload Resume</v-btn>
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
  mounted() {
    const urlParams = new URLSearchParams(window.location.search);
    const firstName = urlParams.get('firstName');
    const lastName = urlParams.get('lastName');
    const email = urlParams.get('email');

    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);

    if (firstName && lastName && email) {
      const userData = {
        firstName: firstName,
        lastName: lastName,
        email: email
      };
      localStorage.setItem('user', JSON.stringify(userData)); // Store user data in localStorage
      console.log("User data stored in localStorage:", userData);
    } else {
      console.error("User data not found in query parameters.");
    }
  },
  methods: {
    goCreateResume() {
      this.$router.push({ name: "create-resume" });
    },
    goAllResumes() {
      this.$router.push({ name: "all-resumes" });
    },
    goCheckAI() {
      this.$router.push({ name: "check-ai" });
    },
    goUploadResume() {
      this.$router.push({ name: "upload-resume" });
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