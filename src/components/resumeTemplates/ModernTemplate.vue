<template>
  <div class="modern-template">
    <div class="header" :style="{ backgroundColor: '#2c3e50', color: 'white', padding: '2rem' }">
      <h1 class="text-h3 mb-2">{{ resume.name }}</h1>
      <div class="contact-info">
        <p>{{ resume.email }} | {{ resume.address }}</p>
      </div>
      <p class="mt-4">{{ resume.introduction }}</p>
    </div>

    <div class="content" style="padding: 2rem;">
      <div class="section">
        <h2 class="text-h5 primary--text mb-4">Experience</h2>
        <div v-if="resume.experience" class="mb-4">
          <h3 class="text-h6">{{ resume.experience.jobTitle }}</h3>
          <p class="subtitle-1">{{ resume.experience.companyName }}</p>
          <p class="caption">{{ formatDate(resume.experience.startDate) }} - {{ formatDate(resume.experience.endDate) }}</p>
          <p>{{ resume.experience.description }}</p>
        </div>
      </div>

      <v-divider class="my-4"></v-divider>

      <div class="section">
        <h2 class="text-h5 primary--text mb-4">Education</h2>
        <div v-if="resume.education">
          <h3 class="text-h6">{{ resume.education.degree }}</h3>
          <p class="subtitle-1">{{ resume.education.institution }}</p>
          <p class="caption">Graduated: {{ formatDate(resume.education.graduationDate) }}</p>
        </div>
      </div>

      <v-divider class="my-4"></v-divider>

      <div class="section">
        <h2 class="text-h5 primary--text mb-4">Skills</h2>
        <v-chip-group>
          <v-chip v-for="skill in resume.skills" :key="skill.name" outlined>
            {{ skill.name }} - {{ skill.proficiency }}
          </v-chip>
        </v-chip-group>
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