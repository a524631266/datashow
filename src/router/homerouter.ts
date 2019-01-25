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
      path: '/home',
      name: 'home',
      component: () => import(/* webpackChunkName: "group-home" */ '@/views/Home.vue'),
      // component: (resolve) => require(['@/views/Home.vue'],resolve),
      children: [{
        path: "/home/:entity",// 动态路由根据params更改路由组件
        name: "node",
        component: () => import(/* webpackChunkName: "group-home1" */ '@/views/Main.vue'),
        // component: (resolve) => require(['@/views/Main.vue'],resolve),
        meta: {
          id: 0,
          name : "",
          level : 0,
        },
      }]
    },
  ],
});
