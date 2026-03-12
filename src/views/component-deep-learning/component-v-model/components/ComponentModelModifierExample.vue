<script setup lang="ts">
const [model, modifiers] = defineModel({
  set: (value: string) => {
    if (modifiers.capitalize) {
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
    return value
  },
})
</script>

<template>
  <MyInput type="text" v-model="model"></MyInput>
</template>

<style scoped></style>
