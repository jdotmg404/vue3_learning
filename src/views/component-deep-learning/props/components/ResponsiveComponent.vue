<script setup lang="ts">
import { watch } from 'vue'

const { count, message } = defineProps<{
  count?: number
  message?: string
}>()

// const { count, message } = toRefs(props)

watch(
  () => count,
  (newVal, oldVal) => {
    console.log(`count changed from ${oldVal} to ${newVal}, message is ${message}`)
  },
)
</script>

<template>
  <div>
    <p>count: {{ count }}</p>
    <p>message: {{ message }}</p>
  </div>
</template>

<style scoped></style>
