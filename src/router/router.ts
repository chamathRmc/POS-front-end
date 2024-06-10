import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      const token = localStorage.getItem('token');
      if (!token) {
        next({ name: 'login' });
      } else {
        next();
      }
    } else {
      next();
    }
  });
export default router;