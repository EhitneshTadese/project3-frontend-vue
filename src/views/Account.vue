```src/views/Account.vue
<template>
    <div class="account-page">
      <div class="profile-header">
        <div class="profile-icon">RB</div>
        <button class="reset-btn">Reset</button>
        <button class="edit-btn">Edit</button>
      </div>
      
      <div class="form-group">
        <label>First Name</label>
        <div class="input-group">
          <input type="text" v-model="firstName" />
          <button class="edit-btn">Edit</button>
          <button class="update-btn">Update</button>
        </div>
      </div>
  
      <div class="form-group">
        <label>Last Name</label>
        <div class="input-group">
          <input type="text" v-model="lastName" />
          <button class="edit-btn">Edit</button>
          <button class="update-btn">Update</button>
        </div>
      </div>
  
      <div class="form-group">
        <label>Email</label>
        <div class="input-group">
          <input type="email" v-model="email" />
          <button class="edit-btn">Edit</button>
          <button class="update-btn">Update</button>
        </div>
      </div>
  
      <div class="form-group">
        <label>Address</label>
        <div class="input-group">
          <input type="text" v-model="address" />
          <button class="edit-btn">Edit</button>
          <button class="update-btn">Update</button>
        </div>
      </div>
  
      <div class="resumes-section">
        <h3>Your resumes</h3>
        <div class="resume-item" v-for="resume in resumes" :key="resume.id">
          <span>{{ resume.name }}</span>
          <button class="delete-btn" @click="deleteResume(resume.id)">Delete</button>
          <button class="preview-btn">Preview</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        resumes: [
          { id: 1, name: 'Resume 1' },
          { id: 2, name: 'Resume 2' },
          { id: 3, name: 'Resume 3' },
        ],
      };
    },
    methods: {
      deleteResume(id) {
        this.resumes = this.resumes.filter((resume) => resume.id !== id);
      },
    },
  };
  </script>
  
  <style scoped>
  .account-page {
    font-family: Arial, sans-serif;
    margin: 20px;
  }
  
  .profile-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
  }
  
  .profile-icon {
    background-color: lightgray;
    color: white;
    font-weight: bold;
    font-size: 24px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .reset-btn,
  .edit-btn {
    background-color: lightgray;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
  }
  
  .reset-btn:hover,
  .edit-btn:hover {
    background-color: gray;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .input-group {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  input {
    flex: 1;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .update-btn {
    background-color: lightgreen;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
  }
  
  .update-btn:hover {
    background-color: green;
    color: white;
  }
  
  .resumes-section {
    margin-top: 20px;
  }
  
  .resume-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  
  .delete-btn {
    background-color: lightcoral;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
  }
  
  .delete-btn:hover {
    background-color: red;
    color: white;
  }
  
  .preview-btn {
    background-color: lightblue;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
  }
  
  .preview-btn:hover {
    background-color: blue;
    color: white;
  }
  </style>
  