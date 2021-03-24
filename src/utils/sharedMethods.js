export function scroll(id) {
  const yOffset = -90
  const element = document.getElementById(id)
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
  window.scrollTo({ top: id === 'home' ? 0 : y, behavior: 'smooth' })
}
