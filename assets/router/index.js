import VueRouter from 'vue-router'

import Dashboard from "../views/Dashboard";
import Home from "../views/Home";
import Login from "../views/Login";
import Register from "../views/Register";

// const routes = [
//     {
//         path: '/',
//         name: 'home',
//         // component: Home
//         component: () => import(/* webpackChunkName: "about" */ '../views/Home')
//     },
//     {
//         path: '/dashboard',
//         name: 'dashboard',
//         // route level code-splitting
//         // this generates a separate chunk (about.[hash].js) for this route
//         // which is lazy-loaded when the route is visited.
//         component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard')
//     },
//
// ]

// const router = new VueRouter({
//     routes
// })

// export default router

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
    ]

})