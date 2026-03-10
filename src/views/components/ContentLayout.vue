<script setup lang="ts">
import SubNavbar from '@/views/components/SubNavbar.vue'
defineProps<{
  parentPath: string
}>()
</script>

<template>
  <div class="content-view">
    <SubNavbar :parent-path="parentPath" />
    <div class="content-container">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.content-view {
  width: 100%;
}

.content-container {
  padding: 32px 6px;
}
</style>
