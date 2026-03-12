<script setup lang="ts">
import ListTransitionExample from './components/ListTransitionExample.vue'
import ListMoveTransitionExample from '@/views/built-in-comp/transition-group/components/ListMoveTransitionExample.vue'
import ProgressiveDelayListAnimation from '@/views/built-in-comp/transition-group/components/ProgressiveDelayListAnimation.vue'
</script>

<template>
  <div>
    <h1>TransitionGroup 组件</h1>
    <p>
      <code>&lt;TransitionGroup&gt;</code> 是一个内置组件，用于对
      <code>v-for</code> 列表中的元素或组件的插入、移除和顺序改变添加动画效果。
    </p>

    <h2>1-进入/离开动画</h2>
    <div>
      <p>
        这里是 <code>&lt;TransitionGroup&gt;</code> 对一个
        <code>v-for</code> 列表添加进入/离开动画的示例：
      </p>
      <ListTransitionExample />
    </div>

    <br />

    <h2>2-移动动画</h2>
    <div>
      <p>即将添加...</p>
      <ListMoveTransitionExample />
    </div>

    <br />

    <h2>3-渐进延迟列表动画</h2>
    <div>
      <ProgressiveDelayListAnimation />
    </div>
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
</style>
