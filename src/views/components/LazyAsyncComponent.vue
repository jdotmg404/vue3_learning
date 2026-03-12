<script setup lang="ts">
import { ref, onMounted, onUnmounted, defineAsyncComponent, type Component } from 'vue'
import LoadingComponent from './LoadingComponent.vue'
import ErrorComponent from './ErrorComponent.vue'

interface Props {
  // 异步加载函数
  loader: () => Promise<Component>
  // 根边距，提前触发加载的距离
  rootMargin?: string
  // 阈值，可见比例
  threshold?: number
}

const props = withDefaults(defineProps<Props>(), {
  rootMargin: '0px',
  threshold: 0,
})

const isVisible = ref(false)
const hasLoaded = ref(false)
const containerRef = ref<HTMLDivElement>()
let observer: IntersectionObserver | null = null

// 创建异步组件（仅在可见时）
const AsyncComponent = defineAsyncComponent({
  loader: props.loader,
  loadingComponent: LoadingComponent,
  errorComponent: ErrorComponent,
  delay: 0,
})

// 处理交叉观察回调
const handleIntersection = (entries: IntersectionObserverEntry[]) => {
  const [entry] = entries
  if (entry.isIntersecting && !hasLoaded.value) {
    isVisible.value = true
    hasLoaded.value = true
    // 加载后停止观察
    observer?.disconnect()
  }
}

onMounted(() => {
  if (!containerRef.value) return

  observer = new IntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: props.rootMargin,
    threshold: props.threshold,
  })

  observer.observe(containerRef.value)
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<template>
  <div ref="containerRef" class="lazy-async-component">
    <!-- 未加载时显示占位符 -->
    <div v-if="!isVisible" class="placeholder">
      <div class="placeholder-content">
        <div class="placeholder-icon">
          <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="3" y1="9" x2="21" y2="9"></line>
            <line x1="9" y1="21" x2="9" y2="9"></line>
          </svg>
        </div>
        <p class="placeholder-text">向下滚动加载组件</p>
      </div>
    </div>
    <!-- 可见后加载异步组件 -->
    <AsyncComponent v-else />
  </div>
</template>

<style scoped>
.lazy-async-component {
  min-height: 200px;
  border: 2px dashed #dcdfe6;
  border-radius: 8px;
  background-color: #f5f7fa;
}

.placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
}

.placeholder-content {
  text-align: center;
  color: #909399;
}

.placeholder-icon {
  width: 48px;
  height: 48px;
  margin: 0 auto 12px;
}

.placeholder-icon svg {
  width: 100%;
  height: 100%;
}

.placeholder-text {
  margin: 0;
  font-size: 14px;
}
</style>
