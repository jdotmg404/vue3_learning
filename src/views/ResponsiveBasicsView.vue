<script setup lang="ts"></script>

<template>
  <!-- 响应式基础 -->
  <div class="page-container">
    <h1>响应式基础</h1>
    <p>这是响应式基础页面的内容区域</p>
    <div class="content-section">
      <h2>什么是响应式？</h2>
      <p>响应式是指当数据发生变化时，视图会自动更新</p>
    </div>
    <div class="content-section">
      <h2>Vue 3 的响应式系统</h2>
      <p>Vue 3 使用 Proxy 来实现响应式，相比 Vue 2 的 Object.defineProperty 有更好的性能</p>
    </div>
    <div class="content-section">
      <h2>ref 和 reactive</h2>
      <p>ref 用于基本类型数据，reactive 用于对象类型数据</p>
    </div>
    <div class="content-section">
      <h2>响应式原理</h2>
      <p>通过 Proxy 拦截对象的操作，实现数据的自动追踪和更新</p>
    </div>
    <div class="content-section">
      <h2>最佳实践</h2>
      <ul>
        <li>基本类型使用 ref</li>
        <li>对象类型使用 reactive</li>
        <li>在模板中自动解包 ref</li>
        <li>在脚本中需要 .value 访问 ref 的值</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  width: 100%;
  text-align: left;
}

.page-container h1 {
  margin-bottom: 16px;
}

.page-container h2 {
  margin: 24px 0 12px 0;
}

.page-container p {
  margin-bottom: 12px;
  line-height: 1.6;
}

.page-container ul {
  margin-left: 20px;
  margin-bottom: 12px;
}

.page-container li {
  margin-bottom: 8px;
}

.content-section {
  margin-top: 24px;
}
</style>
