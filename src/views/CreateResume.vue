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
              v-model="tutorial.phone"
              label="Phone Number"
              :rules="[rules.required, rules.phone]"
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

            <!-- Professional Summary -->
            <v-textarea
              v-model="tutorial.professionalSummary"
              label="Professional Summary"
              rows="4"
              :rules="[rules.required]"
            ></v-textarea>

            <!-- Education Section -->
            <v-card class="mb-4" outlined>
              <v-card-title>Education</v-card-title>
              <v-card-text>
                <div v-for="(edu, index) in tutorial.education" :key="index">
                  <v-row>
                    <v-col cols="12" md="3">
                      <v-text-field
                        v-model="edu.degree"
                        label="Degree"
                        :rules="[rules.required]"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="3">
                      <v-text-field
                        v-model="edu.institution"
                        label="Institution"
                        :rules="[rules.required]"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="3">
                      <v-text-field
                        v-model="edu.graduationDate"
                        label="Graduation Date"
                        type="date"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="3">
                      <v-text-field
                        v-model="edu.gpa"
                        label="GPA"
                        type="number"
                        step="0.01"
                        min="0"
                        max="4.0"
                        hint="Enter GPA (0.00 - 4.00)"
                        persistent-hint
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
                        :rules="[rules.required]"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="skill.proficiency"
                        label="Proficiency"
                        :rules="[rules.required]"
                      ></v-text-field>
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

            <!-- Awards Section -->
            <v-card class="mb-4" outlined>
              <v-card-title>Awards</v-card-title>
              <v-card-text>
                <div v-for="(award, index) in tutorial.awards" :key="index">
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="award.name"
                        label="Award Name"
                        :rules="[rules.required]"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="award.date"
                        label="Date"
                        type="date"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </div>
                <v-btn @click="addAward" color="success">Add Award</v-btn>
                <v-btn 
                  @click="removeAward(tutorial.awards.length - 1)" 
                  color="error" 
                  class="ml-2"
                  :disabled="tutorial.awards.length <= 1"
                >Remove Award</v-btn>
              </v-card-text>
            </v-card>

            <!-- Activities Section -->
            <v-card class="mb-4" outlined>
              <v-card-title>Activities</v-card-title>
              <v-card-text>
                <v-textarea
                  v-model="tutorial.activities"
                  label="Activities"
                  rows="3"
                  :rules="[rules.required]"
                ></v-textarea>
              </v-card-text>
            </v-card>

            <!-- Computer Skills Section -->
            <v-card class="mb-4" outlined>
              <v-card-title>Computer Skills</v-card-title>
              <v-card-text>
                <div v-for="(skill, index) in tutorial.computerSkills" :key="index">
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="skill.name"
                        label="Skill Name"
                        :rules="[rules.required]"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="skill.proficiency"
                        label="Proficiency"
                        :rules="[rules.required]"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </div>
                <v-btn @click="addComputerSkill" color="success">Add Computer Skill</v-btn>
                <v-btn 
                  @click="removeComputerSkill(tutorial.computerSkills.length - 1)" 
                  color="error" 
                  class="ml-2"
                  :disabled="tutorial.computerSkills.length <= 1"
                >Remove Computer Skill</v-btn>
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
  name: 'CreateResume',
  data() {
    return {
      valid: false,
      loading: false,
      message: '',
      tutorial: {
        resumeName: '',
        name: '',
        phone: '',
        email: '',
        address: '',
        professionalSummary: '',
        education: [{
          degree: '',
          institution: '',
          graduationDate: '',
          gpa: ''
        }],
        experience: [{
          jobTitle: '',
          companyName: '',
          startDate: '',
          endDate: '',
          description: ''
        }],
        skills: [{
          name: '',
          proficiency: ''
        }],
        awards: [{
          name: '',
          date: ''
        }],
        activities: '',
        computerSkills: [{
          name: '',
          proficiency: ''
        }]
      },
      rules: {
        required: v => !!v || 'This field is required',
        email: v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        phone: v => {
          const pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/;
          return !v || pattern.test(v) || 'Please enter a valid phone number';
        }
      }
    }
  },
  methods: {
    submitTutorial() {
      if (this.$refs.form.validate()) {
        try {
          this.loading = true;
          this.message = "Submitting...";
          
          const resumes = JSON.parse(localStorage.getItem('resumes')) || [];
          
          const newResume = {
            id: this.$route.params.id ? parseInt(this.$route.params.id) : Date.now(),
            uploadDate: new Date().toISOString(),
            ...this.tutorial
          };

          const index = resumes.findIndex(resume => resume.id === newResume.id);
          if (index !== -1) {
            resumes[index] = newResume;
          } else {
            resumes.push(newResume);
          }
          
          localStorage.setItem('resumes', JSON.stringify(resumes));
          this.message = "Resume created successfully!";
          
          setTimeout(() => {
            this.$router.push({ name: 'all-resumes' });
          }, 500);
        } catch (error) {
          console.error("Error creating resume:", error);
          this.message = "Error creating resume: " + error.message;
        } finally {
          this.loading = false;
        }
      } else {
        this.message = "Please fill in all required fields";
      }
    },
    cancel() {
      this.$router.push({ name: 'all-resumes' });
    },
    addEducation() {
      this.tutorial.education.push({
        degree: '',
        institution: '',
        graduationDate: '',
        gpa: ''
      });
    },
    removeEducation(index) {
      if (this.tutorial.education.length > 1) {
        this.tutorial.education.splice(index, 1);
      }
    },
    addExperience() {
      this.tutorial.experience.push({
        jobTitle: '',
        companyName: '',
        startDate: '',
        endDate: '',
        description: ''
      });
    },
    removeExperience(index) {
      if (this.tutorial.experience.length > 1) {
        this.tutorial.experience.splice(index, 1);
      }
    },
    addSkill() {
      this.tutorial.skills.push({
        name: '',
        proficiency: ''
      });
    },
    removeSkill(index) {
      if (this.tutorial.skills.length > 1) {
        this.tutorial.skills.splice(index, 1);
      }
    },
    addAward() {
      this.tutorial.awards.push({
        name: '',
        date: ''
      });
    },
    removeAward(index) {
      if (this.tutorial.awards.length > 1) {
        this.tutorial.awards.splice(index, 1);
      }
    },
    addComputerSkill() {
      this.tutorial.computerSkills.push({
        name: '',
        proficiency: ''
      });
    },
    removeComputerSkill(index) {
      if (this.tutorial.computerSkills.length > 1) {
        this.tutorial.computerSkills.splice(index, 1);
      }
    }
  }
}
</script>

<style scoped>
.v-card-text {
  padding-top: 12px;
  padding-bottom: 12px;
}
</style>
  