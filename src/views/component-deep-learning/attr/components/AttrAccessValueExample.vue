<script setup lang="ts">
import { useAttrs } from 'vue'
const attrs = useAttrs()
console.log('attrs', attrs)
</script>

<template>
  <ElButton>click me(access value)</ElButton>
</template>

<style scoped></style>
