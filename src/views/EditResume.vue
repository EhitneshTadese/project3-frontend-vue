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
                v-model="formData.skills.skill_name"
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                label="Proficiency Level"
                v-model="formData.skills.proficiency_level"
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
                v-model="formData.awards.award_name"
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                label="Date Earned"
                v-model="formData.awards.date_earned"
                type="date"
              />
            </v-col>
          </v-row>

          <!-- Save and Cancel Buttons -->
          <v-row justify="center" class="my-4">
            <v-btn color="success" @click="saveData">Save</v-btn>
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
  props: ["id"], // Resume ID passed from the route
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
        awards: {
          award_name: "",
          date_earned: "",
        },
        skills: {
          skill_name: "",
          proficiency_level: "",
        },
      },
      message: "Edit your resume and click save",
    };
  },
  created() {
    this.fetchResumeData();
  },
  methods: {
    // Fetch existing resume data to prepopulate the form
    async fetchResumeData() {
      try {
        const response = await ResumeDataService.get(this.id);
        this.populateForm(response.data);
      } catch (error) {
        this.message =
          error.response?.data?.message || "Failed to fetch resume data.";
        console.error("Error fetching resume:", error);
      }
    },

    // Populate the form with the existing resume data
    populateForm(data) {
    
      this.formData.resume_name = data.resume_name || "";
      this.formData.template_type = data.template_type || "";
      this.formData.intro_paragraph = data.intro_paragraph || "";
      this.formData.education = data.education || {
        degree: "",
        institution_name: "",
        graduation_date: "",
      };
      this.formData.experience = data.experience || {
        job_title: "",
        company_name: "",
        start_date: "",
        end_date: "",
        job_description: "",
      };
      this.formData.project = data.project || {
        project_name: "",
        description: "",
        project_link: "",
      };
      this.formData.awards = data.awards || {
        award_name: "",
        date_earned: "",
      };
      this.formData.skills = data.skills || {
        skill_name: "",
        proficiency_level: "",
      };
    },

    // Save the updated data
    async saveData() {
      try {
        const response = await ResumeDataService.update(this.id, this.formData);
        this.message = response.data.message || "Resume updated successfully.";
        console.log("Updated Resume:", response.data);
        this.$router.push({ name: "resumes" }); // Redirect to resumes page
      } catch (error) {
        this.message = error.response?.data?.message || "Error updating resume.";
        console.error("Error updating resume:", error);
      }
    },

    // Cancel editing and redirect back to the resume list page
    cancel() {
      this.$router.push({ name: "resumes" });
    },
  },
};
</script>