<script setup lang="ts">
const title = defineModel('title')
</script>

<template>
  <ElInput style="width: 200px" type="text" v-model="title"></ElInput>
</template>

<style scoped></style>
