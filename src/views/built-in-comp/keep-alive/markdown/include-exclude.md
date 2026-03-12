`<KeepAlive>` 默认会缓存内部的所有组件实例，但我们可以通过 include 和 exclude prop 来定制该行为。
这两个 prop 的值都可以是：
- 一个以英文逗号分隔的字符串
- 一个正则表达式
- 包含这两种类型的一个数组

```vue
<!-- 以英文逗号分隔的字符串 -->
<KeepAlive include="a,b">
  <component :is="view" />
</KeepAlive>

<!-- 正则表达式 (需使用 `v-bind`) -->
<KeepAlive :include="/a|b/">
  <component :is="view" />
</KeepAlive>

<!-- 数组 (需使用 `v-bind`) -->
<KeepAlive :include="['a', 'b']">
  <component :is="view" />
</KeepAlive>
```

**注意**
- 它会根据组件的 `name` 选项进行匹配，所以组件如果想要条件性地被 `KeepAlive` 缓存，就必须显式声明一个 `name` 选项
- 在 3.2.34 或以上的版本中，使用 `<script setup>` 的单文件组件会自动根据文件名生成对应的 `name` 选项，无需再手动声明。
