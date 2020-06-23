import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@/pages/login';
import Dashboard from '@/pages/dashboard';
import Home from '@/pages/home';
import AuthorityRoutes from './route-authority';

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    redirect: 'login',
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    redirect: '/home/authority',
    children: [
      // Authority Management
      AuthorityRoutes,
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '*',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '@/pages/404.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
