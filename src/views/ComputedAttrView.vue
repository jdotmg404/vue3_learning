<script setup lang="ts"></script>

<template>
  <!-- 计算属性 -->
  <div class="content-container">
    <h1>计算属性</h1>
    <p>这是计算属性页面的内容区域</p>
    <div class="content-section">
      <h2>什么是计算属性？</h2>
      <p>计算属性是基于响应式数据进行计算的属性，会自动缓存结果</p>
    </div>
    <div class="content-section">
      <h2>计算属性 vs 方法</h2>
      <p>计算属性有缓存，只有依赖的数据变化时才会重新计算</p>
      <p>方法每次调用都会重新执行</p>
    </div>
    <div class="content-section">
      <h2>计算属性的特点</h2>
      <ul>
        <li>自动缓存</li>
        <li>基于依赖进行更新</li>
        <li>性能优于方法</li>
        <li>支持 getter 和 setter</li>
      </ul>
    </div>
    <div class="content-section">
      <h2>使用场景</h2>
      <p>适合用于复杂的数据计算、格式化、过滤等操作</p>
    </div>
    <div class="content-section">
      <h2>最佳实践</h2>
      <ul>
        <li>优先使用计算属性而非方法</li>
        <li>避免在计算属性中进行副作用操作</li>
        <li>保持计算属性的纯粹性</li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
