<script setup lang="ts">
import { defineComponent, h, ref } from 'vue'
import MarkdownComponent from '@/views/components/MarkdownComponent.vue'
import JavascriptHookMD from './markdown/javascript-hook.md?raw'
import JavaScriptHookExample from '@/views/built-in-comp/transition/components/JavaScriptHookExample.vue'
import MyTransition from '@/views/built-in-comp/transition/components/MyTransition.vue'
import TransitionBetweenElementsExample from '@/views/built-in-comp/transition/components/TransitionBetweenElementsExample.vue'
import TransitionModeExample from '@/views/built-in-comp/transition/components/TransitionModeExample.vue'
import TransitionKeyRefresh from '@/views/built-in-comp/transition/components/TransitionKeyRefresh.vue'

const show = ref(true)
const show2 = ref(true)
const show3 = ref(true)
const show4 = ref(true)
const show5 = ref(true)
const show6 = ref(true)
const show8 = ref(true)
const show9 = ref(true)

// 组件间过渡 - 使用组件名称字符串来切换
const activeComponentName = ref('ComponentA')

const compA = defineComponent({
  setup() {
    return () => h('div', { class: 'component-box component-a' }, '我是ComponentA组件')
  },
})
const compB = defineComponent({
  setup() {
    return () => h('div', { class: 'component-box component-b' }, '我是ComponentB组件')
  },
})

// 组件映射表
const componentMap = {
  ComponentA: compA,
  ComponentB: compB,
}
</script>

<template>
  <div>
    <h1>Transition 组件</h1>
    <p>Transition 组件是一个内置组件，用于在元素或组件进入或离开 DOM 时应用动画。</p>
    <p>Transition 进入或离开可以由以下的条件之一触发：</p>
    <p>1.由 v-if 所触发的切换</p>
    <p>2.由 v-show 所触发的切换</p>
    <p>3.由特殊元素 component 切换的动态组件</p>
    <p>4.改变特殊的 key 属性</p>

    <h2>1-基础示例</h2>
    <div>
      <ElButton @click="show = !show">Toggle</ElButton>
      <Transition>
        <p v-if="show">hello</p>
      </Transition>
    </div>
    <br />

    <h2>2-为过渡效果命名</h2>
    <div>
      <p>
        为Transition 组件添加 name 属性， Vue 会自动为进入和离开的过渡效果添加不同的类名。
        此时的过渡效果名称为 fade-xx-xx 而不是 v-xx-xx。
      </p>
      <ElButton @click="show2 = !show2">Toggle</ElButton>
      <Transition name="fade">
        <p v-if="show2">hello</p>
      </Transition>
    </div>
    <br />

    <h2>3-CSS 的 transition</h2>
    <div>
      <ElButton @click="show3 = !show3">Toggle</ElButton>
      <Transition name="slide-fade">
        <p v-if="show3">hello</p>
      </Transition>
    </div>
    <br />

    <h2>4-CSS 的 animation</h2>
    <div>
      <ElButton @click="show4 = !show4">Toggle</ElButton>
      <Transition name="bounce">
        <p v-if="show4" style="text-align: center">Hello here is some bouncy text!</p>
      </Transition>
    </div>
    <br />

    <h2>5-自定义过渡css</h2>
    <div>
      <ElButton @click="show5 = !show5">Toggle</ElButton>
      <Transition
        name="custom-classes"
        enter-active-class="animate__animated animate__tada"
        leave-active-class="animate__animated animate__bounceOutRight"
      >
        <p v-if="show5">hello</p>
      </Transition>
    </div>
    <br />

    <h2>6-深层级过渡与显式过渡时长</h2>
    <div>
      <ElButton @click="show6 = !show6">Toggle</ElButton>
      <Transition :duration="550" name="nested">
        <div v-if="show6" class="outer">
          <div class="inner">Hello</div>
        </div>
      </Transition>
    </div>
    <br />

    <h2>7-JavaScript 钩子</h2>
    <div>
      <MarkdownComponent :markdown="JavascriptHookMD" />

      <JavaScriptHookExample />
    </div>
    <br />

    <h2>8-可复用过渡效果</h2>
    <div>
      <p>将过渡效果定义为组件</p>
      <ElButton @click="show8 = !show8">Toggle</ElButton>
      <MyTransition>
        <p v-if="show8">hello</p>
      </MyTransition>
    </div>
    <br />

    <h2>9-出现时过渡</h2>
    <div>
      <p>appear 属性专门用于控制初始渲染（即页面刚加载完）时的过渡效果。</p>
      <p>默认情况下，只有在数据变化触发显隐时才有动画，加上 appear 后，第一次显示也会有动画。</p>
      <!-- 当页面滚动到底部时， <Transition appear> 的初始渲染动画已经触发过了（在元素进入 DOM 时），但用户还未看到它 -->
      <ElButton @click="show9 = !show9">Toggle</ElButton>
      <Transition name="fade" appear>
        <p v-if="show9">hello</p>
      </Transition>
    </div>
    <br />

    <h2>10-元素间过渡</h2>
    <div>
      <TransitionBetweenElementsExample />
    </div>
    <br />

    <h2>11-过渡模式</h2>
    <div>
      <TransitionModeExample />
    </div>
    <br />

    <h2>12-组件间过渡</h2>
    <div>
      <ElRadio v-model="activeComponentName" value="ComponentA">A</ElRadio>
      <ElRadio v-model="activeComponentName" value="ComponentB">B</ElRadio>
      <Transition name="fade" mode="out-in">
        <component :is="componentMap[activeComponentName]" />
      </Transition>
    </div>
    <br />

    <h2>13-使用 Key Attribute 过渡</h2>
    <div>
      <TransitionKeyRefresh />
    </div>
    <br />
  </div>
</template>

<style scoped>
.v-enter-active, /* 定义进入动画的过程 */
.v-leave-active  /* 定义离开动画的过程 */ {
  transition: opacity 0.5s ease; /* 针对透明度，在0.5秒内以平滑曲线过渡 */
}

.v-enter-from, /* 进入前的起始状态 */
.v-leave-to /* 离开后的结束状态 */ {
  opacity: 0; /* 此时透明度为 0（完全透明） */
}
/* fade-xx-xx */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* slide-fade-xx-xx */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

/* bounce-xx-xx */
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

.outer,
.inner {
  background: #eee;
  padding: 30px;
  min-height: 100px;
}

.inner {
  background: #ccc;
}

.nested-enter-active,
.nested-leave-active {
  transition: all 0.3s ease-in-out;
}
/* delay leave of parent element */
.nested-leave-active {
  transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

/* we can also transition nested elements using nested selectors */
.nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all 0.3s ease-in-out;
}
/* delay enter of nested element */
.nested-enter-active .inner {
  transition-delay: 0.25s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  /*
  	Hack around a Chrome 96 bug in handling nested opacity transitions.
    This is not needed in other browsers or Chrome 99+ where the bug
    has been fixed.
  */
  opacity: 0.001;
}

/* 组件间过渡样式 */
.component-box {
  padding: 20px;
  margin-top: 10px;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
}

.component-a {
  background-color: #409eff;
  color: white;
}

.component-b {
  background-color: #67c23a;
  color: white;
}
</style>

<style>
/* animate.css 动画效果 - 需要全局样式 */
.animate__animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}

.animate__tada {
  animation-name: tada;
}

.animate__bounceOutRight {
  animation-name: bounceOutRight;
}

@keyframes tada {
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
}

@keyframes bounceOutRight {
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
}
</style>
