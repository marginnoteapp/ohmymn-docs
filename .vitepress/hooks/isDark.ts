/** Listen for the HTML Node that has dark class */
export function useDark() {
  const isDark = ref<null | boolean>(null)
  let observer: MutationObserver | null = null

  const setDark = () => {
    isDark.value = document.documentElement.classList.contains("dark")
  }

  onMounted(() => {
    setDark()
    observer = new MutationObserver(setDark)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    })
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
  })
  return isDark
}
