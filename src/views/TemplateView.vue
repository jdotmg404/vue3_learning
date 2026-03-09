<script setup lang="ts">
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'

import * as Mock from 'mockjs'
import dayjs from 'dayjs'
import imageUrl from '@/assets/images/directive.png'
import avatorImage from '@/assets/images/middle_avator.jpg'
const activeName = ref('first')
const handleClick = (tab: TabsPaneContext, event: Event) => {
  // console.log(tab, event)
}
const message = '简单的Mustache插值字符串'
const rawHtml = `
<div>
  <p style="color: cornflowerblue">带颜色字体</p>
  <img alt="暂无图片" src="${avatorImage}" style="height: 42px">
</div>
`
const isButtonDisabled = ref(true)
const objectOfAttrs = {
  id: 'container',
  class: 'wrapper',
  style: 'background-color: green;height:100px;width:200px',
}
const number = ref(0)
const ok = ref(true)
const id = Mock.Random.guid()
const timeFormat = (str: number) => dayjs(str).format('YYYY-MM-DD HH:mm:ss')
const seen = ref(true)
const href = 'https://www.baidu.com'
const doSomething = (e: Event) => {
  console.log('doSomething', e)
}
const attributeName = ref('href')
const eventName = ref('click')
</script>

<template>
  <!--  2-模板语法  -->
  <el-tabs
    v-model="activeName"
    class="content-container"
    @tab-click="handleClick"
    style="width: 100%"
  >
    <el-tab-pane label="文本插值" name="first"
      ><div>
        <p>使用文本插值渲染HTML：</p>
        <p>{{ message }}</p>
      </div></el-tab-pane
    >
    <el-tab-pane label="原始HTML" name="second">
      <div>
        <p>使用v-html指令渲染HTML：</p>
        <span v-html="rawHtml"></span>
      </div>
    </el-tab-pane>
    <el-tab-pane label="Attribute绑定" name="third">
      <p>响应式地绑定一个 attribute 属性：</p>
      <div>
        <div>
          切换按钮可用状态：<el-checkbox v-model="isButtonDisabled" />
          <el-button class="btn" :disabled="isButtonDisabled">按钮</el-button>
        </div>
      </div>
      <div>
        <div v-bind="objectOfAttrs"></div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="使用JavaScript表达式" name="four">
      <p>使用 JavaScript 表达式：</p>
      <div>
        <p>四则运算：{{ number + 1 }}</p>
        <p>三目运算符：{{ ok ? 'YES' : 'NO' }}</p>
        <p>字符串反转：{{ message.split('').reverse().join('') }}</p>
        <div :id="`list-${id}`" style="height: 100px; width: 200px; border: 1px solid red"></div>
        <div>使用函数表达式：{{ timeFormat(Date.now()) }}</div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="使用v-xx内置指令" name="five">
      <div>
        <p>1-内置指令 v-if：</p>
        <p v-if="seen">Now you see me</p>
      </div>
      <div>
        <p>2-参数绑定：</p>
        <a :href="href">百度</a>
      </div>
      <div>
        <p>3-监听DOM事件</p>
        <el-button @click="doSomething">点击将在控制台打印</el-button>
      </div>
      <div>
        <p>4-动态参数</p>
        <div>
          <a :[attributeName]="href">百度</a>
        </div>
        <div>
          <el-button @[eventName]="doSomething">点击将在控制台打印</el-button>
        </div>
        <div>
          <p>注意事项：</p>
          <p>
            1. 参数值必须是“字符串”
            白话解释：你放在方括号里的变量，算出来的结果必须是字符串（用来表示属性名）。
            例外：如果是 null，Vue 会贴心地帮你把这个属性整个删掉。 禁忌：别传数字、对象之类的，否则
            Vue 会在控制台给你弹警告。
          </p>
          <p>
            2. 参数名里不能有“空格”或“引号” 白话解释：在 HTML
            标签里，属性名是不允许带空格或引号的，所以 Vue 的动态参数也不行。
            解决方法：如果你需要复杂的逻辑来拼接属性名，请在 JS 里先用 计算属性 (computed)
            算好，直接把结果变量塞进去。
          </p>
          <p>
            3. 在 HTML 文件里写代码时，大写会变小写 注意前提：这只针对你直接在 HTML 文件（比如
            index.html）里写的模板。如果你写的是 .vue 单文件组件，不用担心这个。
            白话解释：浏览器很霸道，它在解析 HTML 时会强制把属性名都变成小写。 杯具案例： 你写的是
            :[someAttr]，浏览器会自动把它变成 :[someattr]。 如果你的代码里定义的是
            someAttr（带大写），Vue 就找不到了，导致功能失效。
          </p>
          <p>
            一句话总结：动态参数尽量只用简单的变量名；如果逻辑复杂，交给计算属性；在 .vue
            文件里写代码最省心。
          </p>
        </div>
      </div>
      <div>
        <p>5-修饰符：</p>
        <el-image :src="imageUrl"></el-image>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<style scoped>
.content-container > .el-tabs__content {
  color: #6b778c;
  font-size: 16px;
  font-weight: 600;
  text-align: left;
}
</style>
