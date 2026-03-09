<script setup lang="ts">
import { reactive, ref } from 'vue'

const parentMessage = ref('Parent')
const items = ref([{ message: 'Foo' }, { message: 'Bar' }])
const tree = ref([
  { message: '1', children: [{ message: '1-1' }] },
  { message: '2', children: [{ message: '2-1' }, { message: '2-2' }] },
])
const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10',
})
</script>

<template>
  <div class="content-container">
    <h1>v-for</h1>
    <div>
      <div>1-使用别名</div>
      <ul>
        <li v-for="item in items" :key="item.message">{{ parentMessage }} - {{ item.message }}</li>
      </ul>
      <br />
      <ul>
        <li v-for="(item, index) in items" :key="index">
          {{ parentMessage }} - {{ index }} - {{ item.message }}
        </li>
      </ul>
      <br />
      <div>2-使用解构</div>
      <ul>
        <li v-for="({ message }, index) in items" :key="message">
          {{ parentMessage }} - {{ index }} - {{ message }}
        </li>
      </ul>
      <br />
      <div>3-多层循环</div>
      <ul>
        <li v-for="(item, index) in tree" :key="index">
          <span v-for="{ message } in item.children" :key="message">
            {{ item.message }} {{ message }}
          </span>
        </li>
      </ul>
      <br />
      <div>4-遍历对象</div>
      <ul>
        <li v-for="(value, key, index) in myObject" :key="index">
          {{ index }} - {{ key }}: {{ value }}
        </li>
      </ul>
      <br />
      <div>5-使用范围值</div>
      <div>
        <span v-for="n in 10" :key="n">{{ n }}</span>
      </div>

      <br />
      <div>6-template使用v-for</div>
      <ul>
        <template v-for="item in items" :key="item.message">
          <li>{{ item.message }}</li>
          <li class="divider" role="presentation"></li>
        </template>
      </ul>
    </div>
    <br />
  </div>
</template>

<style scoped></style>
