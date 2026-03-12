<script setup lang="ts"></script>

<template>
  <div>
    <h1>插件</h1>

    <h2>1-插件类型</h2>
    <p>插件没有严格定义的使用范围，但是插件发挥作用的常见场景主要包括以下几种：</p>
    <p>1.通过 app.component() 和 app.directive() 注册一到多个全局组件或自定义指令。</p>
    <p>2.通过 app.provide() 使一个资源可被注入进整个应用。</p>
    <p>3.向 app.config.globalProperties 中添加一些全局实例属性或方法</p>
    <p>4.一个可能上述三种都包含了的功能库 (例如 vue-router)。</p>
    <br />

    <h2>2-编写插件示例 - i18n 插件</h2>
    <p>{{ $translate('greetings.hello') }}</p>
    <ElButton>{{ $translate('button.confirm') }}</ElButton>
    <br />

    <h2>3-拓展</h2>
    <div>
      <p>
        更多内容请查看：<a
          href="https://cn.vuejs.org/guide/reusability/plugins.html"
          target="_blank"
          >插件</a
        >
      </p>
    </div>
  </div>
</template>

<style scoped></style>
