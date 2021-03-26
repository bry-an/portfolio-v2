import { reactive } from 'vue'

const navItemPositions = reactive({ vision: null, projects: null, contact: null })

function getNavItemPositions() {
  navItemPositions.vision = document.getElementById('vision').getBoundingClientRect().top + window.pageYOffset - 90
  navItemPositions.projects = document.getElementById('projects').getBoundingClientRect().top + window.pageYOffset - 90
  navItemPositions.contact = document.body.offsetHeight - window.innerHeight
}

function scroll(id) {
  const yOffset = -90
  const element = document.getElementById(id)
  const y = Math.ceil(element.getBoundingClientRect().top + window.pageYOffset + yOffset)
  window.scrollTo({ top: id === 'home' ? 0 : y, behavior: 'smooth' })
}

function scrollListener(ref) {
  document.addEventListener('scroll', () => {
    ref.value = window.scrollY
  })
}
export { scrollListener, scroll, getNavItemPositions, navItemPositions }
