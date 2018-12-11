import Vue from 'vue';
import store from './store';
import Home from './views/Home.vue';
Vue.config.productionTip = false;
new Vue({
    // router,
    store,
    render: (h) => h(Home),
}).$mount('#app');
//# sourceMappingURL=main.js.map