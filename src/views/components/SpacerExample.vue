<script setup lang="ts">
import Spacer from './Spacer.vue'
</script>

<template>
  <div class="spacer-example">
    <h2>Spacer 组件示例</h2>

    <h3>1. 默认用法</h3>
    <Spacer />

    <h3>2. 自定义高度（数字 - px）</h3>
    <Spacer :height="200" text="高度 200px" />

    <h3>3. 自定义高度（字符串 - vh）</h3>
    <Spacer height="50vh" text="高度 50vh" />

    <h3>4. 透明背景</h3>
    <Spacer :height="150" text="透明背景" :transparent="true" />

    <h3>5. 自定义背景色</h3>
    <Spacer :height="150" text="自定义蓝色背景" bg-color="#409eff" />

    <h3>6. 自定义内容（使用 slot）</h3>
    <Spacer :height="200">
      <div class="custom-content">
        <h4>自定义内容</h4>
        <p>可以放置任意内容</p>
        <button>点击按钮</button>
      </div>
    </Spacer>

    <h3>7. 无文本</h3>
    <Spacer :height="100" text="" />
  </div>
</template>

<style scoped>
.spacer-example {
  padding: 20px;
}

.spacer-example h2 {
  margin-top: 0;
  color: #303133;
}

.spacer-example h3 {
  margin-top: 30px;
  margin-bottom: 10px;
  color: #606266;
  font-size: 16px;
}

.custom-content {
  text-align: center;
  color: #fff;
}

.custom-content h4 {
  margin: 0 0 10px 0;
}

.custom-content p {
  margin: 0 0 15px 0;
  color: rgba(255, 255, 255, 0.9);
}

.custom-content button {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #fff;
  color: #409eff;
  cursor: pointer;
  font-size: 14px;
}

.custom-content button:hover {
  background-color: #f5f7fa;
}
</style>
