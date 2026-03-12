<script setup lang="ts">
import { shuffle as _shuffle } from 'lodash-es'
import { ref } from 'vue'

const getInitialItems = () => [1, 2, 3, 4, 5]
const items = ref(getInitialItems())
let id = items.value.length + 1

function insert() {
  const i = Math.round(Math.random() * items.value.length)
  items.value.splice(i, 0, id++)
}

function reset() {
  items.value = getInitialItems()
  id = items.value.length + 1
}

function shuffle() {
  items.value = _shuffle(items.value)
}

function remove(item) {
  const i = items.value.indexOf(item)
  if (i > -1) {
    items.value.splice(i, 1)
  }
}
</script>

<template>
  <div class="list-transition-example">
    <div class="buttons">
      <ElButton @click="insert">插入一个随机位置</ElButton>
      <ElButton @click="reset">重置</ElButton>
      <ElButton @click="shuffle">随机排序</ElButton>
    </div>

    <TransitionGroup tag="ul" name="list" class="list">
      <li v-for="item in items" class="list-item" :key="item">
        {{ item }}
        <ElButton @click="remove(item)" class="remove-btn">删除</ElButton>
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
  justify-content: space-between;
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

.remove-btn {
  margin-left: auto;
}
</style>
