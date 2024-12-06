<template>
  <div class="minimal-template" style="font-family: 'Arial', sans-serif;">
    <div class="name-header" style="border-bottom: 2px solid #eee;">
      <h1 class="text-h4 font-weight-light">{{ resume.name }}</h1>
      <p class="text-subtitle-2 grey--text">
        {{ resume.email }} • {{ resume.address }}
      </p>
    </div>

    <div class="content" style="line-height: 1.6;">
      <div v-if="resume.introduction" class="mt-4">
        <p class="text-body-1">{{ resume.introduction }}</p>
      </div>

      <div class="mt-6">
        <h2 class="text-h6 font-weight-light">EXPERIENCE</h2>
        <v-divider class="mb-2"></v-divider>
        <div v-if="resume.experience">
          <p class="font-weight-medium mb-0">{{ resume.experience.jobTitle }}</p>
          <p class="text-caption grey--text text--darken-1 mb-0">
            {{ resume.experience.companyName }} | {{ formatDate(resume.experience.startDate) }} - {{ formatDate(resume.experience.endDate) }}
          </p>
          <p class="text-body-2 mt-1">{{ resume.experience.description }}</p>
        </div>
      </div>

      <div class="mt-6">
        <h2 class="text-h6 font-weight-light">EDUCATION</h2>
        <v-divider class="mb-2"></v-divider>
        <div v-if="resume.education">
          <p class="font-weight-medium mb-0">{{ resume.education.degree }}</p>
          <p class="text-caption grey--text text--darken-1">
            {{ resume.education.institution }} | {{ formatDate(resume.education.graduationDate) }}
          </p>
        </div>
      </div>

      <div class="mt-6">
        <h2 class="text-h6 font-weight-light">SKILLS</h2>
        <v-divider class="mb-2"></v-divider>
        <v-row dense>
          <v-col v-for="skill in resume.skills" :key="skill.name" cols="auto">
            <span class="text-caption mr-4">{{ skill.name }} ({{ skill.proficiency }})</span>
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