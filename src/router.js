import { createWebHistory, createRouter } from "vue-router";
import { components } from "vuetify/dist/vuetify-labs.js";
const routes =  [
  {
    path: "/",
    name: "login",
    component: () => import("./views/Login.vue")
  },
  {
    path: "/CreateResume",
    name: "createresume",
    component: () => import("./views/CreateResume.vue")
  },
  
 
  {
    path: "/account",
    name: "account",
    component: () => import("./views/Account.vue"),
    props: true
  },
  {
    path: "/templates",
    name: "templates",
    component: () => import ("./views/Templates.vue"),
    props: true
  }
];
const router = createRouter({
  base: process.env.NODE_ENV === 'development' ? '/' : '/tutorial-frontend-1/',
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;