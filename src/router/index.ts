import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/basic',
      name: 'basic',
      meta: {
        title: '基础',
      },
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
      meta: {
        title: '深入组件',
      },
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
          component: () =>
            import('@/views/component-deep-learning/component-v-model/IndexView.vue'),
        },
        {
          path: 'attr',
          name: 'attr',
          meta: {
            title: '透传 Attributes',
          },
          component: () => import('@/views/component-deep-learning/attr/IndexView.vue'),
        },
        {
          path: 'slot',
          name: 'slot',
          meta: {
            title: '插槽 Slots',
          },
          component: () => import('@/views/component-deep-learning/slots/IndexView.vue'),
        },
        {
          path: 'dependencyInjection',
          name: 'dependencyInjection',
          meta: {
            title: '依赖注入',
          },
          component: () =>
            import('@/views/component-deep-learning/dependency-injection/IndexView.vue'),
        },
        {
          path: 'async',
          name: 'async',
          meta: {
            title: '异步组件',
          },
          component: () => import('@/views/component-deep-learning/async/IndexView.vue'),
        },
      ],
    },
    {
      path: '/logicReuse',
      name: 'logicReuse',
      meta: {
        title: '逻辑复用',
      },
      component: () => import('@/views/LogicReuseView.vue'),
      children: [
        {
          path: 'combFunc',
          name: 'combFunc',
          meta: {
            title: '组合式函数',
          },
          component: () => import('@/views/logic-reuse/comb-func/IndexView.vue'),
        },
        {
          path: 'customDirective',
          name: 'customDirective',
          meta: {
            title: '自定义指令',
          },
          component: () => import('@/views/logic-reuse/custom-directive/IndexView.vue'),
        },
        {
          path: 'plugin',
          name: 'plugin',
          meta: {
            title: '插件',
          },
          component: () => import('@/views/logic-reuse/plugin/IndexView.vue'),
        },
      ],
    },
    {
      path: '/builtInComp',
      name: 'builtInComp',
      meta: {
        title: '内置组件',
      },
      component: () => import('@/views/BuiltInCompView.vue'),
      children: [
        {
          path: 'transition',
          name: 'transition',
          meta: {
            title: 'Transition',
          },
          component: () => import('@/views/built-in-comp/transition/IndexView.vue'),
        },
        {
          path: 'transitionGroup',
          name: 'transitionGroup',
          meta: {
            title: 'TransitionGroup',
          },
          component: () => import('@/views/built-in-comp/transition-group/IndexView.vue'),
        },
      ],
    },
  ],
})

export default router
