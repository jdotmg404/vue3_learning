<script setup lang="ts">
interface Props {
  duration?: string // 动画时长，默认 0.5s
  distance?: string // 位移距离，默认 20px
  direction?: 'up' | 'down' // 方向
}
withDefaults(defineProps<Props>(), {
  duration: '0.5s',
  distance: '20px',
  direction: 'up',
})
</script>

<template>
  <Transition name="my-transition">
    <slot></slot>
  </Transition>
</template>

<style scoped>
/* 过程控制：使用 CSS 变量接收 props */
.my-transition-enter-active,
.my-transition-leave-active {
  transition: all v-bind(duration) ease-out;
}

/* 进入前 & 离开后的状态 */
.my-transition-enter-from,
.my-transition-leave-to {
  opacity: 0;
  /* 根据 direction 计算位移 */
  transform: translateY(v-bind("direction === 'up' ? distance : '-' + distance"));
}
</style>
