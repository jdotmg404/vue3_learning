import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'start',
      component: () => import('@/views/StartView.vue'),
    },
    {
      path: '/template',
      name: 'template',
      component: () => import('@/views/TemplateView.vue'),
    },
    {
      path: '/responsiveBasics',
      name: 'responsiveBasics',
      component: () => import('@/views/ResponsiveBasicsView.vue'),
    },
    {
      path: '/computedAttr',
      name: 'computedAttr',
      component: () => import('@/views/ComputedAttrView.vue'),
    },
    {
      path: '/bind',
      name: 'bind',
      component: () => import('@/views/BindView.vue'),
    },
    {
      path: '/conditionRender',
      name: 'conditionRender',
      component: () => import('@/views/ConditionRenderView.vue'),
    },
    {
      path: '/listRender',
      name: 'listRender',
      component: () => import('@/views/ListRenderView.vue'),
    },
    {
      path: '/eventHandle',
      name: 'eventHandle',
      component: () => import('@/views/EventHandleView.vue'),
    },
    {
      path: '/formInputBind',
      name: 'formInputBind',
      component: () => import('@/views/FormInputBindView.vue'),
    },
    {
      path: '/listener',
      name: 'listener',
      component: () => import('@/views/ListenerView.vue'),
    },
    {
      path: '/templateReference',
      name: 'templateReference',
      component: () => import('@/views/TemplateReferenceView.vue'),
    },
    {
      path: '/component',
      name: 'component',
      component: () => import('@/views/ComponentView.vue'),
    },
    {
      path: '/lifeStyle',
      name: 'lifeStyle',
      component: () => import('@/views/LifeStyleView.vue'),
    },
  ],
})

export default router
