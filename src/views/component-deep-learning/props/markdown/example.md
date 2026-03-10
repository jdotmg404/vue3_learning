主要有两种方式
1. 使用字符串数组
```vue
<script setup>
const props = defineProps(['foo'])
console.log(props.foo)
</script>
```
2. 使用对象
```vue
<script setup>
const props = defineProps({
  title: String,
  likes: Number
})
</script>
```

3. 使用类型标注（搭配TypeScript）
```vue
<script setup lang="ts">
defineProps<{
  title?: string
  likes?: number
}>()
</script>
```
