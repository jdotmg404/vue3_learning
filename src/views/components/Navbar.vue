<script setup lang="ts">
defineOptions({
  name: 'AppNavbar',
})
import { RouterLink } from 'vue-router'

const navList = [
  { name: '基础', path: '/basic' },
  { name: '深入组件', path: '/componentDeepLearning' },
]
</script>

<template>
  <nav class="navbar">
    <!-- 路由跳转链接 -->
    <router-link v-for="itm in navList" :key="itm.path" :to="itm.path" class="nav-item">
      {{ itm.name }}
    </router-link>
  </nav>
</template>

<style scoped>
.navbar {
  /* 确保占据全屏宽度 */
  width: 100%;
  height: 60px;
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  /* 使用 Flex 布局 */
  display: flex;
}

.nav-item {
  /* 核心代码：平分剩余空间 */
  flex: 1;
  line-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: all 0.3s;
  white-space: nowrap;
  overflow: hidden;

  /* 添加侧边边框增加区分度（可选） */
  border-bottom: 3px solid transparent;
}

/* 悬停及激活状态 */
.nav-item:hover {
  color: #42b983;
  background-color: #f9f9f9;
  border-bottom: 3px solid #42b983;
}
</style>
