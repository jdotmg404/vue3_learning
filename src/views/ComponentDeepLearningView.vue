<script setup lang="ts">
import SubNavbar from '@/views/components/SubNavbar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div>
    <SubNavbar :parent-path="'/componentDeepLearning'" />
    <div class="content-container">
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
