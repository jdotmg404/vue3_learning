<script setup lang="ts">
import { ref } from 'vue'
import ComponentModelExample from '@/views/component-deep-learning/component-v-model/components/ComponentModelExample.vue'

const msg = ref('Hello World!')
</script>

<template>
  <div>
    <h1>组件v-model</h1>

    <h2>1-基本用法</h2>
    <div>
      <ComponentModelExample v-model="msg" />
    </div>
  </div>
</template>

<style scoped></style>
