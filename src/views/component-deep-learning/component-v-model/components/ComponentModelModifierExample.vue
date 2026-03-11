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
  <ElInput style="width: 200px" type="text" v-model="model"></ElInput>
</template>

<style scoped></style>
