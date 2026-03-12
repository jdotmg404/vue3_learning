<script setup lang="ts">
interface Props {
  title?: string
  message?: string
  retryText?: string
  showRetry?: boolean
}

withDefaults(defineProps<Props>(), {
  title: '加载失败',
  message: '组件加载失败，请检查网络连接或稍后重试',
  retryText: '重新加载',
  showRetry: true,
})

const emit = defineEmits<{
  retry: []
}>()

const handleRetry = () => {
  emit('retry')
}
</script>

<template>
  <div class="error-component">
    <div class="error-icon">
      <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="12"></line>
        <line x1="12" y1="16" x2="12.01" y2="16"></line>
      </svg>
    </div>
    <h3 class="error-title">{{ title }}</h3>
    <p class="error-message">{{ message }}</p>
    <button v-if="showRetry" class="retry-button" @click="handleRetry">
      <svg class="retry-icon" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <polyline points="23 4 23 10 17 10"></polyline>
        <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
      </svg>
      {{ retryText }}
    </button>
  </div>
</template>

<style scoped>
.error-component {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  min-height: 200px;
  text-align: center;
}

.error-icon {
  width: 64px;
  height: 64px;
  color: #f56c6c;
  margin-bottom: 16px;
}

.error-icon svg {
  width: 100%;
  height: 100%;
}

.error-title {
  font-size: 18px;
  font-weight: 500;
  color: #303133;
  margin: 0 0 8px 0;
}

.error-message {
  font-size: 14px;
  color: #606266;
  margin: 0 0 24px 0;
  max-width: 400px;
  line-height: 1.5;
}

.retry-button {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 20px;
  font-size: 14px;
  color: #fff;
  background-color: #409eff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.retry-button:hover {
  background-color: #66b1ff;
}

.retry-button:active {
  background-color: #3a8ee6;
}

.retry-icon {
  width: 16px;
  height: 16px;
}
</style>
