<script setup lang="ts">
import MarkdownComponent from '@/views/components/MarkdownComponent.vue'
import exampleMD from './markdown/example.md?raw'
import transferPropsDetail from './markdown/transferPropsDetail.md?raw'
import { ref } from 'vue'
import ResponsiveComponent from '@/views/component-deep-learning/props/components/ResponsiveComponent.vue'
import mockjs from 'mockjs'
import PropVerifyCase from '@/views/component-deep-learning/props/components/PropVerifyCase.vue'
import Person from '@/models/Person.ts'
import BooleanTypeConversion from '@/views/component-deep-learning/props/components/BooleanTypeConversion.vue'
const props = ref({
  count: 0,
  message: 'hello world',
})
const definitionText = ref(exampleMD)

const changeCount = () => {
  props.value.count = mockjs.Random.integer(0, 100)
  props.value.message = mockjs.Random.cword(5, 10)
}

const verifyProps = ref({
  propA: mockjs.Random.integer(0, 100),
  propB: mockjs.Random.integer(0, 100),
  propC: mockjs.Random.cword(0, 100),
  propD: null,
  // propE: null as unknown as number,
  propG: 'success',
  // propH: () => console.log('success'),
  // propH: () => console.log('failure'),
  propI: Date.now(),
  propJ: new Person('John', 'Doe'),
})

const disabledArr = ref({
  disabledA: false,
  disabledB: null, //false
  disabledC: 0,
  disabledD: null,
})
</script>

<template>
  <div>
    <h1>Props</h1>
    <h2>1-Props声明</h2>
    <div>
      <MarkdownComponent :markdown="definitionText" />
    </div>

    <h2>2-响应式解构</h2>
    <div>
      <ResponsiveComponent :count="props.count" :message="props.message"></ResponsiveComponent>
      <!-- 等价于<ResponsiveComponent v-bind="props"></ResponsiveComponent> -->
      <ElButton @click="changeCount">点击修改count</ElButton>
    </div>

    <h2>3-传递prop细节</h2>
    <div>
      <MarkdownComponent :markdown="transferPropsDetail" />
    </div>

    <h2>4-单向数据流</h2>
    <div>
      <MarkdownComponent :markdown="transferPropsDetail" />
    </div>

    <h2>5-Prop校验</h2>
    <div>
      <PropVerifyCase v-bind="verifyProps" />
    </div>

    <h2>6-Boolean 类型转换</h2>
    <div>
      <BooleanTypeConversion v-bind="disabledArr" />
    </div>
  </div>
</template>

<style scoped></style>
