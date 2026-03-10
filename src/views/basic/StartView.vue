<script setup lang="ts">
import CounterButton from '@/views/components/CounterButton.vue'
</script>

<template>
  <!--  1-开始页面  -->
  <div class="content-container">
    <h1>开始页面</h1>
    <p>欢迎来到 Vue3 学习项目</p>
    <p>这是一个用于学习 Vue3 基础知识的演示项目</p>
    <div class="counter-section">
      <h2>计数器示例</h2>
      <CounterButton />
    </div>
  </div>
</template>

<style scoped></style>
