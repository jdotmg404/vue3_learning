所有的 props 都遵循着 `单向绑定` 原则，props 因父组件的更新而变化，自然地将新的状态向下流往子组件，而不会逆向传递。

想要更改一个 prop 的需求通常来源于以下两种场景:

1. prop 被用于传入初始值；而子组件想在之后将其作为一个局部数据属性。

在这种情况下，最好是新定义一个局部数据属性，从 props 上获取初始值即可:

```vue
const props = defineProps(['initialCounter'])

// 计数器只是将 props.initialCounter 作为初始值
// 像下面这样做就使 prop 和后续更新无关了
const counter = ref(props.initialCounter)
```

2. 需要对传入的 prop 值做进一步的转换。

在这种情况中，最好是基于该 prop 值定义一个计算属性: 

```vue
const props = defineProps(['size'])

// 该 prop 变更时计算属性也会自动更新
const normalizedSize = computed(() => props.size.trim().toLowerCase())
```

注意：
- 当对象或数组作为 props 被传入时，虽然子组件无法更改 props 绑定，但仍然可以更改对象或数组内部的值。
  - 这是因为 JavaScript 的对象和数组是按引用传递，对 Vue 来说，阻止这种更改需要付出的代价异常昂贵。
- 在大多数场景下，子组件应该抛出一个事件来通知父组件做出改变。