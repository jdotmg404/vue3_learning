<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from '@/views/components/Navbar.vue'
</script>

<template>
  <div class="layout">
    <header class="header">
      <Navbar />
    </header>
    <main class="content">
      <RouterView />
    </main>
    <footer class="footer">
      <!-- 所有的通知都会被传送到这里 -->
      <p style="float: right" id="notification-container"></p>
      <ElBacktop :right="100" :bottom="100" />
    </footer>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden;
  /* 始终显示滚动条轨道，防止滚动条出现导致布局抖动 */
  overflow-y: scroll;
}

/* 自定义滚动条样式，使其更美观 */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

h1 {
  margin-bottom: 16px;
}
h2 {
  margin: 24px 0 12px 0;
}
p {
  margin-bottom: 12px;
  line-height: 1.6;
}
ul {
  margin-left: 20px;
  margin-bottom: 12px;
}
li {
  margin-bottom: 8px;
}

hr {
  margin-top: 12px;
  margin-bottom: 12px;
}
</style>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  position: relative;
}

.header {
  flex-shrink: 0;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.content {
  flex: 1;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  padding: 76px 16px;
  overflow-x: hidden;
  overflow-y: auto;
  text-align: left;
  min-height: calc(100vh - 136px);
}

.content > * {
  width: 100%;
  max-width: 100%;
  text-align: left;
}

.footer {
  flex-shrink: 0;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  z-index: 1000;
  background-color: #fff;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
}
</style>
