import './assets/main.css'

import { createApp, defineAsyncComponent, defineComponent, h, ref } from 'vue'
import ElementPlus, { ElInput, ElMessage } from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'
import i18nPlugin, { type TranslateOptions } from './plugins/i18n'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(ElementPlus)

// 二次封装 ElInput 组件，默认宽度 200px，同时支持自定义宽度
const MyInput = defineComponent({
  name: 'MyInput',
  props: {
    // 继承 ElInput 的所有 props
    ...ElInput.props,
    // 添加自定义 width 属性
    width: {
      type: [String, Number],
      default: '200px',
    },
  },
  setup(props, { attrs, slots, expose }) {
    const elInputRef = ref<InstanceType<typeof ElInput>>()

    expose({
      focus: () => {
        elInputRef.value?.focus()
      },
      blur: () => {
        elInputRef.value?.blur()
      },
    })

    return () => {
      // 构建样式对象
      const style: Record<string, string> = {
        width: typeof props.width === 'number' ? `${props.width}px` : props.width,
        ...(attrs.style as Record<string, string>),
      }

      return h(
        ElInput,
        {
          ref: elInputRef,
          ...props,
          ...attrs,
          style,
        },
        slots,
      )
    }
  },
})

// 注册 MyInput 组件
app.component('MyInput', MyInput)

app.use(createPinia())
app.use(router)

const GlobalCopy = defineComponent({
  name: 'GlobalCopy',
  props: {
    text: { type: String, required: true },
    successMsg: { type: String, default: '复制成功！' },
  },
  setup(props, { slots }) {
    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(props.text)
        ElMessage.success(props.successMsg)
      } catch (err) {
        console.error('复制失败:', err)
      }
    }
    // 使用 Render 函数渲染 HTML
    return () =>
      h(
        'span',
        {
          onClick: handleCopy,
        },
        slots.default ? slots.default() : props.text,
      ) // 如果有插槽显示插槽，否则显示文本本身
  },
})

app.component('CopyText', GlobalCopy)

app.component(
  'LineChart',
  defineAsyncComponent(() => import('./views/components/LineChart.vue')),
)
// 注册 v-highlight 指令
app.directive('highlight', {
  mounted(el, binding) {
    // 1. 设置背景颜色（优先取传入的值，否则默认黄色）
    el.style.backgroundColor = binding.value || 'lightyellow'

    // 2. 处理修饰符（例如 v-highlight.bold） bold-加粗
    if (binding.modifiers.bold) {
      el.style.fontWeight = 'bold'
    }

    // 3. 处理其他逻辑，比如圆角
    el.style.padding = '2px 4px'
    el.style.borderRadius = '4px'
  },
  // 如果颜色是动态的，需要在更新时重新赋值
  updated(el, binding) {
    el.style.backgroundColor = binding.value || 'lightyellow'
  },
})

// 定义你的翻译字典对象
const i18nConfig: TranslateOptions = {
  greetings: {
    hello: '你好!',
  },
  button: {
    confirm: '确定',
    cancel: '取消',
  },
}

// 注册插件并传入配置
app.use(i18nPlugin, i18nConfig)

app.mount('#app')

/*
// 一个应用级的错误处理器，用来捕获所有子组件上的错误
app.config.errorHandler = (err) => {
  console.log(`全局捕获错误：`, err)
}*/
