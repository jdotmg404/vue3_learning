<script setup lang="ts">
// 声明组件触发的事件（推荐方式：带类型检查）
const emit = defineEmits<{
  // 单个参数
  increaseBy: [n: number]
  // 多个参数
  increaseMulti: [a: number, b: number, c: number]
  // 无参数
  reset: []
}>()

const handleSingle = () => {
  emit('increaseBy', 1)
}

const handleMulti = () => {
  emit('increaseMulti', 1, 2, 3)
}

const handleReset = () => {
  emit('reset')
}
</script>

<template>
  <div>
    <ElButton @click="handleSingle">点击，传1个参数</ElButton>
    <ElButton @click="handleMulti">点击，传3个参数</ElButton>
    <ElButton @click="handleReset">重置（无参数）</ElButton>
  </div>
</template>

<style scoped></style>
