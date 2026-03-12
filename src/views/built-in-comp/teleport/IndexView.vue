<script setup lang="ts">
import Modal from '@/views/built-in-comp/teleport/components/Modal.vue'
import { ref } from 'vue'
import ChildModal from '@/views/built-in-comp/teleport/components/ChildModal.vue'

const showModal = ref(false)
const message = ref('这是来自父组件的消息')
const isMobile = ref(true)
const toggleFull = () => {
  //
}
</script>

<template>
  <div>
    <h1>Teleport</h1>

    <h2>1-基本用法</h2>
    <div>
      <ElButton id="show-modal" @click="showModal = true">Show Modal</ElButton>
      <Teleport to="body">
        <!-- 使用这个 modal 组件，传入 prop -->
        <Modal :show="showModal" @click="showModal = false">
          <template #header>
            <h3>Modal Title</h3>
          </template>
          <p>Modal Content</p>
        </Modal>
      </Teleport>
    </div>
    <br />

    <h2>2-搭配组件使用</h2>
    <div class="parent-container">
      <MyInput v-model="message" />
      <!-- 虽然被 Teleport 到了 body，但在代码逻辑上它仍是这里的子组件 -->
      <Teleport to="body">
        <ChildModal :msg="message"></ChildModal>
      </Teleport>
    </div>
    <br />

    <h2>3-禁用Teleport</h2>
    <div>
      <p>isMobile: {{ isMobile }}</p>
      <Teleport :disabled="isMobile" to="body">
        <Modal :show="!isMobile" @click="isMobile = !isMobile"></Modal>
      </Teleport>
    </div>
    <br />

    <h2>4-多个 Teleport 共享目标</h2>
    <div>
      <!-- 组件 A：登录模块 -->
      <Teleport to="#notification-container">
        <div class="toast">欢迎回来，张三！</div>
      </Teleport>

      <!-- 组件 B：系统监控模块 -->
      <Teleport to="#notification-container">
        <div class="toast">您的磁盘空间快满了。</div>
      </Teleport>
    </div>
    <br />

    <h2>5-延迟解析的 Teleport</h2>
    <div>
      <!-- 使用 defer，告诉 Vue：别急，等会儿再找目标 -->
      <Teleport defer to="#controls-target">
        <ElButton @click="toggleFull">全屏模式</ElButton>
      </Teleport>

      <div class="video-player">
        <!-- 目标容器虽然在后面，但因为延迟解析，传送能成功 -->
        <div id="controls-target"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.parent-container {
  border: 2px solid blue;
  padding: 10px;
}
</style>
