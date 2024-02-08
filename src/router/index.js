import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      children: [
        {
          path: 'carts',
          name: 'carts',
          component: () => import('../views/CartsView.vue'),
        },
      ]
    },
  ],
});

export default router;
