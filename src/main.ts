import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
import store from '@/store';
import Home from './views/Home.vue';
import LittleBar from './components/chart/LittleBar.vue';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "font-awesome/css/font-awesome.min.css";
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
