<script setup lang="ts">
import EventExample from '@/views/component-deep-learning/event/components/EventExample.vue'
import { ElMessage } from 'element-plus'
import EventParaExample from '@/views/component-deep-learning/event/components/EventParaExample.vue'
import { ref } from 'vue'
const handle = () => {
  ElMessage.warning('点击了事件')
}
const count = ref(0)

function increaseCount(n: any) {
  debugger
  count.value += n
}
</script>

<template>
  <div>
    <h1>组件事件</h1>
    <h2>1-触发与监听事件</h2>
    <p>- 触发事件</p>
    <EventExample @some-event="handle"></EventExample>
    <p>- 只监听一次事件</p>
    <EventExample @some-event.once="handle"></EventExample>

    <h2>2-事件参数</h2>
    <div>
      <p>当前计数：{{ count }}</p>
    </div>
    <div>
      <EventParaExample @increase-by="(n) => (count += n)"></EventParaExample>
    </div>
    <br />
    <div>
      <EventParaExample @increase-by="increaseCount"></EventParaExample>
    </div>
  </div>
</template>

<style scoped></style>
