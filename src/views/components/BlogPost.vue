<script setup lang="ts">
defineProps<{
  title: string
}>()
defineEmits(['enlarge-text'])
</script>

<template>
  <div>
    <h4>{{ title }}</h4>
    <el-button @click="$emit('enlarge-text')">Enlarge text</el-button>
  </div>
</template>

<style scoped></style>
