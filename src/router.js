import { createWebHistory, createRouter } from "vue-router";
import { components } from "vuetify/dist/vuetify-labs.js";
const routes =  [
  {
    path: "/",
    name: "login",
    component: () => import("./views/Login.vue")
  },
  {
    path: "/create-resume",
    name: "createresume",
    component: () => import("./views/CreateResume.vue")
  },
  {
    path: "/edit/:id",
    name: "edit",
    component: () => import("./views/EditTutorial.vue"),
    props: true
  },
 
  {
    path: "/view",
    name: "view",
    component: () => import("./views/ViewTutorial.vue"),
    props: true
  },
  {
    path: "/addLesson",
    name: "addLesson",
    component: () => import("./views/AddLesson.vue"),
    props: true
  },
  
  {
    path: "/editLesson",
    name: "editLesson",
    component: () => import("./views/EditLesson.vue"),
    props: true
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