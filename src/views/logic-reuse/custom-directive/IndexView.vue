<script setup lang="ts">
import { ref } from 'vue'
import { randomHexColor } from '@/utils/color.ts'
import DirectiveHookMd from './markdown/directive-hook.md?raw'
import MarkdownComponent from '@/views/components/MarkdownComponent.vue'

const dynamicColor = ref(randomHexColor())

const changeColor = () => {
  dynamicColor.value = randomHexColor()
}
</script>

<template>
  <div>
    <h1>自定义指令</h1>

    <h2>1-示例：高亮v-highlight</h2>
    <div>
      <!-- 基础用法：默认黄色 -->
      <p v-highlight>这是一段普通高亮的文字</p>

      <!-- 传值用法：自定义颜色 -->
      <p v-highlight="'#00ff00'">这是一段绿色高亮的文字</p>

      <!-- 修饰符用法：高亮并加粗 -->
      <p v-highlight.bold="'cyan'">这是一段青色且加粗的高亮文字</p>

      <!-- 响应式绑定 -->
      <p v-highlight="dynamicColor">颜色随变量改变</p>

      <ElButton @click="changeColor">改变颜色</ElButton>
    </div>

    <h2>2-指令钩子</h2>
    <div>
      <MarkdownComponent :markdown="DirectiveHookMd"></MarkdownComponent>
    </div>
    <br />

    <h2>2-拓展</h2>
    <div>
      更多内容请查看：
      <a href="https://cn.vuejs.org/guide/reusability/custom-directives.html">自定义指令</a>
    </div>
  </div>
</template>

<style scoped></style>
