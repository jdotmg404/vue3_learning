### Prop命名格式
如果一个 prop 的名字很长，应使用 camelCase 形式，因为它们是合法的 JavaScript 标识符，可以直接在模板的表达式中使用，也可以避免在作为属性 key 名时必须加上引号。

```vue
<script setup>
defineProps({
  greetingMessage: String
})
</script>
```

```vue
<span>{{ greetingMessage }}</span>
```

**注意**
- 组件命名推荐使用 `PascalCase` 形式，提高了模板的可读性，能帮助我们区分Vue组件和原生的HTML元素。
- 对于传递 props 来说，使用 `camelCase` 没有太多优势，因此推荐使用 `kebab-case` 形式

### 静态 vs. 动态 Props

1 - 静态形式的props :

```vue

<BlogPost title="My journey with Vue" />
```
2 - 使用 `v-bind` 或缩写 `:` 来进行动态绑定的 props:

```vue
<!-- 根据一个变量的值动态传入 -->
<BlogPost :title="post.title" />

<!-- 根据一个更复杂表达式的值动态传入 -->
<BlogPost :title="post.title + ' by ' + post.author.name" />
```

### 传递不同的值类型

除了字符串，任何类型的值都可以作为 props 传递，包括：

- Number

```vue
<!-- 虽然 `42` 是个常量，我们还是需要使用 v-bind -->
<!-- 因为这是一个 JavaScript 表达式而不是一个字符串 -->
<BlogPost :likes="42" />

<!-- 根据一个变量的值动态传入 -->
<BlogPost :likes="post.likes" />
```
- Boolean

```vue
<!-- 仅写上 prop 但不传值，会隐式转换为 `true` -->
<BlogPost is-published />

<!-- 虽然 `false` 是静态的值，我们还是需要使用 v-bind -->
<!-- 因为这是一个 JavaScript 表达式而不是一个字符串 -->
<BlogPost :is-published="false" />

<!-- 根据一个变量的值动态传入 -->
<BlogPost :is-published="post.isPublished" />
```

- Array

```vue
<!-- 虽然这个数组是个常量，我们还是需要使用 v-bind -->
<!-- 因为这是一个 JavaScript 表达式而不是一个字符串 -->
<BlogPost :comment-ids="[234, 266, 273]" />

<!-- 根据一个变量的值动态传入 -->
<BlogPost :comment-ids="post.commentIds" />
```

- Object

```vue
<!-- 虽然这个对象字面量是个常量，我们还是需要使用 v-bind -->
<!-- 因为这是一个 JavaScript 表达式而不是一个字符串 -->
<BlogPost
  :author="{
    name: 'Veronica',
    company: 'Veridian Dynamics'
  }"
 />

<!-- 根据一个变量的值动态传入 -->
<BlogPost :author="post.author" />
```

### 使用一个对象绑定多个 prop

如果想要将一个对象的所有属性都当做props 传递给子组件，则可以使用 `v-bind` 语法简写：

```vue
<script setup>
  import { ref } from 'vue'
  const post = ref({
    id: 1,
    title: 'My Journey with Vue',
  }) 
</script>
<template>
  <BlogPost v-bind="post" />
  <!-- 等价于 -->
  <!-- <BlogPost :id="post.id" :title="post.title" /> -->
</template>
```