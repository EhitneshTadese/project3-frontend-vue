<template>
    <v-app>
      <v-app-bar v-if="!isLoginPage">
            <v-img
                class="mx-2"
                :src="logo"
                max-height="90"
                max-width="90"
                contain
            ></v-img>
            <v-app-bar-title  >Resume Management Application</v-app-bar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn 
                    variant="text"
                    @click="goTemplates"
                    >
                  Templates
                </v-btn>
                <v-btn 
                    variant="text"
                    @click="goAccount"
                    >
                  <v-icon left>mdi-account</v-icon>
                  Account
                </v-btn>
            </v-toolbar-items>
      </v-app-bar>
      <v-main >
        <v-container>
          <router-view />
        </v-container>
      </v-main>  
    </v-app>
</template>

<script>
import logo from './assets/e3.gif'
export default {
  name: 'App',

  data: () => ({
    logo,
  }),
  computed: {
    isLoginPage() {
      return this.$route.name === 'login';
    },
  },
  methods: {
    goAdd() {
      this.$router.push({ name: 'add' });
    },
    goTemplates() {
      this.$router.push({ name: 'tutorials' });
    },
    goAccount() {
      this.$router.push({ name: 'account' });
    }
  },

}
</script>

