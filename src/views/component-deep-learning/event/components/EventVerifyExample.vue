<script setup lang="ts">
import { ElForm, ElMessage } from 'element-plus'
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const emit = defineEmits({
  // 没有校验
  click: null,

  // 带校验的 submit 事件（仅用于开发警告，不能阻止执行）
  submit: ({ email, password }) => {
    if (email && password) {
      return true
    } else {
      console.warn(
        '[Vue warn]: Invalid event arguments: event validation failed for event "submit".',
      )
      return false
    }
  },
})

function submitForm(email: string, password: string) {
  // 在 emit 前进行校验，阻止不合法的事件触发
  if (!email || !password) {
    ElMessage.warning('请填写邮箱和密码')
    return // 阻止继续执行，不会触发 submit 事件
  }

  // 校验通过才触发事件
  emit('submit', { email, password })
}

function clickTest() {
  emit('click')
}
</script>

<template>
  <ElForm>
    <ElFormItem>
      <MyInput v-model="email" placeholder="请输入邮箱" />
    </ElFormItem>
    <ElFormItem>
      <MyInput v-model="password" placeholder="请输入密码" />
    </ElFormItem>
    <ElFormItem>
      <ElButton @click="clickTest">测试点击事件</ElButton>
      <ElButton @click="submitForm(email, password)">提交</ElButton>
    </ElFormItem>
  </ElForm>
</template>

<style scoped></style>
