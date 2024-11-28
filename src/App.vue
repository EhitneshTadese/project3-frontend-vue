<template>
    <v-app>
      <v-app-bar v-if="!isLoginPage">
            <v-btn @click="goCreateResume">
               
                <v-img
                    class="mx-2"
                    :src="logo"
                    max-height="90"
                    max-width="90"
                    contain
                ></v-img>
            </v-btn>
            <v-app-bar-title>Resume Builder</v-app-bar-title>
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

  data: () => {
    console.log('Logo loaded:', logo);
    return {
      logo,
    };
  },
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
      this.$router.push({ name: 'templates' });
    },
    goCreateResume() {
      this.$router.push({ name: 'createresume'});
    },
    goAccount() {
      this.$router.push({ name: 'account' });
    }
  },

}
</script>

