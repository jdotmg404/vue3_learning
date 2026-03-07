<script setup lang="ts">
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
  <div>
    <p>响应式count值：{{ count }}</p>
    <el-button class="btn" @click="count++">自增</el-button>
    <el-button class="btn" @click="count--">自减</el-button>
  </div>
</template>

<style scoped></style>
