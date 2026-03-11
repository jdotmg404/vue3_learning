<script setup lang="ts">
import FancyButton from '@/views/component-deep-learning/slots/components/FancyButton.vue'
import AwesomeIcon from '@/views/component-deep-learning/slots/components/AwesomeIcon.vue'
import MarkdownComponent from '@/views/components/MarkdownComponent.vue'
import SlotScopedExample from '@/views/component-deep-learning/slots/components/SlotScopedExample.vue'
import slotMD from './markdown/slot.md?raw'
import { ref } from 'vue'
import SlotDefaultContentExample from '@/views/component-deep-learning/slots/components/SlotDefaultContentExample.vue'
import BaseLayout from '@/views/component-deep-learning/slots/components/BaseLayout.vue'
import CardView from '@/views/component-deep-learning/slots/components/CardView.vue'
import FancyList from '@/views/component-deep-learning/slots/components/FancyList.vue'
import MouseTracker from '@/views/component-deep-learning/slots/components/MouseTracker.vue'
import { getImage } from '@/utils/images'

// 父组件数据
const parentMessage = ref('这是父组件的消息')
const dynamicSlotName = ref('default')
</script>

<template>
  <div>
    <h1>插槽 Slots</h1>

    <h2>1-插槽内容与出口</h2>
    <div>
      <div>
        <MarkdownComponent :markdown="slotMD" />
      </div>
      <div>
        <FancyButton>Click me</FancyButton>
      </div>

      <div>
        <FancyButton>
          <span style="color: cyan">Click me！</span>
          <AwesomeIcon />
        </FancyButton>
      </div>
    </div>
    <br />

    <h2>2-渲染作用域</h2>
    <div>
      <!-- 情况1：普通元素可以访问父组件数据 -->
      <p>普通元素访问父组件数据：</p>
      <span class="highlight">{{ parentMessage }}</span>

      <!-- 情况2：插槽内容可以访问父组件数据 -->
      <p>插槽内容访问父组件数据：</p>
      <FancyButton>
        {{ parentMessage }}
      </FancyButton>

      <!-- 情况3：插槽内容无法访问子组件数据（演示） -->
      <p>尝试在插槽中访问子组件内部数据（会报错）：</p>
      <!-- 下面的代码会报错，因为 childMessage 是子组件内部的数据 -->
      <!-- <FancyButton>{{ childMessage }}</FancyButton> -->

      <p class="tip">
        💡 提示：插槽内容只能访问父组件的作用域，无法直接访问子组件的数据。
        如果需要访问子组件数据，需要使用"作用域插槽"。
      </p>
    </div>
    <br />

    <h2>3-默认内容</h2>
    <div>
      <p>允许插槽内容没有内容时，提供默认内容</p>
      <div>
        <SlotDefaultContentExample></SlotDefaultContentExample>
      </div>

      <p>但如果提供插槽内容，那么被显式提供的内容会取代默认内容</p>
      <div>
        <SlotDefaultContentExample> Save </SlotDefaultContentExample>
      </div>
    </div>
    <br />

    <h2>4-具名插槽</h2>
    <div>
      <p>允许多个插槽，插槽可以使用 template v-slot:name 或简写 template #name 来声明</p>
      <p>没有提供 name 的 slot出口会隐式地命名为“default”</p>
      <p>
        当一个组件同时接收默认插槽和具名插槽时，所有位于顶级的非 template
        节点都被隐式地视为默认插槽的内容。
      </p>
      <div>
        <BaseLayout>
          <template #header>
            <h1>Here might be a page title</h1>
          </template>
          <template #default>
            <p>A paragraph for the main content.</p>
            <p>And another one.</p>
          </template>

          <template #footer>
            <p>Here's some contact info</p>
          </template>
        </BaseLayout>
      </div>
    </div>
    <br />

    <h2>5-条件插槽</h2>
    <div>
      <p>只有当父组件提供了条件插槽时，才会渲染该插槽</p>
      <CardView>
        <template #header>
          <h1>This is the header</h1>
        </template>
        <template #default>
          <p>This is the content</p>
        </template>
        <template #footer>
          <em>This is the footer</em>
        </template>
      </CardView>
    </div>
    <br />

    <h2>6-动态插槽名</h2>
    <div>
      <p>动态指令 v-slot:[dynamicSlotName] 或 #[dynamicSlotName] 也可以用来创建具名插槽</p>
      <div>
        <BaseLayout>
          <template #[dynamicSlotName]>
            <p>This is the content for slot named "{{ dynamicSlotName }}"</p>
          </template>
        </BaseLayout>
      </div>
    </div>
    <br />

    <h2>7-作用域插槽</h2>
    <div>
      <p>子组件传入插槽的 props 作为了 v-slot 指令的值，可以在插槽内的表达式中访问。</p>
      <img :src="getImage('scoped-slots.svg')" alt="作用域插槽示意图" style="max-width: 100%" />
      <!-- 使用作用域插槽访问子组件数据 -->
      <SlotScopedExample v-slot="slotProps">
        <p>通过作用域插槽获取子组件数据：</p>
        <p class="highlight">子组件消息：{{ slotProps.text }}</p>
        <p class="highlight">子组件计数：{{ slotProps.count }}</p>
        <p class="highlight">
          子组件用户信息：{{ slotProps.user.name }}，年龄：{{ slotProps.user.age }}
        </p>
      </SlotScopedExample>

      <!-- 解构写法 -->
      <SlotScopedExample v-slot="{ text, count, user }">
        <p>使用解构语法：</p>
        <p class="highlight">消息：{{ text }}</p>
        <p class="highlight">计数：{{ count }}</p>
        <p class="highlight">用户：{{ user.name }}</p>
      </SlotScopedExample>

      <p>高级列表组件示例</p>
      <div>
        <FancyList api-url="url" :per-page="10">
          <template #item="{ body, username, likes }">
            <div class="item">
              <p>{{ body }}</p>
              <p class="meta">by {{ username }} | {{ likes }} likes</p>
            </div>
          </template>
        </FancyList>
      </div>

      <p>无渲染组件</p>
      <div>
        <MouseTracker>
          <!-- v-slot="{ x, y }" -->
          <template #default="{ x, y }">
            <div>鼠标位置：{{ x }}, {{ y }}</div>
          </template>
        </MouseTracker>
      </div>
    </div>
  </div>
</template>

<style scoped>
.highlight {
  color: #42b883;
  font-weight: bold;
  background-color: #f0f9f4;
  padding: 4px 8px;
  border-radius: 4px;
  margin: 4px 1px;
  display: inline-block;
}
</style>
