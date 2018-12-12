import Vue from 'vue';
import store from './store';
import LittleBar from './components/chart/LittleBar.vue';
Vue.config.productionTip = false;
new Vue({
    // router,
    store,
    render: (h) => h(LittleBar),
}).$mount('#app');
//# sourceMappingURL=main.js.map