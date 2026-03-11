<script setup lang="ts">
import AttrInheritExample from '@/views/component-deep-learning/attr/components/AttrInheritExample.vue'
import { ElMessage } from 'element-plus'
import AttrDeepInheritExample from '@/views/component-deep-learning/attr/components/AttrDeepInheritExample.vue'
import AttrDisableInheritExample from '@/views/component-deep-learning/attr/components/AttrDisableInheritExample.vue'
import AttrMultiInheritExample from '@/views/component-deep-learning/attr/components/AttrMultiInheritExample.vue'
import AttrAccessValueExample from '@/views/component-deep-learning/attr/components/AttrAccessValueExample.vue'

const handleClick = () => {
  ElMessage.success('点击了按钮')
}
</script>

<template>
  <div>
    <h2>1- Attributes 继承</h2>
    <div>
      <p>未经组件声明为 props 或 emits 的属性，将作为组件的属性传递给组件实例。</p>
      <p>最常见的例子就是 class 、 style 和 id</p>
      <div>
        <AttrInheritExample
          @click="handleClick"
          class="large"
          id="inheritBtn"
          style="width: 200px"
        ></AttrInheritExample>
      </div>

      <p>深层组件继承：</p>
      <p>
        1.透传的 attribute 不会包含父组件上声明过的 props 或是针对 emits 声明事件的 v-on
        侦听函数，换句话说，声明过的 props 和侦听函数被 父组件 “消费”了。
      </p>
      <p>2.透传的 attribute 若符合声明，也可以作为 props 传入孙子组件。</p>
      <AttrDeepInheritExample
        @click="handleClick"
        class="large"
        id="inheritBtn"
        style="width: 200px"
      ></AttrDeepInheritExample>
    </div>
    <br />

    <h2>2-禁用 Attributes 继承</h2>
    <div>
      <p>
        通过设置 inheritAttrs: false 来禁用组件的属性继承。
        如果要保留继承，但需要排除某些属性，可以通过 attrs 选项进行配置。
      </p>
      <AttrDisableInheritExample
        @click="handleClick"
        class="large"
        id="inheritBtn"
        style="width: 200px"
      />
    </div>
    <br />

    <h2>3-多根节点的 Attributes 继承</h2>
    <div>
      <p>parent 节点有多个根节点时，attributes 继承将无效。</p>
      <AttrMultiInheritExample
        @click="handleClick"
        class="large"
        id="inheritBtn"
        style="width: 200px"
      />
    </div>
    <br />

    <h2>4-在 JavaScript 中访问透传 Attributes</h2>
    <div>
      <p>
        通过 useAttrs 访问透传的 attribute。 $attrs 是一个只读对象，包含了父组件传递给子组件的
        attribute，但不包含 props 和事件处理函数。
      </p>
      <AttrAccessValueExample
        @click="handleClick"
        class="large"
        id="inheritBtn"
        style="width: 200px"
      />
    </div>
    <br />
  </div>
</template>

<style scoped></style>
