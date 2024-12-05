```src/views/Account.vue
<template>
    <div class="account-page">
        <v-card class="mx-auto" max-width="800">
            <!-- User Profile Section -->
            <v-card-title class="text-h5">
                Account Settings
            </v-card-title>

            <!-- User Information -->
            <v-card-text>
                <v-form>
                    <v-text-field
                        v-model="firstName"
                        label="First Name"
                        variant="outlined"
                        class="mb-2"
                    ></v-text-field>
                    
                    <v-text-field
                        v-model="lastName"
                        label="Last Name"
                        variant="outlined"
                        class="mb-2"
                    ></v-text-field>
                    
                    <v-text-field
                        v-model="email"
                        label="Email"
                        variant="outlined"
                        class="mb-2"
                    ></v-text-field>

                    <v-btn
                        color="primary"
                        class="mt-4"
                        @click="updateProfile"
                    >
                        Update Profile
                    </v-btn>
                </v-form>
            </v-card-text>

            <v-divider></v-divider>

            <!-- Logout Section -->
            <v-card-actions class="logout-section">
                <v-spacer></v-spacer>
                <v-btn
                    color="error"
                    variant="elevated"
                    size="large"
                    @click="confirmLogout"
                >
                    <v-icon left>mdi-logout</v-icon>
                    Logout
                </v-btn>
            </v-card-actions>
        </v-card>

        <!-- Logout Confirmation Dialog -->
        <v-dialog v-model="showLogoutDialog" max-width="400">
            <v-card>
                <v-card-title class="text-h5">
                    Confirm Logout
                </v-card-title>
                <v-card-text>
                    Are you sure you want to logout?
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="grey-darken-1"
                        variant="text"
                        @click="showLogoutDialog = false"
                    >
                        Cancel
                    </v-btn>
                    <v-btn
                        color="error"
                        variant="elevated"
                        @click="logout"
                    >
                        Logout
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    name: 'Account',
    data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            showLogoutDialog: false
        }
    },
    methods: {
        updateProfile() {
            // Implement profile update logic
            console.log('Updating profile...')
        },
        confirmLogout() {
            this.showLogoutDialog = true
        },
        logout() {
            // Clear user data
            localStorage.removeItem('user')
            localStorage.removeItem('token')
            
            // Close the dialog
            this.showLogoutDialog = false
            
            // Redirect to login page
            this.$router.push({ name: 'login' })
        }
    },
    mounted() {
        // Load user data when component mounts
        const userData = JSON.parse(localStorage.getItem('user') || '{}')
        this.firstName = userData.firstName || ''
        this.lastName = userData.lastName || ''
        this.email = userData.email || ''
    }
}
</script>

<style scoped>
.account-page {
    padding: 20px;
}
.logout-section {
    padding: 16px;
}
</style>
  