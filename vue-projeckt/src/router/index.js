import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
// import Start from '../views/Start.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // {
  //   path: '/CatalogMan',
  //   name: 'CatalogMan',
  //   component: CatalogMan,
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
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
    path: '/SinglePage',
    name: 'SinglePage',
    component: () => import(/* webpackChunkName: "start" */ '../views/SinglePage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
