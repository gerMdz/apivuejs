import { createRouter, createWebHistory } from 'vue-router'
// import Home from "../views/Home";


const routes = [
    {
        path: '/',
        name: 'home',
        // component: Home
        component: () => import(/* webpackChunkName: "about" */ '../views/Home')
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard')
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router