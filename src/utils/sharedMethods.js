import { reactive } from 'vue'

const navItemPositions = reactive({ vision: null, projects: null, contact: null })

function getYPositionOfElement(id) {
  const yOffset = -90
  const element = document.getElementById(id)
  if (id === 'contact') {
    return document.body.offsetHeight - window.innerHeight // bottom
  }
  return Math.ceil(element.getBoundingClientRect().top + window.pageYoffset + yOffset)
}

function getNavItemPositions() {
  navItemPositions.vision = getYPositionOfElement('vision')
  navItemPositions.projects = getYPositionOfElement('projects')
  navItemPositions.contact = getYPositionOfElement('contact')
}

function scroll(id) {
  window.scrollTo({ top: id === 'home' ? 0 : getYPositionOfElement(id), behavior: 'smooth' })
}

function scrollListener(ref) {
  document.addEventListener('scroll', () => {
    ref.value = window.scrollY
  })
}
export { scrollListener, scroll, getNavItemPositions, navItemPositions }
