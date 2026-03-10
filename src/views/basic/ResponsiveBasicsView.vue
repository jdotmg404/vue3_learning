<script setup lang="ts">
import { reactive, ref } from 'vue'
import MarkdownComponent from '@/views/components/MarkdownComponent.vue'

const count = ref(0)
function increment() {
  count.value++
}
const codeExample = `import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)

    function increment() {
      // 在 JavaScript 中需要 .value
      count.value++
    }

    // 不要忘记同时暴露 increment 函数
    return {
      count,
      increment
    }
  }
}`

const text = `
***选项式 API 声明如下：***
\`\`\`javascript
${codeExample}
\`\`\`
`

const obj = ref({
  nested: { count: 0 },
  arr: ['foo', 'bar'],
})

function mutateDeeply() {
  // 以下都会按照期望工作
  obj.value.nested.count++
  obj.value.arr.push('baz')
}

function reset() {
  obj.value.nested.count = 0
  obj.value.arr = ['foo', 'bar']
}

const state = reactive({ count: 0 })

function incrementState() {
  state.count++
}

function decrementState() {
  state.count--
}

function resetState() {
  state.count = 0
}
const codeExample1 = `
// 在同一个对象上调用 reactive() 会返回相同的代理
console.log(reactive(raw) === proxy) // true

// 在一个代理上调用 reactive() 会返回它自己
console.log(reactive(proxy) === proxy) // true`
const text1 = `
\`\`\`javascript
${codeExample1}
\`\`\`
`
</script>

<template>
  <!-- 响应式基础 -->
  <div>
    <h1>声明式响应</h1>
    <h2>ref()</h2>
    <div>
      <p>1-使用ref实现基础类型响应式</p>
      <p>count值: {{ count }}</p>
      <ElButton class="btn" type="primary" @click="increment">自增</ElButton>
      <MarkdownComponent :markdown="text"></MarkdownComponent>
    </div>
    <div>
      <p>2-使用ref实现对象响应式</p>
      <p>obj.nested.count: {{ obj.nested.count }}</p>
      <p>obj.arr: {{ obj.arr }}</p>
      <ElButton class="btn" type="primary" @click="mutateDeeply">尝试一下</ElButton>
      <ElButton class="btn" type="primary" @click="reset">重置</ElButton>
    </div>
    <hr />
    <h2>reactive()</h2>
    <div>
      <p>1-使用reactive实现对象响应式</p>
      <p>state.count: {{ state.count }}</p>
      <ElButton class="btn" type="primary" @click="incrementState">自增</ElButton>
      <ElButton class="btn" type="primary" @click="decrementState">自减</ElButton>
      <ElButton class="btn" type="primary" @click="resetState">重置</ElButton>
      <p>注意：</p>
      <p>1.reactive()返回的是一个原始对象的的Proxy，它和原始对象是不相等的</p>
      <p>
        2.只有代理对象是响应式的，更改原始对象不会触发更新。因此，使用 Vue
        的响应式系统的最佳实践是仅使用你声明对象的代理版本。
      </p>
      <p>
        3.为保证访问代理的一致性，对同一个原始对象调用 reactive()
        会总是返回同样的代理对象，而对一个已存在的代理对象调用 reactive() 会返回其本身
      </p>
      <MarkdownComponent :markdown="text1"></MarkdownComponent>
      <h3>reactive()的局限性</h3>
      <div></div>
    </div>
    <hr />
  </div>
</template>

<style scoped></style>
