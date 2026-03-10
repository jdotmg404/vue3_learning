<script setup lang="ts">
import { computed, reactive, ref } from 'vue'

const isActive = ref(true)
const hasError = ref(false)
const error = ref<{ type?: string }>(null as unknown as never)
const classObject = reactive({
  active: true,
  'text-danger': false,
})

const classObjectComputed = computed(() => ({
  active: isActive.value && !error.value,
  'text-danger': error.value && error.value.type === 'fatal',
}))

const activeClass = ref('active')
const errorClass = ref('text-danger')

const activeColor = ref('red')
const fontSize = ref(30)

const styleObject = reactive({
  color: activeColor.value,
  fontSize: fontSize.value + 'px',
})
</script>

<template>
  <!-- Class 与 Style 绑定 -->
  <div>
    <h1>Class 与 Style 绑定</h1>
    <p>1-绑定对象</p>
    <div>
      <p>isActive: {{ isActive }}</p>
      <div class="static" :class="{ active: isActive }">盒子1</div>
      <div class="static" :class="{ active: isActive, 'text-danger': hasError }">盒子2</div>
      <div class="static" :class="classObject">盒子3</div>
      <div class="static" :class="classObjectComputed">盒子4</div>
    </div>
    <br />
    <p>2-绑定数组</p>
    <div>
      <p></p>
      <div :class="[activeClass, errorClass]">盒子1</div>
      <div :class="[isActive ? activeClass : '', errorClass]">盒子2</div>
      <div :class="[{ [activeClass]: isActive }, errorClass]">盒子3</div>
    </div>
    <br />
    <h1>绑定内联样式</h1>
    <p>1-绑定对象</p>
    <div>
      <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">盒子1</div>
      <div :style="{ color: activeColor, 'font-size': fontSize + 'px' }">盒子2</div>
      <div :style="styleObject">盒子3</div>
      <h1 style="color: red" :style="'font-size: 1em'">hello</h1>
    </div>
    <br />
    <p>2-绑定数组</p>
    <div>
      <div :style="[styleObject, { color: 'blue' }]">盒子1</div>
    </div>
  </div>
</template>

<style scoped>
.static {
  padding-top: 12px;
  width: 80px;
}
</style>
