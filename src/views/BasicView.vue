<script setup lang="ts">
import SubNavbar from '@/views/components/SubNavbar.vue'
</script>

<template>
  <div>
    <sub-navbar :parent-path="'/basic'" />
    <div class="content-container">
      <router-view />
    </div>
  </div>
</template>

<style scoped></style>
