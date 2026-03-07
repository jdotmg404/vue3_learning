<script setup lang="ts">
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
  <div class="counter-container">
    <div class="button-group">
      <el-button class="btn" type="primary" @click="count++">自增</el-button>
      <el-button class="btn" type="danger" @click="count--">自减</el-button>
      <el-button class="btn" type="warning" @click="count = 0">重置</el-button>
    </div>
    <div class="info-box">
      <p>这是一个使用 ref 实现的响应式计数器</p>
      <p>点击按钮可以增加或减少计数值</p>
      <p>count 的值会自动更新到视图中</p>
    </div>
  </div>
</template>

<style scoped>
.counter-container {
  width: 100%;
  max-width: 100%;
  text-align: left;
}

.counter-container > * {
  width: 100%;
  max-width: 100%;
}

.counter-container h2 {
  margin-bottom: 16px;
}

.counter-container p {
  margin-bottom: 12px;
  line-height: 1.6;
}

.button-group {
  margin: 24px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.info-box {
  margin-top: 24px;
  padding: 16px;
  background-color: #f5f5f5;
  border-radius: 4px;
}

.info-box p {
  margin-bottom: 8px;
}
</style>
