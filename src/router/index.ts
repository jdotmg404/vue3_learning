import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'start',
      component: () => import('../views/StartView.vue'),
    },
    {
      path: '/template',
      name: 'template',
      component: () => import('../views/TemplateView.vue'),
    },
    {
      path: '/responsiveBasics',
      name: 'responsiveBasics',
      component: () => import('../views/ResponsiveBasicsView.vue'),
    },
    {
      path: '/computedAttr',
      name: 'computedAttr',
      component: () => import('../views/ComputedAttrView.vue'),
    },
  ],
})

export default router
