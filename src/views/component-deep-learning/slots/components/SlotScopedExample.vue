<script setup lang="ts">
import { ref } from 'vue'

// 子组件内部的数据
const greetingMessage = ref('这是子组件的消息')
const count = ref(1)
const user = ref({
  name: '张三',
  age: 25,
})
</script>

<template>
  <div class="container">
    <!-- 通过插槽将子组件数据传递给父组件 -->
    <slot :text="greetingMessage" :user="user" :count="count"></slot>
  </div>
</template>

<style scoped>
.container {
  border: 1px solid lightcoral;
  padding: 12px;
  border-radius: 12px;
  margin: 12px;
}
</style>
