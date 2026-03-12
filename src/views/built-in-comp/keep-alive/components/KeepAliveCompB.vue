<script setup lang="ts">
import { ref } from 'vue'
const msg = ref('')
</script>

<template>
  <p>Current component: B</p>
  <p>Message is: {{ msg }}</p>
  <MyInput v-model="msg" />
</template>

<style scoped></style>
