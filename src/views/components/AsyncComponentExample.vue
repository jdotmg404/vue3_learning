<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
import LoadingComponent from './LoadingComponent.vue'
import ErrorComponent from './ErrorComponent.vue'

// 模拟异步加载的组件
const AsyncLineChart = defineAsyncComponent({
  loader: () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(import('./LineChartExample.vue'))
      }, 2000)
    }),
  loadingComponent: LoadingComponent,
  errorComponent: ErrorComponent,
  delay: 200,
  timeout: 5000,
})

// 模拟加载失败的组件
const AsyncFailComponent = defineAsyncComponent({
  loader: () =>
    new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error('加载失败'))
      }, 1500)
    }),
  loadingComponent: LoadingComponent,
  errorComponent: ErrorComponent,
  delay: 200,
  timeout: 5000,
})

// 控制重新加载
const reloadKey = ref(0)
const reloadFailKey = ref(0)

const handleRetry = () => {
  reloadFailKey.value++
}
</script>

<template>
  <div class="async-component-example">
    <h1>异步组件示例</h1>

    <div class="example-section">
      <h2>示例 1: 正常加载</h2>
      <p class="description">组件将在 2 秒后加载完成</p>
      <AsyncLineChart :key="reloadKey" />
    </div>

    <div class="example-section">
      <h2>示例 2: 加载失败</h2>
      <p class="description">组件加载失败，显示错误组件</p>
      <AsyncFailComponent :key="reloadFailKey" @retry="handleRetry" />
    </div>

    <div class="example-section">
      <h2>示例 3: 自定义 Loading 组件</h2>
      <div class="loading-demos">
        <div class="loading-demo-item">
          <h4>Small</h4>
          <LoadingComponent text="小尺寸加载中" size="small" />
        </div>
        <div class="loading-demo-item">
          <h4>Default</h4>
          <LoadingComponent text="默认尺寸加载中" size="default" />
        </div>
        <div class="loading-demo-item">
          <h4>Large</h4>
          <LoadingComponent text="大尺寸加载中" size="large" />
        </div>
      </div>
    </div>

    <div class="example-section">
      <h2>示例 4: 自定义 Error 组件</h2>
      <div class="error-demos">
        <div class="error-demo-item">
          <ErrorComponent
            title="网络错误"
            message="无法连接到服务器，请检查网络设置"
            @retry="handleRetry"
          />
        </div>
        <div class="error-demo-item">
          <ErrorComponent
            title="组件加载失败"
            message="请求的组件不存在或已被删除"
            :show-retry="false"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.async-component-example {
  padding: 20px;
}

.example-section {
  margin-bottom: 40px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.example-section h2 {
  margin-top: 0;
  margin-bottom: 8px;
  color: #303133;
  font-size: 18px;
}

.description {
  color: #909399;
  font-size: 14px;
  margin-bottom: 16px;
}

.loading-demos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.loading-demo-item {
  text-align: center;
  padding: 20px;
  background-color: #f5f7fa;
  border-radius: 8px;
}

.loading-demo-item h4 {
  margin-top: 0;
  margin-bottom: 16px;
  color: #606266;
}

.error-demos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.error-demo-item {
  border: 1px solid #e4e7ed;
  border-radius: 8px;
  overflow: hidden;
}
</style>
