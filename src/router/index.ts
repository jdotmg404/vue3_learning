import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/basic',
      name: 'basic',
      component: () => import('@/views/BasicView.vue'),
      children: [
        {
          path: 'start',
          name: 'start',
          meta: {
            title: '开始页面',
          },
          component: () => import('@/views/basic/StartView.vue'),
        },
        {
          path: 'template',
          name: 'template',
          meta: {
            title: '模板语法',
          },
          component: () => import('@/views/basic/TemplateView.vue'),
        },
        {
          path: 'responsiveBasics',
          name: 'responsiveBasics',
          meta: {
            title: '响应式基础',
          },
          component: () => import('@/views/basic/ResponsiveBasicsView.vue'),
        },
        {
          path: 'computedAttr',
          name: 'computedAttr',
          meta: {
            title: '计算属性',
          },
          component: () => import('@/views/basic/ComputedAttrView.vue'),
        },
        {
          path: 'bind',
          name: 'bind',
          meta: {
            title: 'Class 与 Style绑定',
          },
          component: () => import('@/views/basic/BindView.vue'),
        },
        {
          path: 'conditionRender',
          name: 'conditionRender',
          meta: {
            title: '条件渲染',
          },
          component: () => import('@/views/basic/ConditionRenderView.vue'),
        },
        {
          path: 'listRender',
          name: 'listRender',
          meta: {
            title: '列表渲染',
          },
          component: () => import('@/views/basic/ListRenderView.vue'),
        },
        {
          path: 'eventHandle',
          name: 'eventHandle',
          meta: {
            title: '事件处理',
          },
          component: () => import('@/views/basic/EventHandleView.vue'),
        },
        {
          path: 'formInputBind',
          name: 'formInputBind',
          meta: {
            title: '表单输入绑定',
          },
          component: () => import('@/views/basic/FormInputBindView.vue'),
        },
        {
          path: 'listener',
          name: 'listener',
          meta: {
            title: '监听器',
          },
          component: () => import('@/views/basic/ListenerView.vue'),
        },
        {
          path: 'templateReference',
          name: 'templateReference',
          meta: {
            title: '模板引用',
          },
          component: () => import('@/views/basic/TemplateReferenceView.vue'),
        },
        {
          path: 'component',
          name: 'component',
          meta: {
            title: '组件基础',
          },
          component: () => import('@/views/basic/ComponentView.vue'),
        },
        {
          path: 'lifeStyle',
          name: 'lifeStyle',
          meta: {
            title: '生命周期',
          },
          component: () => import('@/views/basic/LifeStyleView.vue'),
        },
      ],
    },

    {
      path: '/componentDeepLearning',
      name: 'componentDeepLearning',
      // component: {
      //   render: () => h(RouterView),
      // },
      // redirect: '/componentDeepLearning/register',
      component: () => import('@/views/ComponentDeepLearningView.vue'),
      children: [
        {
          path: 'register',
          name: 'register',
          meta: {
            title: '注册',
          },
          component: () => import('@/views/component-deep-learning/register/IndexView.vue'),
        },
        {
          path: 'props',
          name: 'props',
          meta: {
            title: 'props',
          },
          component: () => import('@/views/component-deep-learning/props/IndexView.vue'),
        },
        {
          path: 'event',
          name: 'event',
          meta: {
            title: '事件',
          },
          component: () => import('@/views/component-deep-learning/event/IndexView.vue'),
        },
        {
          path: 'componentVModel',
          name: 'componentVModel',
          meta: {
            title: '组件 v-model',
          },
          component: () => import('@/views/component-deep-learning/component-v-model/IndexView.vue'),
        },
      ],
    },
  ],
})

export default router
