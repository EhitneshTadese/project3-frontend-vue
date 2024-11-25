<template>
  <v-container>
  <v-row justify="center">
    <v-col cols="50">
    <h1>User Resumes</h1>
    <v-data-table
      :headers="headers"
      :items="resumes"
      item-value="id"
      class="elevation-1"
      style="max-width: 1200px; margin: auto;"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Resumes</v-toolbar-title>
        </v-toolbar>
      </template>
      <!-- Table Header -->
      <template v-slot:body.prepend>
        <thead>
          <tr>
           
            <th>Resume Name</th>
            <th>Template Type</th>
            <th>Actions</th>
          </tr>
        </thead>
      </template>
      <template v-slot:body="{ items }">
       
        <tbody>
          <tr v-for="resume in items" :key="resume.resume_id">
            
            <td>{{ resume.resume_name }}</td>
            <td>{{ resume.template_type }}</td>
            <td>
              <v-btn color="primary" small @click="editResume(resume.resume_id)">
                Edit
              </v-btn>
              <v-btn color="error" small @click="deleteResume(resume.resume_id)">
                Delete
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-data-table>
  </v-col>
  </v-row>
</v-container>
</template>

<script>
import ResumeDataService from "../services/ResumeDataService";

export default {
  data() {
    return {
      resumes: [], // Stores fetched resumes
      headers: [
        { text: "Resume Name", value: "resume_name", width: "20%", },
        { text: "Template Type", value: "template_type", width: "20%",},
        { text: "Actions", value: "actions", width: "60%", sortable: false },
      ],
    };
  },
  methods: {
    fetchResumes() {
      ResumeDataService.getUserResumes()
        .then((response) => {
          this.resumes = response.data; // Populate resumes from API response
        })
        .catch((error) => {
          console.error("Error fetching resumes:", error);
        });
    },
    editResume(id) {
      console.log("Edit resume:", id);
      // Redirect to the edit page or open a modal
    },
    deleteResume(id) {
      console.log("Delete resume:", id);
      // Call delete API and refresh the list
    },
  },
  created() {
    this.fetchResumes(); // Fetch resumes on component creation
  },
};
</script>

<style>
/* Add any custom styles if needed */
</style>