import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Main from './views/Main.vue';
import Login from "./views/Login.vue";
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
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue'),
    },
    {
      path: '/color',
      name: 'colorbar',
      component: ColorSelectBar,
    },
    {
      path: '/',
      name: 'app',
      redirect: "login"
      // component: () => import(/* webpackChunkName: "about" */ './views/Login.vue'),
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    // },
    {
      path: '/home',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "main" */ './views/Main.vue'),
      children: [{
        path: "/:entity",
        name: "node",
        component: () => import(/* webpackChunkName: "main" */ './views/Main.vue'),
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
