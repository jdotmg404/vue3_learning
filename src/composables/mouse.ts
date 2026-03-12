import { ref, onMounted, onUnmounted } from 'vue'
import { useEventListener } from '@/composables/event.ts'
export function useMouse() {
  const x = ref(0)
  const y = ref(0)

  function update(e: MouseEvent) {
    x.value = e.pageX
    y.value = e.pageY
  }

  /*onMounted(() => {
    window.addEventListener('mousemove', update)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', update)
  })*/

  useEventListener(window, 'mousemove', update)

  return { x, y }
}
