import Vue from 'vue';
import './app/index'; // 导入并动态载入antd中的message
import router from '@/router';
import store from '@/store';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "font-awesome/css/font-awesome.min.css";
import App from './App.vue';
console.log("是否为本地",process.env.NODE_ENV);
Vue.config.productionTip = false;

export const appVue = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

