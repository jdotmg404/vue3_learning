<script setup lang="ts">
import { computed, ref } from 'vue'
import gsap from 'gsap'

interface ListItem {
  msg: string
}

const list: ListItem[] = [
  { msg: 'Bruce Lee' },
  { msg: 'Jackie Chan' },
  { msg: 'Chuck Norris' },
  { msg: 'Jet Li' },
  { msg: 'Kung Fury' },
]

const query = ref('')

const computedList = computed(() => {
  return list.filter((item) => item.msg.toLowerCase().includes(query.value.toLowerCase()))
})

function onBeforeEnter(el: Element): void {
  const htmlEl = el as HTMLElement
  htmlEl.style.opacity = '0'
  htmlEl.style.height = '0'
}

function onEnter(el: Element, done: () => void): void {
  const htmlEl = el as HTMLElement
  const index = Number(htmlEl.dataset.index) || 0

  gsap.to(htmlEl, {
    opacity: 1,
    height: '1.6em',
    delay: index * 0.15,
    onComplete: done,
  })
}

function onLeave(el: Element, done: () => void): void {
  const htmlEl = el as HTMLElement
  const index = Number(htmlEl.dataset.index) || 0

  gsap.to(htmlEl, {
    opacity: 0,
    height: 0,
    delay: index * 0.15,
    onComplete: done,
  })
}
</script>

<template>
  <div class="progressive-delay-example">
    <MyInput v-model="query" placeholder="搜索..." />
    <TransitionGroup
      tag="ul"
      :css="false"
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @leave="onLeave"
    >
      <li v-for="(item, index) in computedList" :key="item.msg" :data-index="index">
        {{ item.msg }}
      </li>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.progressive-delay-example {
  padding: 20px;
  background-color: #f5f7fa;
  border-radius: 8px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 16px 0 0 0;
}

li {
  padding: 8px 16px;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  color: #303133;
  overflow: hidden;
}
</style>
