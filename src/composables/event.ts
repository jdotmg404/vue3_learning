import { onMounted, onUnmounted } from 'vue'

export function useEventListener<K extends keyof WindowEventMap>(
  target: Window,
  event: K,
  callback: (this: Window, ev: WindowEventMap[K]) => any,
): void
export function useEventListener<K extends keyof DocumentEventMap>(
  target: Document,
  event: K,
  callback: (this: Document, ev: DocumentEventMap[K]) => any,
): void
export function useEventListener<K extends keyof HTMLElementEventMap>(
  target: HTMLElement,
  event: K,
  callback: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any,
): void
export function useEventListener(
  target: EventTarget,
  event: string,
  callback: EventListenerOrEventListenerObject,
): void {
  onMounted(() => {
    target.addEventListener(event, callback)
  })
  onUnmounted(() => {
    target.removeEventListener(event, callback)
  })
}
