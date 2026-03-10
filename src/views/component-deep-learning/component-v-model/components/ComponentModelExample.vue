<script setup lang="ts">
const model = defineModel()
</script>

<template>
  <span>My Input</span>
  <ElInput style="width: 200px" v-model="model" />
</template>

<style scoped></style>
