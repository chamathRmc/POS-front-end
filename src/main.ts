import { createApp } from 'vue'
import './style.css'
import App from './App.vue';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import router from './router/router';
import 'primeicons/primeicons.css'
import store from './store/module';

const app = createApp(App)
app.use(PrimeVue);
app.use(router);
app.use(store);
app.mount('#app');