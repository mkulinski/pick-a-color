import Vue from 'vue';
import Router from 'vue-router';
import About from '@/components/about/About';
import Home from '@/components/post/Home';

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
    },
  ],
});
