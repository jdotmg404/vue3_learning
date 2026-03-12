<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
import LineChart from '@/views/components/LineChart.vue'
import LoadingComponent from '@/views/components/LoadingComponent.vue'
import ErrorComponent from '@/views/components/ErrorComponent.vue'
import LazyAsyncComponent from '@/views/components/LazyAsyncComponent.vue'

const LineChartExample = defineAsyncComponent(
  () => import('@/views/components/LineChartExample.vue'),
)
const xAxisData = ref(['claude-opus-4-6-thinking', 'gpt-5.2-high', 'gemini-3.1-pro-preview'])
const yAxisData = ref([1556, 1472, 1461])

// 组件加载成功，显示组件
const MockAsyncSuccessCom = defineAsyncComponent({
  loader: () =>
    new Promise((resolve) => {
      setTimeout(() => {
        // 模拟 2 秒后加载成功
        resolve(import('@/views/components/CounterButton.vue'))
      }, 2000)
    }),
  // 加载异步组件时使用的组件
  loadingComponent: LoadingComponent,
  // 展示加载组件前的延迟时间，设置为 0 立即显示加载组件，方便观察
  delay: 0,
  // 加载失败后展示的组件
  errorComponent: ErrorComponent,
})

// 组件加载失败，显示错误组件
const MockAsyncErrorCom = defineAsyncComponent({
  loader: () =>
    new Promise((_, reject) => {
      setTimeout(() => {
        // 模拟 2 秒后网络出错
        reject(new Error('异步组件加载失败'))
      }, 2000)
    }),
  loadingComponent: LoadingComponent,
  errorComponent: ErrorComponent,
})

// 超时不会影响组件的加载，但会触发 errorComponent
const MockAsyncTimeOutCom = defineAsyncComponent({
  loader: () =>
    new Promise((resolve) => {
      setTimeout(() => {
        // 模拟 6 秒后加载成功
        resolve(import('@/views/components/CounterButton.vue'))
      }, 6000)
    }),
  loadingComponent: LoadingComponent,
  errorComponent: ErrorComponent,
  timeout: 3000,
})
</script>

<template>
  <div>
    <h1>异步组件</h1>

    <h2>1-基础用法</h2>

    <div>
      <p>加载全局注册组件</p>
      <LineChartExample />
      <p>加载普通异步组件</p>
      <LineChart :x-axis-data="xAxisData" :y-axis-data="yAxisData" title="LLM Code Score" />
    </div>
    <br />

    <h2>2-加载与错误状态</h2>
    <div class="status-section">
      <div class="status-item">
        <p class="status-label">模拟加载成功，2 秒后加载成功</p>
        <MockAsyncSuccessCom />
      </div>
      <div class="status-item">
        <p class="status-label">模拟加载失败，2 秒后网络出错</p>
        <MockAsyncErrorCom />
      </div>
      <div class="status-item">
        <p class="status-label">模拟加载超时，6 秒后加载成功，但 3 秒即超时</p>
        <MockAsyncTimeOutCom />
      </div>
    </div>
    <br />

    <h2>3-惰性激活</h2>
    <p>
      使用 Intersection Observer（交叉观察器）：只有当组件滚动到可见区域时，才触发异步加载。
      向下滚动查看效果。
    </p>

    <!-- 占位空间，让用户需要滚动才能看到下面的组件 -->
    <div class="spacer">
      <p>↓ 向下滚动加载下方组件 ↓</p>
    </div>

    <!-- 惰性加载的组件 1 -->
    <div class="lazy-section">
      <h3>惰性加载组件 - 基础用法</h3>
      <LazyAsyncComponent :loader="() => import('@/views/components/CounterButton.vue')" />
    </div>

    <!-- 占位空间 -->
    <div class="spacer">
      <p>↓ 继续向下滚动 ↓</p>
    </div>

    <!-- 惰性加载的组件 2 -->
    <div class="lazy-section">
      <h3>惰性加载组件 - 提前 100px 触发加载</h3>
      <LazyAsyncComponent
        :loader="() => import('@/views/components/CounterButton.vue')"
        root-margin="100px"
      />
    </div>

    <!-- 占位空间 -->
    <div class="spacer">
      <p>↓ 继续向下滚动 ↓</p>
    </div>

    <!-- 惰性加载的组件 3 - 带加载延迟 -->
    <div class="lazy-section">
      <h3>惰性加载组件 - 元素可见 50% 时触发</h3>
      <LazyAsyncComponent
        :loader="() => import('@/views/components/CounterButton.vue')"
        :threshold="0.5"
      />
    </div>
    <br />
  </div>
</template>

<style scoped>
.status-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.status-item {
  padding: 16px;
  background-color: #f5f7fa;
  border-radius: 8px;
}

.status-label {
  margin-top: 0;
  margin-bottom: 12px;
  color: #606266;
  font-size: 14px;
}

.spacer {
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #f5f7fa 0%, #e4e7ed 100%);
  border-radius: 8px;
  margin: 20px 0;
}

.spacer p {
  color: #909399;
  font-size: 18px;
  font-weight: 500;
}

.lazy-section {
  margin: 20px 0;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.lazy-section h3 {
  margin-top: 0;
  margin-bottom: 16px;
  color: #303133;
  font-size: 16px;
}
</style>
