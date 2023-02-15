import { createApp } from "vue";
import { createPinia } from "pinia";

import axios from 'axios'
import VueAxios from 'vue-axios'

import App from "./App.vue";
import router from "./router";

import "./assets/all.scss"


const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueAxios, axios)
// app.component('VForm', VeeValidate.Form);
// app.component('VField', VeeValidate.Field);
// app.component('ErrorMessage', VeeValidate.ErrorMessage);
app.mount("#app");
