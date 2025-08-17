import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Signin from "../views/Signin.vue";
import Login from "../views/Login.vue";
import Create from "../views/Create.vue";
import Update from "../views/Update.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/signin",
    name: "/signin",
    component: Signin,
  },
  {
    path: "/login",
    name: "/login",
    component: Login,
  },
  {
    path: "/task-create",
    name: "/create",
    component: Create,
  },
  {
    path: "/task-update/:id",
    name: "/update",
    component: Update,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
