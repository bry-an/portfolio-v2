import { ref } from 'vue'
import { scroll } from './sharedMethods.js'

const newTab = ref(null)

function openResource(location) {
  let responseText = 'Click the button below!'
  switch (location[0]) {
  case 'linkedin': newTab.value = 'http://www.linkedin.com/in/bryan-yunis'
    break
  case 'github': newTab.value = 'http://www.github.com/bry-an'
    break
  case 'resume': newTab.value = 'https://s3-us-west-2.amazonaws.com/bryanyunis.com/resume/bryan-yunis-resume.pdf'
    break
  default: responseText = `Resource '${location[0]}' not found`
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
  if (!topic) return 'Available Commands:\nshow [\'github\'] [\'linkedin\'] [\'resume\']: open resource\nskills: list skills\nls | cd: navigate\nabout: about this console'
  return `${topic} not a help item`
}
const skills = 'Javascript, HTML/CSS, Vue, Node, PHP, Docker, Webpack, TypeScript, Jest (testing), Git, Linux\ntype \'show resume\' for more'
// const commandStack = []
function handleTerminalInput(input) {
  const [command, ...rest] = input.split(' ')
  if (command === 'show') return openResource(rest)
  if (command === 'help') return help(rest[0])
  if (command === 'ls') return 'home vision projects contact'
  if (command === 'cd') return scrollTo(rest[0])
  if (command === 'sudo') return 'You are already super duper!'
  if (command === 'chmod') return 'Very clever'
  if (command === 'skills') return `A sampling: ${skills}`
  if (command === 'rm') return 'Everything here stays'
  if (command === 'about') return 'H/t Chris Done https://github.com/chrisdone/jquery-console'
  return `Command '${input.trim().split(' ')[0]}' not found`
}

export { handleTerminalInput, newTab }
