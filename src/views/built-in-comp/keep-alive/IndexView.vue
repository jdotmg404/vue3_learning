<script setup lang="ts">
import KeepAliveCompA from '@/views/built-in-comp/keep-alive/components/KeepAliveCompA.vue'
import KeepAliveCompB from '@/views/built-in-comp/keep-alive/components/KeepAliveCompB.vue'
import { computed, ref } from 'vue'
import MarkdownComponent from '@/views/components/MarkdownComponent.vue'
import includeExcludeMD from './markdown/include-exclude.md?raw'
import maxCachedInstanceMD from './markdown/max-cached-instances.md?raw'
import cachedInstanceLifeStyleMD from './markdown/cached-instance-life-style.md?raw'
// 使用字符串值控制组件切换
const activeComponentName = ref('CompA')

// 组件映射表
const componentMap = {
  CompA: KeepAliveCompA,
  CompB: KeepAliveCompB,
}

// 当前组件
const current = computed(() => componentMap[activeComponentName.value])
</script>

<template>
  <div>
    <h1>KeepAlive</h1>

    <h2>1-基本用法</h2>
    <p>使用 <code>&lt;KeepAlive&gt;</code> 包裹动态组件，可以在组件切换时保持组件状态。</p>
    <div class="demo">
      <div class="radio-group">
        <ElRadio v-model="activeComponentName" value="CompA">组件 A</ElRadio>
        <ElRadio v-model="activeComponentName" value="CompB">组件 B</ElRadio>
      </div>
      <KeepAlive>
        <component :is="current" />
      </KeepAlive>
    </div>
    <br />

    <h2>2-包含/排除缓存</h2>
    <div>
      <MarkdownComponent :markdown="includeExcludeMD"></MarkdownComponent>
    </div>
    <br />

    <h2>3-最大缓存实例数</h2>
    <MarkdownComponent :markdown="maxCachedInstanceMD"></MarkdownComponent>
    <br />

    <h2>4-缓存实例的生命周期</h2>
    <MarkdownComponent :markdown="cachedInstanceLifeStyleMD"></MarkdownComponent>
    <br />
  </div>
</template>

<style scoped>
code {
  background-color: #f5f7fa;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  color: #409eff;
}

.demo {
  padding: 20px;
  background-color: #f5f7fa;
  border-radius: 8px;
}

.radio-group {
  margin-bottom: 20px;
  display: flex;
  gap: 20px;
}
</style>
