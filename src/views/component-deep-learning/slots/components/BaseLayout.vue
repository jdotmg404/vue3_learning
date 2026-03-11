<script setup lang="ts"></script>

<template>
  <div class="container">
    <ElHeader>
      <slot name="header"></slot>
    </ElHeader>
    <ElMain>
      <slot></slot>
    </ElMain>
    <ElFooter>
      <slot name="footer"></slot>
    </ElFooter>
  </div>
</template>

<style scoped>
footer {
  border-top: 1px solid #ccc;
  color: #666;
  font-size: 0.8em;
}
</style>
