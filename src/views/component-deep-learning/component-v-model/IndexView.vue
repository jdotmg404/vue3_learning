<script setup lang="ts">
import { ref } from 'vue'
import ComponentModelExample from '@/views/component-deep-learning/component-v-model/components/ComponentModelExample.vue'
import ComponentModelArgExample from '@/views/component-deep-learning/component-v-model/components/ComponentModelArgExample.vue'
import ComponentModelMultiArgExample from '@/views/component-deep-learning/component-v-model/components/ComponentModelMultiArgExample.vue'
import ComponentModelModifierExample from '@/views/component-deep-learning/component-v-model/components/ComponentModelModifierExample.vue'

const msg = ref('Hello World!')
const bookTitle = ref('v-model argument example')
const first = ref('John')
const last = ref('Doe')
const myText = ref('')
</script>

<template>
  <div>
    <h1>组件v-model</h1>

    <h2>1-基本用法</h2>
    <div>
      <p>My Input: {{ msg }}</p>
      <ComponentModelExample v-model="msg" />
    </div>

    <h2>2- v-model 的参数</h2>
    <div>
      <p>{{ bookTitle }}</p>
      <ComponentModelArgExample v-model:title="bookTitle" />
    </div>

    <h2>3- 多个 v-model 参数</h2>
    <div>
      <p>{{ first }} {{ last }}</p>
      <ComponentModelMultiArgExample v-model:first-name="first" v-model:last-name="last" />
    </div>

    <h2>4- v-model 修饰符</h2>
    <div>
      <p>This input capitalizes the first letter you enter: {{ myText }}</p>
      <ComponentModelModifierExample v-model.capitalize="myText"></ComponentModelModifierExample>
    </div>
  </div>
</template>

<style scoped></style>
