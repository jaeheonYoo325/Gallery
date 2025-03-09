import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.js';
import { createApp } from 'vue';
import App from './App.vue';
import store from '@/scripts/store';
import router from '@/scripts/router';

createApp(App).use(store).use(router).mount('#app');
