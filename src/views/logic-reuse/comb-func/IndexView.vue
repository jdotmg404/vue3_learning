<script setup lang="ts">
import { useMouse } from '@/composables/mouse.ts'
import { computed, ref } from 'vue'
import { useFetch } from '@/composables/fetch.ts'
import CombFuncParamExample from '@/views/logic-reuse/comb-func/components/CombFuncParamExample.vue'

const { x, y } = useMouse()
</script>

<template>
  <div>
    <h1>组合式函数</h1>

    <h2>1-鼠标跟踪器示例</h2>
    <div>鼠标位置: ({{ x }}, {{ y }})</div>
    <br />

    <h2>2-异步状态示例</h2>
    <div>
      <CombFuncParamExample></CombFuncParamExample>
    </div>
    <br />

    <h2>拓展</h2>
    <div>
      更多内容请查看：<a href="https://cn.vuejs.org/guide/reusability/composables.html"
        >组合式函数</a
      >
    </div>
    <br />
  </div>
</template>

<style scoped></style>
