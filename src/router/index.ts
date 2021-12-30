import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Setup from '../views/Setup/Setup.vue';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About/About.vue'),
    meta: {
      title: 'About'
    }
  },
  {
    path: '/setup',
    name: 'Setup',
    component: () => import('@/views/Setup/Setup.vue'),
    meta: {
      title: 'Setup'
    }
  },
  {
    path: '/tailwind',
    name: 'Tailwind',
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/Tailwind/Tailwind.vue'),
    meta: {
      title: 'Test Tailwind'
    }
  },
  {
    path: '/lifeCycle',
    name: 'LifeCycle',
    component: () =>
      import(
        /* webpackChunkName: "life-cycle" */ '@/views/LifeCycle/LifeCycle.vue'
      ),
    meta: {
      title: 'Life Cycle'
    }
  },
  {
    path: '/inputTest',
    name: 'InputTest',
    component: () =>
      import(
        /* webpackChunkName: "input-test" */ '@/views/InputTest/InputTest.vue'
      ),
    meta: {
      title: 'Input Test'
    }
  },
  {
    path: '/compositionApi',
    name: 'CompositionApi',
    component: () =>
      import(
        /* webpackChunkName: "composition-api" */ '@/views/CompositionApi/CompositionApi.vue'
      ),
    props: () => ({ testProp: 'testProp' }),
    meta: {
      title: 'Composition Api'
    }
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export { routes };

export default router;
