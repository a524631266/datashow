import Vue from 'vue';
import Router from 'vue-router';
// import App from './App.vue';
// import ChartPanel from '@/views/ChartPanel.vue';
Vue.use(Router);
export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import(/* webpackChunkName: "group-login" */ '@/views/Login.vue'),
      // component: (resolve) => require(['@/views/Login.vue'],resolve),
    },
  ],
});
