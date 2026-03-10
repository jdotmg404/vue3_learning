<script setup lang="ts">
import { ref } from 'vue'

const text = ref('')
const multiText = ref('')
const checked = ref(false)
const multiChecked = ref([])
const picked = ref('')
const selected = ref('')
const multiSelected = ref([])
const toggle = ref('no')
const msg = ref('')
const age = ref(0)
</script>

<template>
  <div>
    <h1>表单输入绑定</h1>
    <!--    -->
    <p>单行text: {{ text }}</p>
    <el-input style="width: 200px" v-model="text" />
    <!--    -->
    <p>多行text:</p>
    <p style="white-space: pre-line">{{ multiText }}</p>
    <el-input style="width: 200px" type="textarea" v-model="multiText" />
    <!--    -->
    <p>复选框: {{ checked }}</p>
    <el-checkbox type="checkbox" id="checkbox" v-model="checked" :label="checked" />
    <!--    -->
    <p>多选框: {{ multiChecked }}</p>
    <el-checkbox-group v-model="multiChecked">
      <el-checkbox type="checkbox" id="jack" value="Jack" label="Jack" />
      <el-checkbox type="checkbox" id="John" value="John" label="John" />
      <el-checkbox type="checkbox" id="Mike" value="Mike" label="Mike" />
    </el-checkbox-group>
    <!--    -->
    <p>单选框: {{ picked }}</p>
    <el-radio-group v-model="picked">
      <el-radio value="value A">label A</el-radio>
      <el-radio value="value B">label B</el-radio>
      <el-radio value="value C">label C</el-radio>
    </el-radio-group>
    <!--    -->
    <p>单选选择器: {{ selected }}</p>
    <el-select style="width: 200px" v-model="selected">
      <el-option disabled label="Option A" value="value A" />
      <el-option label="Option B" value="value B" />
      <el-option label="Option C" value="value C" />
    </el-select>

    <!--    -->
    <p>多选选择器: {{ multiSelected }}</p>
    <el-select style="width: 200px" multiple v-model="multiSelected">
      <el-option disabled label="Option A" value="value A" />
      <el-option label="Option B" value="value B" />
      <el-option label="Option C" value="value C" />
    </el-select>

    <!--    -->
    <p>值绑定</p>
    <el-checkbox true-value="yes" false-value="no" v-model="toggle"></el-checkbox>
    <!--    -->
    <h2>修饰符</h2>
    <p>.lazy修饰符</p>
    <!-- 在 "change" 事件后同步更新而不是 "input" -->
    <el-input v-model.lazy="msg" />
    <p>.number修饰符</p>
    <!-- 让用户输入自动转换为数字 -->
    <input v-model.number="age" />
    <p>.trim修饰符</p>
    <!-- 默认自动去除用户输入内容中两端的空格 -->
    <el-input v-model.trim="msg" />
  </div>
</template>

<style scoped></style>
