import { createRouter, createWebHistory } from 'vue-router';

import ProductsList from './components/products/ProductsList.vue';
import UserCart from './components/cartelements/UserCart.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/products' },
    { path : '/products', component: ProductsList},
    { path: '/products', component: ProductsList },
    { path: '/cart', component: UserCart },
  ]
});

export default router;