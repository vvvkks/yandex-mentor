import { createApp } from 'vue';
import App from "@/App.vue";
import router from "@/routes";
import './assets/main.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'

createApp(App)
    .use(router)
    .mount('#app');
