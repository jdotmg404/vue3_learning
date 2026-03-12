<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="modal">
    <h3>我是子组件（模态框）</h3>
    <p>接收到的 Props: {{ msg }}</p>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  top: 20%;
  left: 50%;
  background: white;
  border: 1px solid #ccc;
}
</style>
