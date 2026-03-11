<script setup lang="ts">
import Child from '@/views/component-deep-learning/dependency-injection/components/Child.vue'
import { provide, readonly, ref } from 'vue'
import { getImage } from '@/utils/images'
import ProviderUpdateExample from '@/views/component-deep-learning/dependency-injection/components/ProviderUpdateExample.vue'
import ProviderReadonlyExample from '@/views/component-deep-learning/dependency-injection/components/ProviderReadonlyExample.vue'

const message = ref('Hello World!')
provide('message', message)

const location = ref('Shanghai')

function updateLocation() {
  location.value = 'beijing'
}
provide('location', {
  location,
  updateLocation,
})

const count = ref(0)

const increment = () => {
  count.value++
}
provide('countState', { count: readonly(count), increment })
</script>

<template>
  <div>
    <h1>依赖注入</h1>

    <h2>1-示例</h2>
    <div>
      <p>
        为了解决prop逐级透传的问题，任何后代的组件树，无论层级有多深，都可以注入由父组件提供给整条链路的依赖。
      </p>
      <img :src="getImage('provide-inject.png')" alt="依赖注入示意图" style="max-width: 600px" />
      <ElInput v-model="message" />
      <Child></Child>
    </div>
    <br />

    <h2>2-注意事项</h2>
    <div>
      <p>当提供 / 注入响应式的数据时，建议尽可能将任何对响应式状态的变更都保持在供给方组件中。</p>
      <p>
        如果有需要在注入方组件中更改数据的场景。推荐在供给方组件内声明并提供一个更改数据的方法函数。
      </p>
      <ProviderUpdateExample></ProviderUpdateExample>
      <p>如果想确保提供的数据不能被注入方的组件更改，可以使用 readonly() 来包装提供的值。</p>

      <ProviderReadonlyExample></ProviderReadonlyExample>
    </div>
    <br />

    <h2>1-示例</h2>
    <div>
      <p></p>
    </div>
    <br />
  </div>
</template>

<style scoped></style>
