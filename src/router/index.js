import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Signin from '../views/Signin.vue'
import Login from '../views/Login.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/signin',
        name: '/signin',
        component: Signin
    },
    {
        path: '/login',
        name: '/login',
        component: Login
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;