import Vue from 'vue';
import Router from 'vue-router';
import About from '@/components/about/About';
import Home from '@/components/post/Home';
import Nested1 from '@/components/about/Nested1';
import Nested2 from '@/components/about/Nested2';

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
      path: '/about',
      name: 'About',
      component: About,
      children: [
        {
          path: 'nested1',
          component: Nested1,
        },
        {
          path: 'nested2',
          component: Nested2,
        },
      ],
    },
  ],
});
