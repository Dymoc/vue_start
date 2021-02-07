import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/CatalogMan',
    name: 'CatalogMan',
    component: () => import(/* webpackChunkName: "start" */ '../views/CatalogMan.vue'),
  },
  {
    path: '/Checkout',
    name: 'Checkout',
    component: () => import(/* webpackChunkName: "start" */ '../views/Checkout.vue'),
  },
  {
    path: '/ShopingCart',
    name: 'ShopingCart',
    component: () => import(/* webpackChunkName: "start" */ '../views/ShopingCart.vue'),
  },
  {
    path: '/SinglePage/:id',
    name: 'SinglePage',
    component: () => import(/* webpackChunkName: "start" */ '../views/SinglePage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
