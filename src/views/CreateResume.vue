<template>
  <div>
    <h1>Create Resume</h1>
    <h4>{{ message }}</h4>
    <v-container>
      <v-card>
        <v-card-title>Create Resume</v-card-title>
        <v-card-text>
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
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import ResumeDataService from "../services/ResumeDataService";

export default {
  name: "CreateResume",
  data() {
    return {
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