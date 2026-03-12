<script setup lang="ts">
const title = defineModel('title')
</script>

<template>
  <MyInput type="text" v-model="title"></MyInput>
</template>

<style scoped></style>
