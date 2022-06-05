import { ref } from 'vue'
import { scroll } from './sharedMethods.js'

const newTab = ref(null)

function openResource(location) {
  let responseText = 'Click the button below!'
  switch (location[0]) {
  case 'linkedin':
    newTab.value = 'http://www.linkedin.com/in/bryan-yunis'
    break
  case 'github':
    newTab.value = 'http://www.github.com/bry-an'
    break
  case 'maks':
    newTab.value = 'https://mi544.dev/'
    break
  default:
    responseText = `Resource '${location[0]}' not found`
  }
  return responseText
}

function scrollTo(id) {
  if (['home', 'vision', 'projects', 'contact'].includes(id)) {
    scroll(id)
    return true
  }
  return `${id} not found`
}

function help(topic) {
  if (!topic) {
    return 'Available Commands:\nshow [\'github\'] [\'linkedin\']: open resource\nskills: list skills\nls | cd: navigate\nabout: about this console'
  }
  if (topic === 'show') return 'show [\'github\'] [\'linkedin\']: open resource'
  return `${topic} not a help item`
}
const skills = 'Javascript, Clojure, PHP, HTML/CSS, Vue, Svelte, Node, AWS, Docker, web bundlers, Jest (testing), Git, Linux'
function handleTerminalInput(input) {
  const [command, ...rest] = input.split(' ')
  if (command === 'show') return openResource(rest)
  if (command === 'help') return help(rest[0])
  if (command === 'ls') return 'home vision projects contact'
  if (command === 'cd') return scrollTo(rest[0])
  if (command === 'sudo') return 'You are already super duper!'
  if (command === 'chmod') return 'Very clever'
  if (command === 'skills') return `A sampling: ${skills}`
  if (command === 'rm' || command === 'mv') return 'Everything here stays here'
  if (command === ':(){') return 'Hey that is mean and does not work here'
  if (command === 'mkfs.ext4') return 'Why not do good things with your knowledge?'
  if (command === 'about') return 'H/t Chris Done https://github.com/chrisdone/jquery-console'
  if (command === 'maks') return openResource(['maks'])
  return `Command '${input.trim().split(' ')[0]}' not found`
}

export { handleTerminalInput, newTab }
