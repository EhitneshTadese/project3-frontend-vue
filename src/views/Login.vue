<template>
  <div class="v-container v-locale--is-ltr">
    <div class="login-page">
      <h1>Resume Builder</h1>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <div class="button-group">
          <button type="submit" class="login-btn">Login</button>
          <button type="button" class="google-btn" @click="googleLogin">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" class="google-icon" />
            Sign in with Google
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      if (this.username && this.password) {
        console.log("Logging in with:", this.username, this.password);
        // Simulate a successful login response with user data
        const userData = {
          firstName: 'John', // Replace with actual data from Google
          lastName: 'Doe',   // Replace with actual data from Google
          email: 'john.doe@example.com' // Replace with actual data from Google
        };
        localStorage.setItem('user', JSON.stringify(userData)); // Store user data in localStorage
        this.$router.push({ name: 'account' }); // Redirect to account page
      } else {
        console.error("Please enter both username and password.");
      }
    },
    googleLogin() {
      const googleAuthUrl = 'http://localhost:3000/auth/google'; // Ensure this matches your backend URL
      window.location.href = googleAuthUrl; // Redirect to Google OAuth
    },
  },
};
</script>

<style scoped>
.v-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
}

.login-page {
  font-family: Arial, sans-serif;
  text-align: center;
  width: 400px;
  background-color: #ffffff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
  text-align: left;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 14px;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

.button-group {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.login-btn {
  background-color: #4CAF50;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.login-btn:hover {
  background-color: #45a049;
}

.google-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.google-btn:hover {
  background-color: #f0f0f0;
}

.google-icon {
  width: 20px;
  height: 20px;
  margin-right: 8px;
}
</style>