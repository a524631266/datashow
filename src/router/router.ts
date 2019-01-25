import Vue from 'vue';
import Router from 'vue-router';
import ColorSelectBar from "@/components/bar/ColorSelectBar.vue";
// import App from './App.vue';
// import ChartPanel from '@/views/ChartPanel.vue';
Vue.use(Router);
export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      // component: () => import(/* webpackChunkName: "group-login" */ '@/views/Login.vue'),
      component: (resolve) => require(['@/views/Login.vue'],resolve),
    },
    {
      path: '/color',
      name: 'colorbar',
      component: ColorSelectBar,
    },
    {
      path: '/',
      name: 'app2',
      redirect: "login"
      // component: () => import(/* webpackChunkName: "about" */ '@/views/Login.vue'),
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    // },
    {
      path: '/home',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "group-home" */ '@/views/Home.vue'),
      component: (resolve) => require(['@/views/Home.vue'],resolve),
      children: [{
        path: "/home/:entity",// 动态路由根据params更改路由组件
        name: "node",
        // component: () => import(/* webpackChunkName: "group-home1" */ '@/views/Main.vue'),
        component: (resolve) => require(['@/views/Main.vue'],resolve),
        meta: {
          id: 0,
          name : "",
          level : 0,
        },
        // children: [
        //   {
        //     path: "/info/:entity",
        //     name: "entityinfo",
        //     component: ()=> import(/* webpackChunkName: "about" */ './views/EntityInfo.vue'),
        //     // props: true, // 被设置为 true，route.params 将会被设置为组件属性
        //     props: (route) => ({entity: route.query.entity,other: route.query.other}),
        //   }
        // ]
      }]
      // children: [
      //   {
      //     path: ":entity",
      //     name: "node",
      //     component: () => import(/* webpackChunkName: "about" */ './views/ChartPanel.vue')
      //   }
      // ],
    },
    // {
    //   path: "/home/:entity",
    //   name: "node",
    //   component: () => import(/* webpackChunkName: "about" */ './views/Home.vue'),
    //   meta: {
    //     id: 0,
    //     name : "",
    //     level : 0,
    //   },
    // },

  ],
});
