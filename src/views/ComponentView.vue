<script setup lang="ts">
import { defineComponent, ref, h } from 'vue'
import BlogPost from '@/views/components/BlogPost.vue'

const posts = ref([
  { id: 1, title: 'My journey with Vue' },
  { id: 2, title: 'Blogging with Vue' },
  { id: 3, title: 'Why Vue is so fun' },
])

const postFontSize = ref(1)

const currentTab = ref('Home')

const Home = defineComponent({
  setup() {
    return () => h('div', '我是Home组件')
  },
})
const Posts = defineComponent({
  setup() {
    return () => h('div', '我是Posts组件')
  },
})
const Archive = defineComponent({
  setup() {
    return () => h('div', '我是Archive组件')
  },
})
const tabs = { Home, Posts, Archive }
</script>

<template>
  <h1>组件基础</h1>
  <h2>1-基础示例</h2>
  <div :style="{ fontSize: postFontSize + 'em' }">
    <blog-post
      v-for="post in posts"
      :title="post.title"
      :key="post.id"
      @enlarge-text="postFontSize += 0.1"
    ></blog-post>
  </div>

  <h2>2-动态组件</h2>
  <div class="demo">
    <!-- 修复：遍历对象用 (value, key) 或直接用 Object.keys -->
    <el-button
      v-for="(component, name) in tabs"
      :key="name"
      :class="['tab-button', { active: currentTab === name }]"
      @click="currentTab = name"
      >{{ name }}</el-button
    >

    <component :is="tabs[currentTab]" class="tab"></component>
  </div>
</template>

<style scoped></style>
