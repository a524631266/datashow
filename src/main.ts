import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
import store from '@/store';
// import '@/iview';
import Home from './views/Home.vue';
import LittleBar from './components/chart/LittleBar.vue';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "font-awesome/css/font-awesome.min.css";
import Dynamic from "./testDynamic/Dynamic.vue";
// import { Button, message } from 'ant-design-vue';


console.log("是否为本地",process.env.NODE_ENV);
Vue.config.productionTip = false;

export const appVue = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');


