<script setup lang="ts">
defineProps({
  // disabled 将被转换为 true
  disabledA: [Boolean, Number],
  // disabled 将被转换为 true
  disabledB: [Boolean, String],
  // disabled 将被转换为 true
  disabledC: [Number, Boolean],
  // disabled 将被解析为空字符串 (disabled="")
  disabledD: [String, Boolean],
})
</script>

<template>
  <div>
    <ElButton :disabled="!!disabledA">按钮</ElButton>
    <ElButton :disabled="!!disabledB">按钮</ElButton>
    <ElButton :disabled="!!disabledC">按钮</ElButton>
    <ElButton :disabled="!!disabledD">按钮</ElButton>
  </div>
</template>

<style scoped></style>
