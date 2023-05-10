import { createApp } from 'vue'
import App from './App.vue'
import i18n from "@/118n.bootstrap";
import router from "@/router";
import {VueRestrictedInputDirective} from "vue-restricted-input";

const app = createApp(App)

app.use(i18n)

app.use(router)
app.directive("mask", VueRestrictedInputDirective);

app.mount('#app')
