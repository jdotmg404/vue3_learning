<script setup lang="ts">
interface Props {
  text?: string
  size?: 'small' | 'default' | 'large'
}

withDefaults(defineProps<Props>(), {
  text: '加载中...',
  size: 'default',
})

const sizeMap = {
  small: {
    spinner: '24px',
    fontSize: '14px',
  },
  default: {
    spinner: '40px',
    fontSize: '16px',
  },
  large: {
    spinner: '56px',
    fontSize: '18px',
  },
}
</script>

<template>
  <div class="loading-component">
    <div
      class="loading-spinner"
      :style="{ width: sizeMap[size].spinner, height: sizeMap[size].spinner }"
    >
      <div class="spinner-circle"></div>
    </div>
    <p class="loading-text" :style="{ fontSize: sizeMap[size].fontSize }">{{ text }}</p>
  </div>
</template>

<style scoped>
.loading-component {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  min-height: 200px;
}

.loading-spinner {
  position: relative;
  margin-bottom: 16px;
}

.spinner-circle {
  width: 100%;
  height: 100%;
  border: 3px solid #e4e7ed;
  border-top-color: #409eff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.loading-text {
  color: #606266;
  margin: 0;
}
</style>
