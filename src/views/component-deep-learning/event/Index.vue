<script setup lang="ts">
import EventExample from '@/views/component-deep-learning/event/components/EventExample.vue'
import { ElMessage } from 'element-plus'
import EventParaExample from '@/views/component-deep-learning/event/components/EventParaExample.vue'
import { ref } from 'vue'

const handle = () => {
  ElMessage.warning('点击了事件')
}

const count = ref(0)

// 接收单个参数
function increaseCount(n: number) {
  count.value += n
  ElMessage.error(`增加了 ${n} 点`)
}

// 接收多个参数
function increaseCountMulti(a: number, b: number, c: number) {
  ElMessage.success(`收到参数: a=${a}, b=${b}, c=${c}`)
  count.value += a + b + c
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
      <!-- 单个参数 -->
      <EventParaExample @increase-by="increaseCount"></EventParaExample>
    </div>
    <br />
    <div>
      <!-- 多个参数 - 方法1：直接传递函数 -->
      <EventParaExample @increase-by="increaseCountMulti"></EventParaExample>
    </div>
    <br />
    <div>
      <!-- 多个参数 - 方法2：箭头函数 -->
      <EventParaExample
        @increase-by="
          (a, b, c) => {
            ElMessage.info(`箭头函数接收: ${a}, ${b}, ${c}`)
            count += (a || 0) + (b || 0) + (c || 0)
          }
        "
      ></EventParaExample>
    </div>
  </div>
</template>

<style scoped></style>
