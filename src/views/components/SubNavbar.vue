<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { computed, ref, watch } from 'vue'
const props = defineProps<{
  parentPath: string
}>()

const router = useRouter()
const route = useRoute()

// 获取当前父路由下的所有子路由，过滤出需要显示的tab
const tabList = computed(() => {
  const parentRoute = router.getRoutes().find((r) => r.path === props.parentPath)
  return parentRoute?.children || []
})

// 从完整路径中提取子路由路径
const getChildPath = (fullPath: string): string => {
  // 移除父路径前缀，获取子路径
  if (fullPath.startsWith(props.parentPath)) {
    const tempPaths = fullPath.split('/').filter(Boolean)
    return tempPaths[tempPaths.length - 1] || ''
  }
  return fullPath
}

// 当，使用 ref 以便可以修改
const activeTab = ref(getChildPath(route.path))

// 监听路由变化，更新选中的 tab
watch(
  () => route.path,
  (newPath) => {
    activeTab.value = getChildPath(newPath)
  },
  { immediate: true },
)

// 点击 Tab 切换路由
const handleTabClick = (pane: any) => {
  router.push(props.parentPath + '/' + pane.paneName)
}
</script>

<template>
  <div>
    <el-tabs v-model="activeTab" @tabClick="handleTabClick">
      <el-tab-pane
        v-for="item in tabList"
        :key="item.path"
        :label="item.meta!.title"
        :name="item.path"
      ></el-tab-pane>
    </el-tabs>
  </div>
</template>

<style scoped></style>
