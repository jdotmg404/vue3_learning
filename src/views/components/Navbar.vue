<script setup lang="ts">
defineOptions({
  name: 'AppNavbar',
})
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const navList = [
  { name: '基础', path: '/basic' },
  { name: '深入组件', path: '/componentDeepLearning' },
]

// 判断导航项是否激活（使用路径前缀匹配）
const isActive = (path: string) => {
  return route.path.startsWith(path)
}
</script>

<template>
  <nav class="navbar">
    <!-- 路由跳转链接 -->
    <router-link
      v-for="itm in navList"
      :key="itm.path"
      :to="itm.path"
      class="nav-item"
      :class="{ active: isActive(itm.path) }"
    >
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

/* 悬停状态 */
.nav-item:hover {
  color: #42b983;
  background-color: #f9f9f9;
}

/* 激活状态 */
.nav-item.active {
  color: #42b983;
  background-color: #f9f9f9;
  border-bottom: 3px solid #42b983;
}
</style>
