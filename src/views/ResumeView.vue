<template>
    <v-container>
      <h1 class="text-center mb-6">Resume Details</h1>
  
      <v-card v-if="resume">
        <v-card-title>
          {{ resume.resumeName }}
        </v-card-title>
        <v-card-subtitle>
          <p><strong>Name:</strong> {{ resume.name }}</p>
          <p><strong>Email:</strong> {{ resume.email }}</p>
          <p><strong>Address:</strong> {{ resume.address }}</p>
          <p><strong>Introduction:</strong> {{ resume.introduction }}</p>
        </v-card-subtitle>
  
        <v-card-text>
          <h3>Education</h3>
          <p><strong>Degree:</strong> {{ resume.education.degree }}</p>
          <p><strong>Institution:</strong> {{ resume.education.institution }}</p>
          <p><strong>Graduation Date:</strong> {{ formatDate(resume.education.graduationDate) }}</p>
  
          <h3>Experience</h3>
          <p><strong>Job Title:</strong> {{ resume.experience.jobTitle }}</p>
          <p><strong>Company Name:</strong> {{ resume.experience.companyName }}</p>
          <p><strong>Start Date:</strong> {{ formatDate(resume.experience.startDate) }}</p>
          <p><strong>End Date:</strong> {{ formatDate(resume.experience.endDate) }}</p>
          <p><strong>Description:</strong> {{ resume.experience.description }}</p>
  
          <h3>Projects</h3>
          <p v-for="(project, index) in resume.projects" :key="index">
            <strong>Project Name:</strong> {{ project.name }}<br>
            <strong>Description:</strong> {{ project.description }}<br>
            <strong>Project Link:</strong> <a :href="project.link" target="_blank">{{ project.link }}</a>
          </p>
  
          <h3>Skills</h3>
          <p v-for="(skill, index) in resume.skills" :key="index">
            <strong>Skill Name:</strong> {{ skill.name }}<br>
            <strong>Proficiency Level:</strong> {{ skill.proficiency }}<br>
          </p>
  
          <h3>Awards</h3>
          <p v-for="(award, index) in resume.awards" :key="index">
            <strong>Award Name:</strong> {{ award.name }}<br>
            <strong>Date Earned:</strong> {{ formatDate(award.date) }}<br>
          </p>
        </v-card-text>
  
        <v-card-actions>
          <v-btn color="primary" @click="goBack">Back to Resumes</v-btn>
          <v-btn color="warning" @click="editResume">Edit Resume</v-btn>
        </v-card-actions>
      </v-card>
  
      <v-alert v-else type="error" dismissible>
        Resume not found.
      </v-alert>
    </v-container>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  
  export default {
    setup() {
      const route = useRoute();
      const router = useRouter();
      const resume = ref(null);
  
      const formatDate = (date) => {
        return new Date(date).toLocaleDateString();
      };
  
      const goBack = () => {
        router.push({ name: 'all-resumes' }); 
      };
  
      const editResume = () => {
        router.push({ name: 'createresume', params: { id: resume.value.id } }); 
      };
  
      // Load the resume from localStorage when the component is mounted
      onMounted(() => {
        const storedResumes = JSON.parse(localStorage.getItem('resumes')) || [];
        const foundResume = storedResumes.find(r => r.id === Number(route.params.id));
        resume.value = foundResume || null;
      });
  
      return {
        resume,
        formatDate,
        goBack,
        editResume,
      };
    }
  };
  </script>
  
  <style scoped>
  </style>
