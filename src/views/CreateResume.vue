<<<<<<< HEAD
=======
 
>>>>>>> 5a59a9b17ef4b82ce33b2e0cd36ae29679036642
<template>
  <div>
    <h1>Create Resume</h1>
    <h4>{{ message }}</h4>
    <v-container>
      <v-card>
        <v-card-title>Create Resume</v-card-title>
        <v-card-text>
<<<<<<< HEAD
          <v-form>
          

            <!-- Resume Section -->
            <v-divider class="my-4"></v-divider>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Resume Name"
                  v-model="formData.resume_name"
                  required
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Template Type"
                  v-model="formData.template_type"
                  required
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-textarea
                  label="Introduction"
                  v-model="formData.intro_paragraph"
                  required
                />
              </v-col>
            </v-row>

            <!-- Education Section -->
            <v-divider class="my-4"></v-divider>
            <h3>Education</h3>
            <v-row>
              <v-col cols="4">
                <v-text-field
                  label="Degree"
                  v-model="formData.education.degree"
                  required
                />
              </v-col>
              <v-col cols="4">
                <v-text-field
                  label="Institution"
                  v-model="formData.education.institution_name"
                  required
                />
              </v-col>
              <v-col cols="4">
                <v-text-field
                  label="Graduation Date"
                  v-model="formData.education.graduation_date"
                  type="date"
                  required
                />
              </v-col>
            </v-row>

            <!-- Experience Section -->
            <v-divider class="my-4"></v-divider>
            <h3>Experience</h3>
            <v-row>
              <v-col cols="4">
                <v-text-field
                  label="Job Title"
                  v-model="formData.experience.job_title"
                />
              </v-col>
              <v-col cols="4">
                <v-text-field
                  label="Company Name"
                  v-model="formData.experience.company_name"
                />
              </v-col>
              <v-col cols="4">
                <v-text-field
                  label="Start Date"
                  v-model="formData.experience.start_date"
                  type="date"
                />
              </v-col>
              <v-col cols="4">
                <v-text-field
                  label="End Date"
                  v-model="formData.experience.end_date"
                  type="date"
                />
              </v-col>
              <v-col cols="8">
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
  
      <v-col cols="4">
        <v-text-field
          label="Proeject Name"
          v-model="formData.project.project_name"
          
        />
      </v-col>
       <v-col cols="4">
        <v-text-field
          label="Description"
          v-model="formData.project.description"
          
        />
      </v-col>

       <v-col cols="4">
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
              <v-col cols="6">
                <v-text-field
                  label="Skill Name"
                  v-model="formData.skills.skill_name"
                />
              </v-col>
              <v-col cols="6">
                <v-text-field
                  label="Proficiency Level"
                  v-model="formData.skills.proficiency_level"
                />
              </v-col>
            </v-row>

 <!-- Interests Section -->
            <v-divider class="my-4"></v-divider>
            <h3>Interests</h3>
            <v-row>
              <v-col cols="6">
                <v-text-field
                  label="Interest"
                  v-model="formData.interests.interest"
                />
              </v-col>
              <v-col cols="6">
                <v-textarea
                  label="description"
                  v-model="formData.interests.description"
                />
              </v-col>
            </v-row>


             <!-- Awards Section -->
         <v-divider class="my-4"></v-divider>
    <h3>Awards</h3>    
<v-row>
  
      <v-col cols="4">
        <v-text-field
          label="Award Name"
          v-model="formData.awards.award_name"
          
        />
      </v-col>
       <v-col cols="4">
        <v-text-field
          label="Date Earned"
          v-model="formData.awards.date_earned"
          type ="date"
          
        />
      </v-col>

      
      
    </v-row>  


            <!-- Actions -->
            <v-divider class="my-4"></v-divider>
            <v-row justify="center">
              <v-col col="2">
                <v-btn color="success" @click="saveData">Save</v-btn>
              </v-col>
              <v-col col="2">
                <v-btn color="info" @click="cancel">Cancel</v-btn>
=======
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
>>>>>>> 5a59a9b17ef4b82ce33b2e0cd36ae29679036642
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
<<<<<<< HEAD
import ResumeDataService from "../services/ResumeDataService";

=======
>>>>>>> 5a59a9b17ef4b82ce33b2e0cd36ae29679036642
export default {
  name: "CreateResume",
  data() {
    return {
<<<<<<< HEAD
      formData: {
        name: "",
        email: "",
        address: "",
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
interests: {
          interest: "",
           description: "",
        
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
      message: "Enter data and click save",
    };
  },
  methods: {
    async saveData() {
      try {
        const response = await ResumeDataService.create(
          this.formData
        );
        this.message = response.data.message;
        console.log("Created User and Resume:", response.data);
        this.$router.push({ name: "resumes" }); // Redirect to resumes page
      } catch (error) {
        this.message = error.response?.data?.message || "Error occurred";
        console.error("Error creating user and resume:", error);
      }
    },
    cancel() {
      this.$router.push({ name: "resumes" });
    },
  },
};
</script>

<style>
/* Add styles as needed */
</style>
=======
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
>>>>>>> 5a59a9b17ef4b82ce33b2e0cd36ae29679036642
