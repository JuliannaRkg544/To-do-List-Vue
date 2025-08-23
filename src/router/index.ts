import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Signin from "../views/Signin.vue";
import Login from "../views/Login.vue";
import Create from "../views/Create.vue";
import Update from "../views/Update.vue";


// Tipagem explícita para as rotas
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/task-create",
    name: "Create",
    component: Create,
  },
  {
    path: "/task-update/:id",
    name: "Update",
    component: Update,
    props: true, // permite acessar `id` como prop dentro do componente
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
