import { createApp } from 'vue';
import { createPinia } from 'pinia';

// 其他套件
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
// 其他套件
app.use(VueAxios, axios);

app.mount('#app');
