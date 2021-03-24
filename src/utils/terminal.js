import { ref } from 'vue'

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

function help(topic) {
  if (!topic) return 'Available Commands:\nshow [\'github\'] [\'linkedin\'] [\'resume\']: open resource\nskills: list skills\nabout: about this console'
  return `${topic} not a help item`
}
const skills = 'Javascript, HTML/CSS, Vue, Node, PHP, Docker, Webpack, TypeScript, Jest (testing), Git, Linux\ntype \'show resume\' for more'
// const commandStack = []
function handleTerminalInput(input) {
  const [command, ...rest] = input.split(' ')
  if (command === 'show') return openResource(rest)
  if (command === 'help') return help(rest.pop())
  if (command === 'ls') return 'home about'
  if (command === 'sudo') return 'You are already super duper!'
  if (command === 'chmod') return 'Very clever'
  if (command === 'skills') return `A sampling: ${skills}`
  if (command === 'rm') return 'Everything here stays'
  if (command === 'about') return 'H/t Chris Done https://github.com/chrisdone/jquery-console'
  return `Command '${input.trim().split(' ')[0]}' not found`
}

export { handleTerminalInput, newTab }
