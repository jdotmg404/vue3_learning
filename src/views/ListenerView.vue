<script setup lang="ts">
import { onWatcherCleanup, reactive, ref, watch, watchEffect } from 'vue'

const question = ref('')
const answer = ref('Questions usually contain a question mark. ;-)')
const loading = ref(false)
const obj = reactive({ count: 0, subObj: { count: 0 } })
const source = ref(null)
const todoId = ref(1)
const data = ref(null)
const id = ref(1)
watch(question, async (newQuestion: string, oldQuestion: string) => {
  if (newQuestion.includes('?')) {
    loading.value = true
    answer.value = 'Thinking...'
    try {
      const res = await fetch('https://yesno.wtf/api')
      answer.value = (await res.json()).answer
    } catch (e) {
      answer.value = 'Error! Could not reach the API. ' + e
    } finally {
      loading.value = false
    }
  }
})
const x = ref(0)
const y = ref(0)

// 单个 ref
watch(x, (newX: number) => {
  console.log(`1 - x is ${newX}`)
})

// getter函数
watch(
  () => x.value + y.value,
  (sum: number) => {
    console.log(`2 - sum of x + y is: ${sum}`)
  },
)

// 多个来源组成的数组
watch([x, y], ([newX, newY]) => {
  console.log(`3 - x is ${newX}, y is ${newY}`)
})

// 监听对象内属性
watch(
  () => obj.count,
  (count) => {
    console.log(`4 - obj.count is ${count}`)
  },
)

// 深度监听
watch(
  () => obj.subObj,
  (newValue, oldValue) => {
    // 注意：`newValue` 此处和 `oldValue` 是相等的
    // *除非* obj.subObj 被整个替换了
    console.log(
      `5 - obj.subObj newValue is ${JSON.stringify(newValue)}, oldValue is ${JSON.stringify(oldValue)}`,
    )
  },
  { deep: true },
)

// 即时回调
watch(
  source,
  (newValue, oldValue) => {
    console.log(
      `6 - source newValue is ${newValue === '' ? '空值' : newValue}, oldValue is ${oldValue}`,
    )
  },
  { immediate: true },
)

// 一次性监听
watch(
  source,
  (newValue, oldValue) => {
    console.log(
      `7 - source newValue is ${newValue === '' ? '空值' : newValue}, oldValue is ${oldValue}`,
    )
  },
  { once: true },
)

function changeSubObj() {
  obj.subObj = { count: 0 }
}

watchEffect(async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`)
  data.value = await response.json()
})

watch(id, (newId, oldId) => {
  const controller = new AbortController()
  // 模拟请求
  fetch(`https://jsonplaceholder.typicode.com/todos/${newId}`, {
    signal: controller.signal,
  }).then((response) => {
    const res = response.json()
    console.log(`--- 响应数据为 ${JSON.stringify(res)} ---`)
  })

  onWatcherCleanup(() =>
    // 终止过期请求
    controller.abort(),
  )
})
</script>

<template>
  <h1>侦听器</h1>
  <div>
    <h2>1-基本示例</h2>
    <p>
      Ask a yes/no question:
      <el-input style="width: 200px" v-model="question" :disabled="loading" />
    </p>
    <p>Answer: {{ answer }}</p>

    <h2>2-侦听数据源类型</h2>
    <p>x is {{ x }}, y is {{ y }}</p>
    <el-button @click="x++">x++</el-button>
    <el-button @click="x--">x--</el-button>
    <el-button @click="y++">y++</el-button>
    <el-button @click="y--">y--</el-button>

    <h2>3-监听对象内属性</h2>
    <div>
      <p>obj.count is {{ obj.count }}</p>
      <el-button @click="obj.count++">obj.count++</el-button>
      <el-button @click="obj.count--">obj.count--</el-button>
    </div>

    <h2>4-深度监听</h2>
    <div>
      <p>obj.subObj.count is {{ obj.subObj.count }}</p>
      <el-button @click="obj.subObj.count++">obj.subObj.count++</el-button>
      <el-button @click="obj.subObj.count--">obj.subObj.count--</el-button>
      <el-button @click="changeSubObj">changeSubObj</el-button>
    </div>

    <h2>5-即时回调</h2>
    <div>
      <el-input style="width: 200px" v-model="source" placeholder="请输入内容" />
    </div>

    <h2>6-一次性侦听器</h2>
    <div>
      <el-input style="width: 200px" v-model="source" placeholder="请输入内容" />
    </div>

    <h2>7-watchEffect</h2>
    <div>
      <p>todoId is {{ todoId }}</p>
      <el-button @click="todoId++">todoId++</el-button>
    </div>

    <h2>8-副作用清理</h2>
    <div></div>
  </div>
</template>

<style scoped></style>
