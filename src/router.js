import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/",
    alias: "/create-resume",
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
  }
];
const router = createRouter({
  base: process.env.NODE_ENV === 'development' ? '/' : '/tutorial-frontend-1/',
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;