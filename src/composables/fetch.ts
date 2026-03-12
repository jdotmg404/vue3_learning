import { type MaybeRef, type Ref, ref, toValue, watchEffect } from 'vue'

export interface UseFetchResult<T> {
  data: Ref<T | null>
  error: Ref<Error | null>
}

export function useFetch<T = unknown>(url: MaybeRef<string>): UseFetchResult<T> {
  const data = ref<T | null>(null) as Ref<T | null>
  const error = ref<Error | null>(null) as Ref<Error | null>

  watchEffect(async () => {
    // reset state before fetching...
    data.value = null
    error.value = null

    // resolve the url value synchronously so it's tracked as a
    // dependency by watchEffect()
    const urlValue = toValue(url)

    try {
      // artificial delay / random error
      await timeout()
      // unref() will return the ref value if it's a ref
      // otherwise the value will be returned as-is
      const res = await fetch(urlValue)
      data.value = (await res.json()) as T
    } catch (e) {
      error.value = e instanceof Error ? e : new Error(String(e))
    }
  })

  return { data, error }
}

// artificial delay
function timeout(): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.3) {
        resolve()
      } else {
        reject(new Error('Random error'))
      }
    }, 300)
  })
}
