import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import AddWinePage from '../views/AddWinePage.vue';
import ReviewWinePage from '../views/ReviewWinePage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/addWinePage',
    name: 'add-wine-page',
    component: AddWinePage,
  },
  {
    path: '/reviewWinePage',
    name: 'review-wine-page',
    component: ReviewWinePage,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
