<template>
    <v-app>
      <v-app-bar v-if="!isLoginPage">
            <v-img
                class="mx-2"
                :src="logo"
                max-height="40"
                max-width="40"
                contain
            ></v-img>
            <v-app-bar-title  >Resume Management Application</v-app-bar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn 
                    variant="text"
                    @click="goList"
                    >
                  Resume List
                </v-btn>
                <v-btn 
                    variant="text"
                    @click="goAccount"
                    >

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
import logo from './assets/oc-logo-white.png'
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
      this.$router.push({ name: 'create_resume' });
    },
    goList() {

    }
  },

}
</script>

