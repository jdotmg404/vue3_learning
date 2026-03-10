<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { computed, ref, watch, onMounted } from 'vue'
import type { TabsPaneContext } from 'element-plus'
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

// 当前选中的 Tab，使用 ref 以便可以修改
const activeTab = ref(getChildPath(route.path))

// 监听路由变化，更新选中的 tab
watch(
  () => route.path,
  (newPath) => {
    activeTab.value = getChildPath(newPath)
  },
  { immediate: true },
)

// 页面首次加载时，如果没有匹配二级路由，默认跳转到第一个二级 tab
onMounted(() => {
  const currentChildPath = getChildPath(route.path)
  const hasMatch = tabList.value.some((item) => item.path === currentChildPath)

  // 如果没有匹配的二级路由，且存在二级 tab，则跳转到第一个
  if (!hasMatch && tabList.value.length > 0) {
    const firstTab = tabList.value[0]
    // firstTab.path 是相对路径（如 start），需要拼接 / 形成完整路径
    router.replace(props.parentPath + '/' + firstTab?.path)
  }
})

// 点击 Tab 切换路由
const handleTabClick = (pane: TabsPaneContext) => {
  // 从 pane.props.name 获取 tab 的 name
  const paneName = pane.props.name
  if (paneName) {
    // paneName 是相对路径（如 start），需要拼接 / 形成完整路径
    const targetPath = props.parentPath + '/' + paneName
    router.push(targetPath)
  }
}
</script>

<template>
  <div>
    <ElTabs v-model="activeTab" @tabClick="handleTabClick">
      <ElTabPane
        v-for="item in tabList"
        :key="item.path"
        :label="item.meta?.title"
        :name="item.path"
      ></ElTabPane>
    </ElTabs>
  </div>
</template>

<style scoped></style>
