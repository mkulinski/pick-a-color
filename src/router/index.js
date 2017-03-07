import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Boo from '@/components/Boo';
import Home from '@/components/Home';
import Test1 from '@/components/Test1';
import Test2 from '@/components/Test2';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/boo',
      name: 'Boo',
      component: Boo,
      children: [
        {
          path: 'test1',
          component: Test1,
        },
        {
          path: 'test2',
          component: Test2,
        },
      ],
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello,
    },
  ],
});
