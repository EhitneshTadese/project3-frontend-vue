 
<template>
  <v-container>
    <v-card>
      <v-card-title>
        <h1>{{ isEditing ? 'Edit Resume' : 'Create Resume' }}</h1>
      </v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid">
          <!-- Basic Information -->
          <v-text-field
            v-model="resume.resumeName"
            label="Resume Name"
            required
          ></v-text-field>

          <v-text-field
            v-model="resume.name"
            label="Full Name"
            required
          ></v-text-field>

          <v-text-field
            v-model="resume.phone"
            label="Phone Number"
            required
          ></v-text-field>

          <v-text-field
            v-model="resume.email"
            label="Email"
            required
          ></v-text-field>

          <v-text-field
            v-model="resume.address"
            label="Address"
          ></v-text-field>

          <!-- Professional Summary -->
          <v-textarea
            v-model="resume.professionalSummary"
            label="Professional Summary"
            rows="4"
            required
          ></v-textarea>

          <!-- Education Section -->
          <v-card class="mb-4" outlined>
            <v-card-title>Education</v-card-title>
            <v-card-text>
              <div v-for="(edu, index) in resume.education" :key="index">
                <v-row>
                  <v-col cols="12" md="3">
                    <v-text-field
                      v-model="edu.degree"
                      label="Degree"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="3">
                    <v-text-field
                      v-model="edu.institution"
                      label="Institution"
                      required
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
                    ></v-text-field>
                  </v-col>
                </v-row>
              </div>
              <v-btn @click="addEducation" color="success">Add Education</v-btn>
              <v-btn 
                @click="removeEducation(resume.education.length - 1)" 
                color="error" 
                class="ml-2"
                :disabled="resume.education.length <= 1"
              >Remove Education</v-btn>
            </v-card-text>
          </v-card>

          <!-- Experience Section -->
          <v-card class="mb-4" outlined>
            <v-card-title>Experience</v-card-title>
            <v-card-text>
              <div v-for="(exp, index) in resume.experience" :key="index">
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="exp.jobTitle"
                      label="Job Title"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="exp.companyName"
                      label="Company Name"
                      required
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
                @click="removeExperience(resume.experience.length - 1)" 
                color="error" 
                class="ml-2"
                :disabled="resume.experience.length <= 1"
              >Remove Experience</v-btn>
            </v-card-text>
          </v-card>

          <!-- Skills Section -->
          <v-card class="mb-4" outlined>
            <v-card-title>Skills</v-card-title>
            <v-card-text>
              <div v-for="(skill, index) in resume.skills" :key="index">
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="skill.name"
                      label="Skill Name"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="skill.proficiency"
                      label="Proficiency"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
              </div>
              <v-btn @click="addSkill" color="success">Add Skill</v-btn>
              <v-btn 
                @click="removeSkill(resume.skills.length - 1)" 
                color="error" 
                class="ml-2"
                :disabled="resume.skills.length <= 1"
              >Remove Skill</v-btn>
            </v-card-text>
          </v-card>

          <!-- Awards Section -->
          <v-card class="mb-4" outlined>
            <v-card-title>Awards</v-card-title>
            <v-card-text>
              <div v-for="(award, index) in resume.awards" :key="index">
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="award.name"
                      label="Award Name"
                      required
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
                @click="removeAward(resume.awards.length - 1)" 
                color="error" 
                class="ml-2"
                :disabled="resume.awards.length <= 1"
              >Remove Award</v-btn>
            </v-card-text>
          </v-card>

          <!-- Activities Section -->
          <v-card class="mb-4" outlined>
            <v-card-title>Activities</v-card-title>
            <v-card-text>
              <v-textarea
                v-model="resume.activities"
                label="Activities"
                rows="3"
              ></v-textarea>
            </v-card-text>
          </v-card>

          <!-- Submit and Cancel buttons -->
          <v-row justify="center" class="mt-4">
            <v-col cols="2">
              <v-btn 
                color="primary"
                @click="submitResume"
                :loading="loading"
                :disabled="!valid"
              >
                {{ isEditing ? 'Update' : 'Submit' }}
              </v-btn>
            </v-col>
            <v-col cols="2">
              <v-btn color="error" @click="cancel">Cancel</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'CreateResume',
  data() {
    return {
      valid: false,
      loading: false,
      message: '',
      resume: {
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
        activities: ''
      }
    }
  },
  computed: {
    isEditing() {
      return !!this.$route.params.id
    }
  },
  created() {
    const resumeId = this.$route.params.id
    if (resumeId) {
      this.loadExistingResume(resumeId)
    }
  },
  methods: {
    loadExistingResume(id) {
      try {
        const resumes = JSON.parse(localStorage.getItem('resumes')) || []
        const existingResume = resumes.find(r => r.id === parseInt(id))
        
        if (existingResume) {
          console.log('Loading existing resume:', existingResume)
          this.resume = {
            ...existingResume,
            education: existingResume.education || [{
              degree: '',
              institution: '',
              graduationDate: '',
              gpa: ''
            }],
            experience: existingResume.experience || [{
              jobTitle: '',
              companyName: '',
              startDate: '',
              endDate: '',
              description: ''
            }],
            skills: existingResume.skills || [{
              name: '',
              proficiency: ''
            }],
            awards: existingResume.awards || [{
              name: '',
              date: ''
            }]
          }
        } else {
          console.error('Resume not found with ID:', id)
          this.message = 'Resume not found'
        }
      } catch (error) {
        console.error('Error loading resume:', error)
        this.message = 'Error loading resume data'
      }
    },
    addEducation() {
      this.resume.education.push({
        degree: '',
        institution: '',
        graduationDate: '',
        gpa: ''
      })
    },
    removeEducation(index) {
      if (this.resume.education.length > 1) {
        this.resume.education.splice(index, 1)
      }
    },
    addExperience() {
      this.resume.experience.push({
        jobTitle: '',
        companyName: '',
        startDate: '',
        endDate: '',
        description: ''
      })
    },
    removeExperience(index) {
      if (this.resume.experience.length > 1) {
        this.resume.experience.splice(index, 1)
      }
    },
    addSkill() {
      this.resume.skills.push({
        name: '',
        proficiency: ''
      })
    },
    removeSkill(index) {
      if (this.resume.skills.length > 1) {
        this.resume.skills.splice(index, 1)
      }
    },
    addAward() {
      this.resume.awards.push({
        name: '',
        date: ''
      })
    },
    removeAward(index) {
      if (this.resume.awards.length > 1) {
        this.resume.awards.splice(index, 1)
      }
    },
    async submitResume() {
      if (this.$refs.form.validate()) {
        try {
          this.loading = true
          this.message = "Submitting..."
          
          const resumes = JSON.parse(localStorage.getItem('resumes')) || []
          
          const newResume = {
            id: this.isEditing ? parseInt(this.$route.params.id) : Date.now(),
            uploadDate: new Date().toISOString(),
            ...this.resume
          }

          const index = resumes.findIndex(resume => resume.id === newResume.id)
          if (index !== -1) {
            resumes[index] = newResume
          } else {
            resumes.push(newResume)
          }
          
          localStorage.setItem('resumes', JSON.stringify(resumes))
          this.message = this.isEditing ? "Resume updated successfully!" : "Resume created successfully!"
          
          setTimeout(() => {
            this.$router.push({ name: 'all-resumes' })
          }, 500)
        } catch (error) {
          console.error("Error saving resume:", error)
          this.message = "Error saving resume: " + error.message
        } finally {
          this.loading = false
        }
      } else {
        this.message = "Please fill in all required fields"
      }
    },
    cancel() {
      this.$router.push({ name: 'all-resumes' })
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
  