<script setup lang="ts"></script>

<template>
  <div>
    <ElButton @click="$emit('increaseBy', 1)">点击，传1</ElButton>
    <ElButton @click="$emit('increaseBy', 1, 2, 3)">点击,传多个参数</ElButton>
  </div>
</template>

<style scoped></style>
