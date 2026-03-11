<script setup lang="ts">
import { getImage } from '@/utils/images'
</script>

<template>
  <div>
    <h1>生命周期</h1>
    <img :src="getImage('Vue3生命周期.png')" alt="Vue3生命周期图" style="max-width: 100%;" />
  </div>
</template>

<style scoped></style>
