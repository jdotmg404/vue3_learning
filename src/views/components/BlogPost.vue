<script setup lang="ts">
defineProps<{
  title: string
}>()
defineEmits(['enlarge-text'])
</script>

<template>
  <div>
    <h4>{{ title }}</h4>
    <ElButton @click="$emit('enlarge-text')">Enlarge text</ElButton>
  </div>
</template>

<style scoped></style>
