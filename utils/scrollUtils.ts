export function scrollToBottom(element: HTMLDivElement | null, smooth = true) {
  if (element) {
    element.scrollTo({
      top: element.scrollHeight,
      behavior: smooth ? 'smooth' : 'auto'
    })
  }
}