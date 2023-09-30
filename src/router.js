import { createRouter, createWebHistory } from 'vue-router';

import Registration from "./components/Registration.vue";
import Login from "./components/Login.vue";
import Dashboard from "./components/Dashboard.vue";
import {authStore} from './store/store.js';

const routes = [
    {
      path: '/register',
      component: Registration,
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/dashboard',
      component: Dashboard,
      meta:{requiredAuth: true}
    }
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  router.beforeEach((to,from,next) => {
    const auth = authStore();
      if(to.meta.requiredAuth && !auth.isAuthenticated) {
        next('/');
      }else{
        next();
      }
  })
  
  export default router;