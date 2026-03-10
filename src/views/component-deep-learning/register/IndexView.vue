<script setup lang="ts">
import { ref } from 'vue'
import MyComponent from '@/views/components/MyComponent.vue'
import MarkdownComponent from '@/views/components/MarkdownComponent.vue'
// 使用 ?raw 后缀导入 markdown 文件内容为字符串
import exampleMD from './markdown/example.md?raw'

const text = ref('复制这段文本到剪贴板')
const markdownText = ref(exampleMD)
</script>

<template>
  <div>
    <h1>组件注册</h1>
    <h2>1-全局注册</h2>
    <div>
      <CopyText :text="text" success-msg="已复制">
        <ElButton>点击复制</ElButton>
      </CopyText>
    </div>
    <br />
    <h2>2-局部注册</h2>
    <div>
      <MyComponent></MyComponent>
    </div>
    <br />
    <p>注意：</p>
    <p>1. 全局注册的组件，项目内所有组件都可以使用，但是即使未被使用，也会被打包进项目</p>
    <p>2. 局部注册的组件，只能在当前组件内使用，不使用的组件，不会被打包进项目</p>

    <h2>3-组件命名格式</h2>
    <div>
      <MarkdownComponent :markdown="markdownText"></MarkdownComponent>
    </div>
  </div>
</template>

<style scoped></style>
