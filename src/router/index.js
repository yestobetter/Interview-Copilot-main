// router.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Settings from '../views/Settings.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/setting',
    component: Settings
  },
];

const router = new VueRouter({
  mode: 'history', // This enables history mode
  base: '/', // Adjust the base to match your deployment environment
  routes
});

export default router;
