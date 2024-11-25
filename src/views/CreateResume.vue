<template>
  <h1>Create Resume</h1>
  <h4>{{ message }}</h4>
  <v-container>
    <v-card>
      <v-card-text>
        <v-form>
          <!-- Create Resume Section -->
          <h3
            class="text-center section-title"
            @click="toggleSection('createResume')"
            @mouseover="hoverSection = 'createResume'"
            @mouseleave="hoverSection = null"
            :class="{ 'expanded-section': hoverSection === 'createResume' }"
          >
           Personal Information
          </h3>
          <v-row v-if="showSection === 'createResume'">
            <v-col cols="12" md="4">
              <v-text-field label="Name" v-model="tutorial.name" />
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field label="Email" v-model="tutorial.email" />
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field label="Address" v-model="tutorial.address" />
            </v-col>
          </v-row>

          <!-- Education Section -->
          <v-divider class="my-4"></v-divider>
          <h3
            class="text-center section-title"
            @click="toggleSection('education')"
            @mouseover="hoverSection = 'education'"
            @mouseleave="hoverSection = null"
            :class="{ 'expanded-section': hoverSection === 'education' }"
          >
            Education
          </h3>
          <v-row v-if="showSection === 'education'">
            <v-col cols="4">
              <v-text-field label="Degree" v-model="tutorial.degree" />
            </v-col>
            <v-col cols="4">
              <v-text-field label="Institution" v-model="tutorial.institution" />
            </v-col>
            <v-col cols="4">
              <v-text-field label="Graduation Date" v-model="tutorial.graduationDate" type="date" />
            </v-col>
          </v-row>

          <!-- Experience Section -->
          <v-divider class="my-4"></v-divider>
          <h3
            class="text-center section-title"
            @click="toggleSection('experience')"
            @mouseover="hoverSection = 'experience'"
            @mouseleave="hoverSection = null"
            :class="{ 'expanded-section': hoverSection === 'experience' }"
          >
            Experience
          </h3>
          <v-row v-if="showSection === 'experience'">
            <v-col cols="4">
              <v-text-field label="Job Title" v-model="tutorial.jobTitle" />
            </v-col>
            <v-col cols="4">
              <v-text-field label="Company Name" v-model="tutorial.companyName" />
            </v-col>
            <v-col cols="4">
              <v-text-field label="Start Date" v-model="tutorial.startDate" type="date" />
            </v-col>
            <v-col cols="4">
              <v-text-field label="End Date" v-model="tutorial.endDate" type="date" />
            </v-col>
            <v-col cols="4">
              <v-text-field label="Job Description" v-model="tutorial.jobDescription" />
            </v-col>
          </v-row>

          <!-- Projects Section -->
          <v-divider class="my-4"></v-divider>
          <h3
            class="text-center section-title"
            @click="toggleSection('projects')"
            @mouseover="hoverSection = 'projects'"
            @mouseleave="hoverSection = null"
            :class="{ 'expanded-section': hoverSection === 'projects' }"
          >
            Projects
          </h3>
          <v-row v-if="showSection === 'projects'">
            <v-col cols="4">
              <v-text-field label="Project Name" v-model="tutorial.projectName" />
            </v-col>
            <v-col cols="4">
              <v-text-field label="Description" v-model="tutorial.projectDescription" />
            </v-col>
            <v-col cols="4">
              <v-text-field label="Project Link" v-model="tutorial.projectLink" />
            </v-col>
          </v-row>

          <!-- Skills Section -->
          <v-divider class="my-4"></v-divider>
          <h3
            class="text-center section-title"
            @click="toggleSection('skills')"
            @mouseover="hoverSection = 'skills'"
            @mouseleave="hoverSection = null"
            :class="{ 'expanded-section': hoverSection === 'skills' }"
          >
            Skills
          </h3>
          <v-row v-if="showSection === 'skills'">
            <v-col cols="4">
              <v-text-field label="Skill Name" v-model="tutorial.skillName" />
            </v-col>
            <v-col cols="4">
              <v-text-field label="Proficiency Level" v-model="tutorial.proficiencyLevel" />
            </v-col>
          </v-row>

          <!-- Awards Section -->
          <v-divider class="my-4"></v-divider>
          <h3
            class="text-center section-title"
            @click="toggleSection('awards')"
            @mouseover="hoverSection = 'awards'"
            @mouseleave="hoverSection = null"
            :class="{ 'expanded-section': hoverSection === 'awards' }"
          >
            Awards
          </h3>
          <v-row v-if="showSection === 'awards'">
            <v-col cols="4">
              <v-text-field label="Award Name" v-model="tutorial.awardName" />
            </v-col>
            <v-col cols="4">
              <v-text-field label="Date Earned" v-model="tutorial.dateEarned" type="date" />
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>

  <!-- Buttons Section (Outside of v-card and v-container) -->
  <div class="buttons-container">
    <v-btn color="success" @click="SubmitTutorial()">Submit</v-btn>
    <v-btn color="red" @click="cancel()">Cancel</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tutorial: {
        name: "",
        email: "",
        address: "",
        degree: "",
        institution: "",
        graduationDate: "",
        jobTitle: "",
        companyName: "",
        startDate: "",
        endDate: "",
        jobDescription: "",
        projectName: "",
        projectDescription: "",
        projectLink: "",
        skillName: "",
        proficiencyLevel: "",
        awardName: "",
        dateEarned: "",
      },
      message: "Enter data and click Submit",
      showSection: null, // State to track the clicked section
      hoverSection: null, // State to track the hovered section
    };
  },
  methods: {
    toggleSection(section) {
      this.showSection = this.showSection === section ? null : section;
    },
    SubmitTutorial() {
      // Your submission logic here
    },
    cancel() {
      // Your cancel logic here
    },
  },
};
</script>

<style>
.section-title {
  transition: transform 0.3s ease, font-size 0.3s ease;
}

.expanded-section {
  transform: scale(1.1); /* Makes the section title bigger */
  font-size: 1.5rem; /* Increases the font size */
}

.buttons-container {
  display: flex;
  justify-content: center;
  gap: 10px; /* Adds space between the buttons */
  margin-top: 20px; /* Adds space above the buttons */
}
</style>
