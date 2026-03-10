<script setup lang="ts">
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'

const count = ref(0)
const name = ref('Vue.js')
function greet(evt: Event) {
  ElMessageBox.alert(`Hello ${name.value}!`)

  if (evt) {
    ElMessageBox.alert(evt.target.tagName)
  }
}

function say(message: string) {
  ElMessageBox.alert(message)
}
function warn(message: string, event: Event) {
  // 这里可以访问原生事件
  if (event) {
    event.preventDefault()
  }
  ElMessageBox.alert(message)
}

function doThis() {
  console.log('doThis')
}

function doThat() {
  console.log('doThat')
}

function onSubmit() {
  console.log('onSubmit')
}

function onScroll(e: Event) {
  console.log('onScroll', e)
}

function onPageDown(e: Event) {
  console.log('onPageDown', e)
}

function clear() {
  console.log('clear')
}

function doSomething(e: Event) {
  console.log('doSomething', e)
}

function onClick(e: Event) {
  console.log('onClick', e)
}

function onCtrlClick(e: Event) {
  console.log('onCtrlClick', e)
}
</script>

<template>
  <div>
    <h1>事件处理</h1>
    <div>
      <h2>1-内联事件处理器</h2>
      <ElButton @click="count++">count++</ElButton>
      <p>Count is: {{ count }}</p>
    </div>
    <div>
      <h2>2-方法事件处理器</h2>
      <ElButton @click="greet">Greet</ElButton>
    </div>
    <div>
      <h2>3-在内联处理器中调用方法</h2>
      <ElButton @click="say('hello')">Say hello</ElButton>
      <ElButton @click="say('bye')">Say bye</ElButton>
    </div>
    <div>
      <h2>4-在内联事件处理器中访问事件参数</h2>
      <!-- 使用特殊的 $event 变量 -->
      <ElButton @click="warn('Form cannot be submitted yet.', $event)">Submit</ElButton>

      <!-- 使用内联箭头函数 -->
      <ElButton @click="(event: Event) => warn('Form cannot be submitted yet.', event)"
        >Submit</ElButton
      >
    </div>

    <div>
      <h2>5-事件修饰符</h2>
      <!-- 单击事件将停止传递 -->
      <a @click.stop="doThis">单击事件将停止传递</a>

      <!-- 提交事件将不再重新加载页面 -->
      <form @submit.prevent="onSubmit">提交事件将不再重新加载页面</form>

      <!-- 修饰语可以使用链式书写 -->
      <a @click.stop.prevent="doThat">修饰语可以使用链式书写</a>

      <!-- 也可以只有修饰符 -->
      <form @submit.prevent>也可以只有修饰符</form>

      <!-- 仅当 event.target 是元素本身时才会触发事件处理器 -->
      <!-- 例如：事件处理器不来自子元素 -->
      <div @click.self="doThat"></div>

      <!-- 添加事件监听器时，使用 `capture` 捕获模式 -->
      <!-- 例如：指向内部元素的事件，在被内部元素处理前，先被外部处理 -->
      <div @click.capture="doThis">指向内部元素的事件，在被内部元素处理前，先被外部处理</div>

      <!-- 点击事件最多被触发一次 -->
      <a @click.once="doThis">点击事件最多被触发一次</a>

      <!-- 滚动事件的默认行为 (scrolling) 将立即发生而非等待 `onScroll` 完成 -->
      <!-- 以防其中包含 `event.preventDefault()` -->
      <div @scroll.passive="onScroll">
        滚动事件的默认行为 (scrolling) 将立即发生而非等待 `onScroll` 完成
      </div>
    </div>

    <div>
      <h2>6-按键修饰符</h2>
      <!-- 仅在 `key` 为 `Enter` 时调用 `submit` -->
      <ElInput style="width: 200px" @keyup.enter="onSubmit" label="提交" />

      <!-- 仅会在 $event.key 为 'PageDown' 时调用 onPageDown 事件处理。 -->
      <ElInput style="width: 200px" @keyup.page-down="onPageDown" label="提交" />

      <!-- Alt + Enter -->
      <ElInput @keyup.alt.enter="clear" />

      <!-- Ctrl + 点击 -->
      <div @click.ctrl="doSomething">Do something</div>

      <!-- 当按下 Ctrl 时，即使同时按下 Alt 或 Shift 也会触发 -->
      <ElButton @click.ctrl="onClick">A</ElButton>

      <!-- 仅当按下 Ctrl 且未按任何其他键时才会触发 -->
      <ElButton @click.ctrl.exact="onCtrlClick">A</ElButton>

      <!-- 仅当没有按下任何系统按键时触发 -->
      <ElButton @click.exact="onClick">A</ElButton>
    </div>

    <div>
      <h2>7-鼠标按键修饰符</h2>
    </div>
  </div>
</template>

<style scoped></style>
