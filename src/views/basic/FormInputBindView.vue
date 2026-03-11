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
    <ElInput v-model="text" />
    <!--    -->
    <p>多行text:</p>
    <p style="white-space: pre-line">{{ multiText }}</p>
    <ElInput type="textarea" v-model="multiText" />
    <!--    -->
    <p>复选框: {{ checked }}</p>
    <ElCheckbox type="checkbox" id="checkbox" v-model="checked" :label="checked" />
    <!--    -->
    <p>多选框: {{ multiChecked }}</p>
    <ElCheckboxGroup v-model="multiChecked">
      <ElCheckbox type="checkbox" id="jack" value="Jack" label="Jack" />
      <ElCheckbox type="checkbox" id="John" value="John" label="John" />
      <ElCheckbox type="checkbox" id="Mike" value="Mike" label="Mike" />
    </ElCheckboxGroup>
    <!--    -->
    <p>单选框: {{ picked }}</p>
    <ElRadioGroup v-model="picked">
      <ElRadio value="value A">label A</ElRadio>
      <ElRadio value="value B">label B</ElRadio>
      <ElRadio value="value C">label C</ElRadio>
    </ElRadioGroup>
    <!--    -->
    <p>单选选择器: {{ selected }}</p>
    <ElSelect style="width: 200px" v-model="selected">
      <ElOption disabled label="Option A" value="value A" />
      <ElOption label="Option B" value="value B" />
      <ElOption label="Option C" value="value C" />
    </ElSelect>

    <!--    -->
    <p>多选选择器: {{ multiSelected }}</p>
    <ElSelect style="width: 200px" multiple v-model="multiSelected">
      <ElOption disabled label="Option A" value="value A" />
      <ElOption label="Option B" value="value B" />
      <ElOption label="Option C" value="value C" />
    </ElSelect>

    <!--    -->
    <p>值绑定</p>
    <ElCheckbox true-value="yes" false-value="no" v-model="toggle"></ElCheckbox>
    <!--    -->
    <h2>修饰符</h2>
    <p>.lazy修饰符</p>
    <!-- 在 "change" 事件后同步更新而不是 "input" -->
    <ElInput v-model.lazy="msg" />
    <p>.number修饰符</p>
    <!-- 让用户输入自动转换为数字 -->
    <input v-model.number="age" />
    <p>.trim修饰符</p>
    <!-- 默认自动去除用户输入内容中两端的空格 -->
    <ElInput v-model.trim="msg" />
  </div>
</template>

<style scoped></style>
