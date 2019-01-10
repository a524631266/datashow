import Vue from 'vue';
import '@/app/index.ts'; // 导入并动态载入antd中的message
import router from '@/router';
import store from '@/store';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "font-awesome/css/font-awesome.min.css";
import App from './App.vue';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'material-design-lite/material.min.css';
import 'material-design-lite/material.min.js';
import 'material-design-icons/iconfont/material-icons.css';
moment.locale('zh-cn');
console.log("是否为本地",process.env.NODE_ENV);
Vue.config.productionTip = false;

export const appVue = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

