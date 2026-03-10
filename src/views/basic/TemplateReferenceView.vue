<script setup lang="ts">
import { onMounted, ref, useTemplateRef, type VueElement } from 'vue'
import MarkdownComponent from '@/views/components/MarkdownComponent.vue'

const inputRef = useTemplateRef('myInput')
const markdownComponentRef = useTemplateRef('markdownComponent')
const text = ref(`
***组件引用***
- 第一点
- 第二点
`)
const input = ref('')

const list = ref([{ message: '111' }, { message: '222' }])
const itemsRef = useTemplateRef('items')

onMounted(() => {
  inputRef.value.focus()
  // markdownComponentRef.value 将持有 markdown-component 组件实例
  console.log(markdownComponentRef.value)

  // 注意: ref 数组并不保证与源数组相同的顺序
  console.log(itemsRef.value)
})

const handleInit = (el: VueElement) => {
  if (el) {
    // 当元素被挂载时，el 有值
    console.log('输入框已就绪')
  } else {
    // 重要：当元素被销毁时，函数会再次执行，此时 el 是 null
    console.log('输入框已被卸载')
  }
}
</script>

<template>
  <div>
    <!--    -->
    <h1>模板引用</h1>
    <h2>1-访问模板引用</h2>
    <ElInput style="width: 200px" ref="myInput" v-model="input" />

    <h2>2-组件引用</h2>
    <MarkdownComponent ref="markdownComponent" :markdown="text" />

    <h2>3-v-for中的模板引用</h2>
    <div>
      <ul>
        <li v-for="item in list" ref="items" :key="item.message">
          {{ item.message }}
        </li>
      </ul>
    </div>

    <h2>4-函数模板引用</h2>
    <div>
      <ElInput style="width: 200px" :ref="handleInit" />
    </div>
  </div>
</template>

<style scoped></style>
