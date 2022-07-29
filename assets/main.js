import Vue from 'vue';
import VueRouter, {createWebHistory, useRouter} from "vue-router";
import App from "./App";

Vue.use(useRouter, createWebHistory)


import router from "./router";

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})