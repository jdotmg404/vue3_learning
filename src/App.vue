<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="layout">
    <header class="header">
      <nav>
        <RouterLink to="/">开始页面</RouterLink>
        <RouterLink to="/template">模板语法</RouterLink>
      </nav>
    </header>
    <main class="content">
      <RouterView />
    </main>
    <footer class="footer">
      <el-backtop :right="100" :bottom="100" />
    </footer>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  flex-shrink: 0;
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  overflow-x: auto;
}

.header nav {
  display: flex;
  gap: 16px;
  white-space: nowrap;
}

.content {
  flex: 1;
  overflow-y: auto;
  width: 100%;
}

.footer {
  flex-shrink: 0;
}
</style>
