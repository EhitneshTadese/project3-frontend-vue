import { createWebHistory, createRouter } from "vue-router";
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
    path: "/myresume",
    name: "resumes",
    component: () => import("./views/ResumeList.vue"),
    props: true
  },
{
  path: "/resumes/edit/:id",
  name: "edit-resume",
  component: () => import("./views/EditResume.vue"),
  props: true,
},


{
    path: "/userlist",
    name: "listing",
    component: () => import("./views/UsersList.vue"),
    props: true
  },

  {
    path: "/all-resumes",
    name: "all-resumes",
    component: () => import("./views/yourResume.vue")
  },
  {
    path: "/check-ai",
    name: "check-ai",
    component: () => import("./views/checkAI.vue")
  },
  {
    path: "/upload-resume",
    name: "upload-resume",
    component: () => import("./views/uploadResume.vue")
  },
  {
    path: "/home",
    name: "home",
    component: () => import("./views/home.vue")
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
    path: '/resume/:id',
    name: 'resume-view',
    component: () => import('./views/ResumeView.vue')
  }
  
];
const router = createRouter({
  base: process.env.NODE_ENV === 'development' ? '/' : '/tutorial-frontend-1/',
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;