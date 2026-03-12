<script setup lang="ts">
import { ref } from 'vue'

const items = ref([1, 2, 3, 4, 5])
let nextNum = 6

const randomIndex = () => Math.floor(Math.random() * items.value.length)

const add = () => {
  items.value.splice(randomIndex(), 0, nextNum++)
}

const remove = () => {
  if (items.value.length > 0) {
    items.value.splice(randomIndex(), 1)
  }
}
</script>

<template>
  <div class="list-transition-example">
    <div class="buttons">
      <ElButton @click="add">在任意位置添加一项</ElButton>
      <ElButton @click="remove">移除任意位置上的一项</ElButton>
    </div>

    <TransitionGroup name="list" tag="ul" class="list">
      <li v-for="item in items" :key="item" class="list-item">
        {{ item }}
      </li>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.list-transition-example {
  padding: 20px;
  background-color: #f5f7fa;
  border-radius: 8px;
  width: 640px;
}

.buttons {
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
}

.list {
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;
}

.list-item {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  color: #303133;
}

/* 列表过渡动画 */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* 确保离开的元素从文档流中移除 */
.list-leave-active {
  position: absolute;
}

/* 列表移动动画 */
.list-move {
  transition: transform 0.5s ease;
}
</style>
