import Vue from 'vue';
import VueRouter, {createWebHistory, useRouter, Router} from "vue-router";
import Home from "../views/Home";


Vue.use(useRouter, createWebHistory, router)

const router = new RouterLink([
    {
        path:'/',
        component: Home,
        name: 'Home'
    }
])

export default router;