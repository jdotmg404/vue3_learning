<script setup lang="ts">
import Person from '@/models/Person.ts'

defineProps({
  // 基础类型检查
  // (给出 `null` 和 `undefined` 值则会跳过任何类型检查)
  propA: Number,
  // 多种可能的类型
  propB: [String, Number],
  // 必传，且为 String 类型
  propC: {
    type: String,
    required: true,
  },
  // 必传但可为 null 的字符串
  propD: {
    type: [String, null],
    required: true,
  },
  // Number 类型的默认值
  propE: {
    type: Number,
    default: 100,
  },
  // 对象类型的默认值
  propF: {
    type: Object,
    // 对象或数组的默认值
    // 必须从一个工厂函数返回。
    // 该函数接收组件所接收到的原始 prop 作为参数。
    default(rawProps: any) {
      return { message: 'hello' }
    },
  },
  // 自定义类型校验函数
  // 在 3.4+ 中完整的 props 作为第二个参数传入
  propG: {
    type: String,
    validator(value, props) {
      // The value must match one of these strings
      return ['success', 'warning', 'danger'].includes(value)
    },
  },
  // 函数类型的默认值
  propH: {
    type: Function,
    // 不像对象或数组的默认，这不是一个
    // 工厂函数。这会是一个用来作为默认值的函数
    default() {
      return 'Default function'
    },
  },
  // 允许任何类型
  propI: {
    type: null,
  },
  // type也可以是自定义的类或者构造函数，Vue 将会通过 instanceof 检查来验证类型
  propJ: {
    type: Person,
  },
})
</script>

<template>
  <div>
    <div>
      <div>propA: {{ $props.propA }}</div>
      <div>propB: {{ $props.propB }}</div>
      <div>propC: {{ $props.propC }}</div>
      <div>propD: {{ $props.propD }}</div>
      <div>propE: {{ $props.propE }}</div>
      <div>propF: {{ $props.propF }}</div>
      <div>propG: {{ $props.propG }}</div>
      <div>propH: {{ $props.propH }}</div>
      <div>propI: {{ $props.propI }}</div>
      <div>propJ: {{ $props.propJ }}</div>
    </div>
  </div>
</template>

<style scoped></style>
