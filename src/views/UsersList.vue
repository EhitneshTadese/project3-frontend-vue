<template>
  <div>
    <h1>Users List</h1>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <ul>
        <li v-for="user in users" :key="user.user_id">
          {{ user.name }} - {{ user.email }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ResumeDataService from "../services/ResumeDataService";

export default {
  name: "UsersList",
  data() {
    return {
      users: [],  // Array to store users
      loading: true,  // Loading state
    };
  },
  mounted() {
    // Fetch users when the component is mounted
    ResumeDataService.getAllUsers()
      .then((response) => {
        this.users = response.data;  // Assign data to users array
        this.loading = false;  // Turn off loading state
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        this.loading = false;
      });
  },
};
</script>

<style scoped>
h1 {
  font-size: 24px;
  margin-bottom: 20px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  padding: 8px 0;
}
</style>