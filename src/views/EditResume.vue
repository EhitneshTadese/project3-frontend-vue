<template>
  <v-container>
    <v-card>
      <v-card-title>Edit Resume</v-card-title>
      <v-card-text>
        <h4>{{ message }}</h4>
        <v-form>
          
          <!-- Resume Details Section -->
          <v-divider class="my-4"></v-divider>
          <h3>Resume Details</h3>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                label="Resume Name"
                v-model="formData.resume_name"
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                label="Template Type"
                v-model="formData.template_type"
              />
            </v-col>
            <v-col cols="12">
              <v-textarea
                label="Introduction"
                v-model="formData.intro_paragraph"
              />
            </v-col>
          </v-row>

          <!-- Education Section -->
          <v-divider class="my-4"></v-divider>
          <h3>Education</h3>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                label="Degree"
                v-model="formData.education.degree"
              />
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                label="Institution Name"
                v-model="formData.education.institution_name"
              />
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                label="Graduation Date"
                v-model="formData.education.graduation_date"
                type="date"
              />
            </v-col>
          </v-row>

          <!-- Experience Section -->
          <v-divider class="my-4"></v-divider>
          <h3>Experience</h3>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                label="Job Title"
                v-model="formData.experience.job_title"
              />
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                label="Company Name"
                v-model="formData.experience.company_name"
              />
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                label="Start Date"
                v-model="formData.experience.start_date"
                type="date"
              />
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                label="End Date"
                v-model="formData.experience.end_date"
                type="date"
              />
            </v-col>
            <v-col cols="12" md="8">
              <v-textarea
                label="Job Description"
                v-model="formData.experience.job_description"
              />
            </v-col>
          </v-row>

          <!-- Projects Section -->
          <v-divider class="my-4"></v-divider>
          <h3>Projects</h3>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                label="Project Name"
                v-model="formData.project.project_name"
              />
            </v-col>
            <v-col cols="12" md="4">
              <v-textarea
                label="Description"
                v-model="formData.project.description"
              />
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                label="Project Link"
                v-model="formData.project.project_link"
              />
            </v-col>
          </v-row>

          <!-- Skills Section -->
          <v-divider class="my-4"></v-divider>
          <h3>Skills</h3>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                label="Skill Name"
                v-model="formData.skill.skill_name"
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                label="Proficiency Level"
                v-model="formData.skill.proficiency_level"
              />
            </v-col>
          </v-row>

          <!-- Interests Section -->
          <v-divider class="my-4"></v-divider>
          <h3>Interests</h3>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                label="Interest"
                v-model="formData.interest.interest"
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-textarea
                label="Description"
                v-model="formData.interest.description"
              />
            </v-col>
          </v-row>

          <!-- Awards Section -->
          <v-divider class="my-4"></v-divider>
          <h3>Awards</h3>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                label="Award Name"
                v-model="formData.award.award_name"
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                label="Date Earned"
                v-model="formData.award.date_earned"
                type="date"
              />
            </v-col>
          </v-row>

          <!-- Save and Cancel Buttons -->
          <v-row justify="center" class="my-4">
            <v-btn color="success" @click="updateData">Save</v-btn>
            <v-btn color="error" @click="cancel">Cancel</v-btn>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import ResumeDataService from "../services/ResumeDataService";

export default {
  name: "EditResume",
  data() {
    return {
      formData: {
        resume_name: "",
        template_type: "",
        intro_paragraph: "",
        education: {
          degree: "",
          institution_name: "",
          graduation_date: "",
        },
        experience: {
          job_title: "",
          company_name: "",
          start_date: "",
          end_date: "",
          job_description: "",
        },
        project: {
          project_name: "",
          description: "",
          project_link: "",
        },
        skill: {
          skill_name: "",
          proficiency_level: "",
        },
        interest: {
          interest: "",
          description: "",
        },
        award: {
          award_name: "",
          date_earned: "",
        },
      },
      message: "",
    };
  },
  created() {
    this.loadResumeData();
  },
  methods: {
    async loadResumeData() {
      try {
        const resumeId = this.$route.params.id; // Get resume_id from route
        const response = await ResumeDataService.get(resumeId);

        const data = response.data;

        // Populate formData with fetched data
        this.formData.resume_name = data.resume.resume_name;
        this.formData.template_type = data.resume.template_type;
        this.formData.intro_paragraph = data.resume.intro_paragraph;

        if (data.education.length > 0) {
          this.formData.education = data.education[0]; // Assuming one education record
        }
        if (data.experience.length > 0) {
          this.formData.experience = data.experience[0]; // Assuming one experience record
        }
        if (data.project.length > 0) {
          this.formData.project = data.project[0]; // Assuming one project record
        }
        if (data.skill.length > 0) {
          this.formData.skill = data.skill[0]; // Assuming one skill record
        }
        if (data.interest.length > 0) {
          this.formData.interest = data.interest[0]; // Assuming one interest record
        }
        if (data.award.length > 0) {
          this.formData.award= data.award[0]; // Assuming one award record
        }
      } catch (error) {
        console.error("Error loading resume data:", error);
        this.message =
          error.response?.data?.message || "Failed to load resume data.";
      }
    },
    async updateData() {
      try {
        const resumeId = this.$route.params.id; // Get resume_id from route
        const response = await ResumeDataService.update(resumeId, this.formData);

        this.message = response.data.message;
        console.log("Updated Resume:", response.data);

        this.$router.push({ name: "resumes" }); // Redirect to resumes page
      } catch (error) {
        this.message = error.response?.data?.message || "Error occurred";
        console.error("Error updating resume:", error);
      }
    },
    cancel() {
      this.$router.push({ name: "resumes" });
    },
  },
};
</script>