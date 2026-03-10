
- Vue 支持将模板中使用 ```kebab-case``` 的标签解析为使用 ```PascalCase``` 注册的组件。
- 这意味着一个以 **MyComponent** 为名注册的组件，在模板 (或由 Vue 渲染的 HTML 元素) 中可以通过
```<MyComponent>``` 或 ```<my-component>``` 引用。
- 这让我们能够使用同样的 JavaScript 组件注册代码来配合不同来源的模板。
