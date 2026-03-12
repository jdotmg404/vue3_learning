<script setup lang="ts">
const firstName = defineModel('firstName')
const lastName = defineModel('lastName')
</script>

<template>
  <MyInput type="text" v-model="firstName"></MyInput>
  <MyInput type="text" v-model="lastName"></MyInput>
</template>

<style scoped></style>
