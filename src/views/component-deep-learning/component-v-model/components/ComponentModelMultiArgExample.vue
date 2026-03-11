<script setup lang="ts">
const firstName = defineModel('firstName')
const lastName = defineModel('lastName')
</script>

<template>
  <ElInput style="width: 200px" type="text" v-model="firstName"></ElInput>
  <ElInput style="width: 200px" type="text" v-model="lastName"></ElInput>
</template>

<style scoped></style>
