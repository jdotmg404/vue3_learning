<script setup lang="ts">
import MarkdownComponent from '@/views/components/MarkdownComponent.vue'
import exampleMD from './markdown/example.md?raw'
import { ref } from 'vue'
import ResponsiveComponent from '@/views/component-deep-learning/props/components/ResponsiveComponent.vue'
import mockjs from 'mockjs'
const props = ref({
  count: 0,
  message: 'hello world',
})
const definitionText = ref(exampleMD)

const changeCount = () => {
  props.value.count = mockjs.Random.integer(0, 100)
  props.value.message = mockjs.Random.cword(5, 10)
}
</script>

<template>
  <div>
    <h1>Props</h1>
    <h2>1-Props声明</h2>
    <div>
      <MarkdownComponent :markdown="definitionText" />
    </div>

    <h2>2-响应式解构</h2>
    <div>
      <ResponsiveComponent :count="props.count" :message="props.message"></ResponsiveComponent>
      <!-- 等价于<ResponsiveComponent v-bind="props"></ResponsiveComponent> -->
      <ElButton @click="changeCount">点击修改count</ElButton>
    </div>

    <h2>3-传递prop细节</h2>
  </div>
</template>

<style scoped></style>
