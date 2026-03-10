<script setup lang="ts">
import { ref } from 'vue'

const awesome = ref(true)
const type = ref('A')
const ok = ref(true)
</script>

<template>
  <div>
    <h1>v-if</h1>
    <div v-if="awesome">Vue is awesome!</div>
    <div>
      特殊情况：template上使用v-if
      <template v-if="ok">
        <h1>Title</h1>
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
      </template>
    </div>
    <br />
    <h1>v-else</h1>
    <div>
      <ElButton @click="awesome = !awesome">change awesome</ElButton>
      <div v-if="awesome">Vue is awesome!</div>
      <div v-else>Oh no 😢</div>
    </div>
    <br />
    <h1>v-else-if</h1>
    <div>
      <ElButton @click="type = 'A'">type = 'A'</ElButton>
      <ElButton @click="type = 'B'">type = 'B'</ElButton>
      <ElButton @click="type = 'C'">type = 'C'</ElButton>
      <div v-if="type === 'A'">A</div>
      <div v-else-if="type === 'B'">B</div>
      <div v-else>C</div>
    </div>
    <br />
    <h1>v-show</h1>
    <div>
      <h1 v-show="ok">Hello!</h1>
    </div>
    <br />

    <p>注意事项：</p>
    <p>
      总的来说，v-if 有更高的切换开销，而 v-show
      有更高的初始渲染开销。因此，如果需要频繁切换，则使用 v-show
      较好；如果在运行时绑定条件很少改变，则 v-if 会更合适。
    </p>
    <p>当 v-if 和 v-for 同时存在于一个元素上的时候，v-if 会首先被执行</p>
  </div>
</template>

<style scoped></style>
