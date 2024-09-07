import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import { BootstrapVue3 as BootstrapVue } from 'bootstrap-vue-3'

// Make BootstrapVue available throughout your project
const app = createApp(App)
app.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin

app.use(router)

app.mount('#app')