<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
setInterval(() => {
  count.value++
}, 1000)
</script>

<template>
  <div class="wrapper">
    <Transition mode="out-in">
      <span :key="count">{{ count }}</span>
    </Transition>
  </div>
</template>

<style scoped>
.wrapper {
  /* 固定高度，防止页面跳动 */
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

span {
  font-size: 4rem;
  font-weight: bold;
  color: #409eff;
}

/* 过渡动画 */
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.v-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
