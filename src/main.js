import Vue from 'vue';
import router from '@/router';
import store from '@/store';
import Home from './views/Home.vue';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "font-awesome/css/font-awesome.min.css";
console.log("是否为本地", process.env.NODE_ENV);
Vue.config.productionTip = false;
export const appVue = new Vue({
    router,
    store,
    render: (h) => h(Home),
}).$mount('#app');
//# sourceMappingURL=main.js.map