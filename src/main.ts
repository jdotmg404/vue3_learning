import './assets/main.css'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(ElementPlus)

app.use(createPinia())
app.use(router)

app.mount('#app')

/*
// 一个应用级的错误处理器，用来捕获所有子组件上的错误
app.config.errorHandler = (err) => {
  console.log(`全局捕获错误：`, err)
}*/
