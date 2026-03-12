<script setup lang="ts">
interface Props {
  // 高度，可以是数字（px）或字符串（如 '80vh', '100px'）
  height?: number | string
  // 显示的文本内容
  text?: string
  // 背景是否透明
  transparent?: boolean
  // 自定义背景色（当 transparent 为 false 时有效）
  bgColor?: string
}

withDefaults(defineProps<Props>(), {
  height: '80vh',
  text: '↓ 向下滚动 ↓',
  transparent: false,
  bgColor: '',
})

// 处理高度值
const formatHeight = (height: number | string): string => {
  if (typeof height === 'number') {
    return `${height}px`
  }
  return height
}

// 处理背景样式
const getBackground = (transparent: boolean, bgColor: string): string => {
  if (transparent) {
    return 'transparent'
  }
  if (bgColor) {
    return bgColor
  }
  // 默认渐变背景
  return 'linear-gradient(180deg, #f5f7fa 0%, #e4e7ed 100%)'
}
</script>

<template>
  <div
    class="spacer"
    :style="{
      height: formatHeight(height),
      background: getBackground(transparent, bgColor),
    }"
  >
    <p v-if="text">{{ text }}</p>
    <slot />
  </div>
</template>

<style scoped>
.spacer {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin: 20px 0;
}

.spacer p {
  color: #909399;
  font-size: 18px;
  font-weight: 500;
  margin: 0;
}
</style>
