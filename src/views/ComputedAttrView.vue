<script setup lang="ts">
import { computed, reactive, ref } from 'vue'

const author = reactive({
  name: 'John Doe',
  books: ['Vue 2 - Advanced Guide', 'Vue 3 - Basic Guide', 'Vue 4 - The Mystery'],
})

const publishedBooksMessage = computed(() => {
  return author.books.length ? 'Yes' : 'No'
})

const now = computed(() => Date.now())

const firstName = ref<string>('John')
const lastName = ref<string>('Doe')

const fullName = computed({
  get() {
    return `${firstName.value} ${lastName.value}`
  },
  set(newValue) {
    ;[firstName.value, lastName.value] = newValue.split(' ') as [string, string]
  },
})
function setFullName() {
  fullName.value = 'Judy Anna'
}

function resetFullName() {
  fullName.value = 'John Doe'
}

const count = ref(2)

const alwaysSmall = computed((previous) => {
  if (count.value <= 3) {
    return count.value
  }
  return previous
})

const alwaysSmallOptional = computed({
  get(previous) {
    if (count.value <= 3) {
      return count.value
    }
    return previous
  },
  set(newValue) {
    count.value = newValue as number
  },
})
</script>

<template>
  <!-- 计算属性 -->
  <div class="content-container">
    <h1>计算属性</h1>
    <p>1-基础示例</p>
    <p>Has published books: {{ publishedBooksMessage }}</p>
    <p>{{ now }}</p>
    <br />

    <p>2-可写计算属性</p>
    <p>firstName: {{ firstName }}</p>
    <p>lastName: {{ lastName }}</p>
    <p>fullName: {{ fullName }}</p>
    <div>
      <el-button @click="setFullName">设置fullName</el-button>
      <el-button @click="resetFullName">重置fullName</el-button>
    </div>

    <br />
    <p>3-获取上一个值</p>
    <p>count: {{ count }}</p>
    <p>alwaysSmall: {{ alwaysSmall }}</p>
    <p>alwaysSmallOptional: {{ alwaysSmallOptional }}</p>
    <div>
      <el-button @click="count++">count++</el-button>
      <el-button @click="count--">count--</el-button>
    </div>

    <br />
    <p>最佳实践</p>
    <p>Getter 不应有副作用 - 不要改变其他状态、在 getter 中做异步请求或者更改 DOM</p>
    <p>
      避免直接修改计算属性值 -
      计算属性的返回值应该被视为只读的，并且永远不应该被更改——应该更新它所依赖的源状态以触发新的计算
    </p>
  </div>
</template>

<style scoped></style>
