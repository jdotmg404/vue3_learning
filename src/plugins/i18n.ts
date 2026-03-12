// plugin.ts
import type { App } from 'vue'

export interface TranslateOptions {
  [key: string]: any // 或者定义更具体的结构，如 Record<string, any>
}

// 扩充类型声明，让组件内调用时不报错
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $translate: (key: string) => any
  }
}

export default {
  install: (app: App, options: TranslateOptions): void => {
    app.config.globalProperties.$translate = (key: string): any => {
      return key.split('.').reduce((o, i) => {
        if (o) return o[i]
      }, options)
    }
  },
}
