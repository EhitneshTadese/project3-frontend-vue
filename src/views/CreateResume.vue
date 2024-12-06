<template>
  <div>
    <h1>Create Resume</h1>
    <h4>{{ message }}</h4>
    <v-container>
      <v-card>
        <v-card-title>Create Resume</v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid">
            <!-- Basic Information -->
            <v-text-field
              v-model="tutorial.resumeName"
              label="Resume Name"
              :rules="[rules.required]"
            ></v-text-field>

            <v-text-field
              v-model="tutorial.name"
              label="Full Name"
              :rules="[rules.required]"
            ></v-text-field>

            <v-text-field
              v-model="tutorial.email"
              label="Email"
              :rules="[rules.required, rules.email]"
            ></v-text-field>

            <v-text-field
              v-model="tutorial.address"
              label="Address"
            ></v-text-field>

            <v-textarea
              v-model="tutorial.introduction"
              label="Professional Introduction"
              rows="3"
            ></v-textarea>

            <!-- Education Section -->
            <v-card class="mb-4" outlined>
              <v-card-title>Education</v-card-title>
              <v-card-text>
                <div v-for="(edu, index) in tutorial.education" :key="index">
                  <v-row>
                    <v-col cols="12" md="4">
                      <v-text-field
                        v-model="edu.degree"
                        label="Degree"
                        :rules="[rules.required]"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-text-field
                        v-model="edu.institution"
                        label="Institution"
                        :rules="[rules.required]"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-text-field
                        v-model="edu.graduationDate"
                        label="Graduation Date"
                        type="date"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </div>
                <v-btn @click="addEducation" color="success">Add Education</v-btn>
                <v-btn 
                  @click="removeEducation(tutorial.education.length - 1)" 
                  color="error" 
                  class="ml-2"
                  :disabled="tutorial.education.length <= 1"
                >Remove Education</v-btn>
              </v-card-text>
            </v-card>

            <!-- Experience Section -->
            <v-card class="mb-4" outlined>
              <v-card-title>Experience</v-card-title>
              <v-card-text>
                <div v-for="(exp, index) in tutorial.experience" :key="index">
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="exp.jobTitle"
                        label="Job Title"
                        :rules="[rules.required]"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="exp.companyName"
                        label="Company Name"
                        :rules="[rules.required]"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="exp.startDate"
                        label="Start Date"
                        type="date"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="exp.endDate"
                        label="End Date"
                        type="date"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-textarea
                        v-model="exp.description"
                        label="Job Description"
                        rows="3"
                      ></v-textarea>
                    </v-col>
                  </v-row>
                </div>
                <v-btn @click="addExperience" color="success">Add Experience</v-btn>
                <v-btn 
                  @click="removeExperience(tutorial.experience.length - 1)" 
                  color="error" 
                  class="ml-2"
                  :disabled="tutorial.experience.length <= 1"
                >Remove Experience</v-btn>
              </v-card-text>
            </v-card>

            <!-- Skills Section -->
            <v-card class="mb-4" outlined>
              <v-card-title>Skills</v-card-title>
              <v-card-text>
                <div v-for="(skill, index) in tutorial.skills" :key="index">
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="skill.name"
                        label="Skill Name"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-select
                        v-model="skill.proficiency"
                        :items="['Beginner', 'Intermediate', 'Advanced', 'Expert']"
                        label="Proficiency Level"
                      ></v-select>
                    </v-col>
                  </v-row>
                </div>
                <v-btn @click="addSkill" color="success">Add Skill</v-btn>
                <v-btn 
                  @click="removeSkill(tutorial.skills.length - 1)" 
                  color="error" 
                  class="ml-2"
                  :disabled="tutorial.skills.length <= 1"
                >Remove Skill</v-btn>
              </v-card-text>
            </v-card>

            <!-- Submit and Cancel buttons -->
            <v-row justify="center" class="mt-4">
              <v-col cols="2">
                <v-btn 
                  style="background-color: #7DE2D1;" 
                  @click.prevent="submitTutorial"
                  :loading="loading"
                  :disabled="!valid"
                >
                  Submit
                </v-btn>
              </v-col>
              <v-col cols="2">
                <v-btn color="red" @click="cancel">Cancel</v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "CreateResume",
  data() {
    return {
      valid: false,
      loading: false,
      tutorial: {
        name: "",
        email: "",
        address: "",
        resumeName: "",
        templateType: "",
        introduction: "",
        education: [{ 
          degree: "",
          institution: "",
          graduationDate: ""
        }],
        experience: [{
          jobTitle: "",
          companyName: "",
          startDate: "",
          endDate: "",
          description: ""
        }],
        skills: [{ 
          name: "", 
          proficiency: "" 
        }],
        awards: [{ 
          name: "", 
          date: "" 
        }],
        projects: [{ 
          name: "", 
          description: "", 
          link: "" 
        }]
      },
      message: "Enter data and click Submit",
      rules: {
        required: value => !!value || "Required.",
        email: value => /.+@.+\..+/.test(value) || "E-mail must be valid."
      }
    };
  },
  created() {
    const resumeId = this.$route.params.id;
    if (resumeId) {
      const resumes = JSON.parse(localStorage.getItem('resumes')) || [];
      const existingResume = resumes.find(resume => resume.id === parseInt(resumeId));
      if (existingResume) {
        this.tutorial = { ...existingResume };
      }
    }
  },
  methods: {
    async submitTutorial() {
      console.log("Submit button clicked");
      
      if (this.$refs.form.validate()) {
        try {
          console.log("Form validation passed");
          this.message = "Submitting...";
          this.loading = true;
          
          const resumes = JSON.parse(localStorage.getItem('resumes')) || [];
          
          const newResume = {
            id: this.$route.params.id ? parseInt(this.$route.params.id) : Date.now(),
            uploadDate: new Date().toISOString(),
            resumeName: this.tutorial.resumeName || 'Untitled Resume',
            name: this.tutorial.name,
            email: this.tutorial.email,
            address: this.tutorial.address,
            introduction: this.tutorial.introduction,
            templateType: this.tutorial.templateType,
            education: this.tutorial.education,
            experience: this.tutorial.experience,
            projects: this.tutorial.projects,
            skills: this.tutorial.skills,
            awards: this.tutorial.awards
          };

          console.log("New resume object:", newResume);

          const index = resumes.findIndex(resume => resume.id === newResume.id);
          if (index !== -1) {
            resumes[index] = newResume;
          } else {
            resumes.push(newResume);
          }
          localStorage.setItem('resumes', JSON.stringify(resumes));

          console.log("Resume saved to localStorage");
          this.message = "Resume created successfully!";
          
          setTimeout(() => {
            this.$router.push({ name: 'all-resumes' }).catch(err => {
              console.error("Navigation error:", err);
            });
          }, 500);
        } catch (error) {
          console.error("Error creating resume:", error);
          this.message = "Error creating resume: " + error.message;
        } finally {
          this.loading = false;
        }
      } else {
        console.log("Form validation failed");
        this.message = "Please fill in all required fields";
      }
    },
    cancel() {
      this.$router.push({ name: 'account' });
    },
    addEducation() {
      this.tutorial.education.push({
        degree: "",
        institution: "",
        graduationDate: ""
      });
    },
    removeEducation(index) {
      if (this.tutorial.education.length > 1) {
        this.tutorial.education.splice(index, 1);
      }
    },
    addExperience() {
      this.tutorial.experience.push({
        jobTitle: "",
        companyName: "",
        startDate: "",
        endDate: "",
        description: ""
      });
    },
    removeExperience(index) {
      if (this.tutorial.experience.length > 1) {
        this.tutorial.experience.splice(index, 1);
      }
    },
    addSkill() {
      this.tutorial.skills.push({
        name: "",
        proficiency: ""
      });
    },
    removeSkill(index) {
      if (this.tutorial.skills.length > 1) {
        this.tutorial.skills.splice(index, 1);
      }
    }
  }
};
</script>

<style scoped>
.resume-preview {
  border: 1px solid #ccc;
  padding: 20px;
  margin-top: 20px;
}
.mb-4 {
  margin-bottom: 1rem;
}
</style>
