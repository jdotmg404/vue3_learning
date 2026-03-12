<script setup lang="ts">
import { myInjectionKey } from '@/stores/key.ts'
import { inject } from 'vue'
const injected = inject(myInjectionKey)
</script>

<template>{{ injected.count }}</template>

<style scoped></style>
