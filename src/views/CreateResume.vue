<template>
    <h1>Create Resume</h1>
    <h4>{{ message }}</h4>
    <v-container>
       <v-card>
         <v-card-title>Create Resume</v-card-title>
      <v-card-text>

    <v-form>

      <!-- User Basic Information Section -->
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="tutorial.title"
                label="Name"
                
              />
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="tutorial.title"
                label="Email"
                />
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="tutorial.title"
                label="Address"
                />
            </v-col>
          </v-row>

          <!-- Resume Section-->
        <v-divider class="my-4"></v-divider>
        <v-row>
      <v-text-field
      label="Resume Name"
      v-model="tutorial.title"
      
    />
     <v-text-field
      label="Template Type"
      v-model="tutorial.title"
      
    />

 <v-text-field
      label="Introduction"
      v-model="tutorial.title"
      
    />


    </v-row>

   

          <!-- Education Section -->
          <v-divider class="my-4"></v-divider>
          <h3>Education</h3>

           <v-row>
             <v-col cols="4">
        <v-text-field
          label="Degree"
          v-model="tutorial.title"
         
        />
      </v-col>

             <v-col cols="4">
        <v-text-field
          label="Institution"
          v-model="tutorial.title"
          
        />
      </v-col>
     
     
      <v-col cols="4">
        <v-text-field
          label="Graduation Date"
          v-model="tutorial.title"
          type="date"
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
          v-model="tutorial.description"
          
        />
      </v-col>
      
<v-col cols="4">
        <v-text-field
          label="Company Name"
          v-model="tutorial.description"
          
        />
      </v-col>
      <v-col cols="4">
        <v-text-field
          label="Start Date"
          v-model="tutorial.description"
          type="date"
        />
      </v-col>
       <v-col cols="4">
        <v-text-field
          label="End Date"
          v-model="tutorial.description"
          type="date"
        />
      </v-col>
      <v-col cols="4">
        <v-text-field
          label="Job Description"
          v-model="tutorial.description"
          
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
          v-model="tutorial.title"
          
        />
      </v-col>
       <v-col cols="4">
        <v-text-field
          label="Description"
          v-model="tutorial.title"
          
        />
      </v-col>

       <v-col cols="4">
        <v-text-field
          label="Project Link"
          v-model="tutorial.title"
          
        />
      </v-col>
      
    </v-row>  
          
     <!-- Skills Section -->
         <v-divider class="my-4"></v-divider>
    <h3>Skills</h3>
    
<v-row>
  
      <v-col cols="4">
        <v-text-field
          label="Skill Name"
          v-model="tutorial.title"
          
        />
      </v-col>
       <v-col cols="4">
        <v-text-field
          label="Proficiency Level"
          v-model="tutorial.title"
          
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
          v-model="tutorial.title"
          
        />
      </v-col>
       <v-col cols="4">
        <v-text-field
          label="Date Earned"
          v-model="tutorial.title"
          type ="date"
          
        />
      </v-col>

      
      
    </v-row>  
          



    
        <v-row justify="center">
            <v-col col="2"> </v-col>
            <v-col col="2">
                <v-btn color="success" @click="saveTutorial()"
                    >Save</v-btn
                >
            </v-col>
            <v-col col="2">
                <v-btn color="info" @click="cancel()">Cancel</v-btn>
            </v-col>
            <v-col col="2"> </v-col>
        </v-row>
    </v-form>
    </v-card-text>
    </v-card>
    </v-container>
</template>











<script>
import TutorialDataService from "../services/TutorialDataService";
export default {
  name: "add-tutorial",
  data() {
    return {
      tutorial: {
        id: null,
        title: "",
        description: "",
        published: false
      },
      message: "Enter data and click save"
    };
  },
  methods: {
    saveTutorial() {
      var data = {
        title: this.tutorial.title,
        description: this.tutorial.description
      };
      TutorialDataService.create(data)
        .then(response => {
          this.tutorial.id = response.data.id;
          console.log("add "+response.data);
          this.$router.push({ name: 'tutorials' });
        })
        .catch(e => {
          this.message = e.response.data.message;
        });
    },
    cancel(){
        this.$router.push({ name: 'tutorials' });
    }
  }
}

</script>
<style>

</style>