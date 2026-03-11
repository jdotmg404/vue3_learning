<script setup lang="ts">
const title = defineModel('title')
</script>

<template>
  <ElInput type="text" v-model="title"></ElInput>
</template>

<style scoped></style>
