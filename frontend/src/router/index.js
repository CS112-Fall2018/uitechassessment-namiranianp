import Vue from 'vue';
import Router from 'vue-router';
import CartView from '@/components/CartView';
import AddItems from '@/components/AddItems';
import Homepage from '@/components/Homepage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'Homepage',
      },
    },
    {
      path: '/',
      name: 'Homepage',
      component: Homepage,
    },
    {
      path: '/viewCart',
      name: 'CartView',
      component: CartView,
    },
    {
      path: '/addItems',
      name: 'AddItems',
      component: AddItems,
    },
  ],
});
