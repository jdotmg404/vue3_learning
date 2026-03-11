<script setup lang="ts">
import { inject } from 'vue'

const { location, updateLocation } = inject('location')
</script>

<template>
  <ElButton @click="updateLocation"> {{ location }} </ElButton>
</template>

<style scoped></style>
