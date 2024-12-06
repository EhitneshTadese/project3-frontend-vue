<template>
  <div class="classic-template">
    <div class="text-center mb-6">
      <h1 class="text-h3">{{ resume.name }}</h1>
      <p class="text-subtitle-1">{{ resume.email }} | {{ resume.address }}</p>
      <v-divider class="my-4"></v-divider>
    </div>

    <div class="content px-4">
      <div v-if="resume.introduction" class="mb-6">
        <h2 class="text-h5 text-decoration-underline mb-2">Professional Summary</h2>
        <p>{{ resume.introduction }}</p>
      </div>

      <div class="mb-6">
        <h2 class="text-h5 text-decoration-underline mb-2">Experience</h2>
        <div v-if="resume.experience">
          <div class="d-flex justify-space-between">
            <h3 class="text-h6">{{ resume.experience.companyName }}</h3>
            <span>{{ formatDate(resume.experience.startDate) }} - {{ formatDate(resume.experience.endDate) }}</span>
          </div>
          <p class="font-weight-bold">{{ resume.experience.jobTitle }}</p>
          <p>{{ resume.experience.description }}</p>
        </div>
      </div>

      <div class="mb-6">
        <h2 class="text-h5 text-decoration-underline mb-2">Education</h2>
        <div v-if="resume.education">
          <div class="d-flex justify-space-between">
            <h3 class="text-h6">{{ resume.education.institution }}</h3>
            <span>{{ formatDate(resume.education.graduationDate) }}</span>
          </div>
          <p>{{ resume.education.degree }}</p>
        </div>
      </div>

      <div class="mb-6">
        <h2 class="text-h5 text-decoration-underline mb-2">Skills</h2>
        <v-row>
          <v-col v-for="skill in resume.skills" :key="skill.name" cols="6" md="4">
            <p>{{ skill.name }} ({{ skill.proficiency }})</p>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    resume: {
      type: Object,
      required: true
    },
    formatDate: {
      type: Function,
      required: true
    }
  }
}
</script> 