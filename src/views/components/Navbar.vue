<script setup lang="ts">
defineOptions({
  name: 'AppNavbar',
})
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { onMounted } from 'vue'

const route = useRoute()
const router = useRouter()

const navList = [
  { name: '基础', path: '/basic' },
  { name: '深入组件', path: '/componentDeepLearning' },
]

// 判断导航项是否激活（使用路径前缀匹配）
const isActive = (path: string) => {
  return route.path.startsWith(path)
}

// 页面首次加载时，如果没有匹配的路由，默认跳转到第一个 tab
onMounted(() => {
  const isMatch = navList.some((item) => route.path.startsWith(item.path))
  if (!isMatch && navList.length > 0) {
    router.replace(navList[0]?.path)
  }
})
</script>

<template>
  <nav class="navbar">
    <!-- 路由跳转链接 -->
    <RouterLink
      v-for="itm in navList"
      :key="itm.path"
      :to="itm.path"
      class="nav-item"
      :class="{ 'nav-active': isActive(itm.path) }"
      active-class=""
      exact-active-class=""
    >
      {{ itm.name }}
    </RouterLink>
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
  flex: 1 1 0;
  min-width: 0;
  line-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition:
    color 0.3s,
    background-color 0.3s,
    border-color 0.3s;
  white-space: nowrap;
  overflow: hidden;

  /* 使用 box-sizing 确保边框不影响宽度 */
  box-sizing: border-box;
  /* 添加侧边边框增加区分度，始终保持 3px 高度 */
  border-bottom: 3px solid transparent;
}

/* 悬停状态 */
.nav-item:hover {
  color: var(--el-color-primary);
  background-color: #f9f9f9;
}

/* 激活状态 */
.nav-item.nav-active {
  color: var(--el-color-primary);
  background-color: #f9f9f9;
  border-bottom: 3px solid var(--el-color-primary);
}
</style>
