import './assets/all.scss';
import 'bootstrap/dist/js/bootstrap.bundle';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

// 基本套件
import axios from 'axios';
import VueAxios from 'vue-axios';
// 額外套件
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate';
import * as AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTw from '@vee-validate/i18n/dist/locale/zh_TW.json';
import { LoadingPlugin } from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import App from './App.vue';
import router from './router';

// 加入所有 vee-validate 規則
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});
// VeeValidate 的語系設定為繁體中文
configure({
  generateMessage: localize({ zh_TW: zhTw }),
  validateOnInput: true,
});
setLocale('zh_TW');

const app = createApp(App);

app.use(createPinia());
app.use(router);
// 基本套件
app.use(VueAxios, axios);
// 額外套件
app.component('VForm', Form);
app.component('VField', Field);
app.component('ErrorMessage', ErrorMessage);
app.use(LoadingPlugin);

app.mount('#app');
