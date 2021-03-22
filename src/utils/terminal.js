import { ref } from 'vue'

const currentRoute = ref('')

function handleRedirect(route) {
  return `redirecting to ${route}`
}

function help(topic) {
  if (!topic) return 'Available Commands:\n ls: Show available sections\n'
  return `${topic} not a help item`
}

function handleTerminalInput(input) {
  const [command, ...rest] = input.split(' ')
  if (command === 'cd') return handleRedirect(rest)
  if (command === 'help') return help(rest.pop())
  if (command === 'ls') return 'home about'
  if (command === 'sudo') return 'There are no super users!'
  if (command === 'chmod') return 'Very clever'
  if (command === 'rm') return 'Everything here stays'
  return `Command '${input.trim()}' not found`
}

export { handleTerminalInput, currentRoute }
