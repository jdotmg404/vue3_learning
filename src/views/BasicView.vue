<script setup lang="ts">
import SubNavbar from '@/views/components/SubNavbar.vue'
</script>

<template>
  <div>
    <SubNavbar :parent-path="'/basic'" />
    <div class="content-container">
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
