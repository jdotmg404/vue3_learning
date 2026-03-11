<script setup lang="ts">
import { inject } from 'vue'

const { count, increment } = inject('countState')

const handleTryModify = () => {
  // ❌ 错误做法：直接修改只读属性，控制台会报警告，且修改无效
  count.value++
}

const handleCorrectModify = () => {
  // ✅ 正确做法：调用父组件提供的方法
  increment()
}
</script>

<template>
  <p>count: {{ count }}</p>
  <ElButton @click="handleTryModify">尝试直接修改 (会失败)</ElButton>
  <ElButton @click="handleCorrectModify">调用方法修改 (推荐)</ElButton>
</template>

<style scoped></style>
