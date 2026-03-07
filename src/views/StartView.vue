<script setup lang="ts">
import CounterButton from '@/views/CounterButton.vue'
</script>

<template>
  <!--  1-开始页面  -->
  <div class="start-page">
    <h1>开始页面</h1>
    <p>欢迎来到 Vue3 学习项目</p>
    <p>这是一个用于学习 Vue3 基础知识的演示项目</p>
    <div class="counter-section">
      <h2>计数器示例</h2>
      <counter-button />
    </div>
  </div>
</template>

<style scoped>
.start-page {
  width: 100%;
  text-align: left;
}

.start-page h1 {
  margin-bottom: 16px;
}

.start-page h2 {
  margin: 24px 0 12px 0;
}

.start-page p {
  margin-bottom: 12px;
  line-height: 1.6;
}

.start-page ul {
  margin-left: 20px;
  margin-bottom: 12px;
}

.start-page li {
  margin-bottom: 8px;
}

.counter-section,
.info-section {
  margin-top: 32px;
}
</style>
