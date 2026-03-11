<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})
</script>

<template>
  <!-- 不受声明影响，依旧透传 Attributes -->
  <ElButton v-bind="$attrs">click me(disable inherit)</ElButton>
  <!-- 受声明影响，不透传 Attributes -->
  <ElButton>click me(disable inherit)</ElButton>
</template>

<style scoped></style>
