<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <p>Current component: A</p>
  <p>count: {{ count }}</p>
  <ElButton @click="count++">+</ElButton>
</template>

<style scoped></style>
