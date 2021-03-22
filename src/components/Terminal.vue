<template>
  <div>
    <div
      ref="terminal"
      class="terminal"
    />
  </div>
</template>

<script>
import { ref, onMounted, nextTick } from 'vue'
import '../assets/jquery.console.js'
import $ from 'jquery'
import { handleTerminalInput, currentRoute } from '../utils/terminal.js'

export default {
  setup() {
    const refreshKey = ref(1)
    const terminal = ref(null)
    const commandHandle = (line) => {
      nextTick(() => {
        terminal.value.scrollTop = terminal.value.scrollHeight
      })
      return handleTerminalInput(line)
    }
    const resetConsole = () => {
      $(terminal.value).console({
        promptLabel: `root@bry:~/${currentRoute.value}$ `,
        promptHistory: true,
        commandHandle,
        cols: 5,
        welcomeMessage: '> Type \'help\' for a list of commands ',
      })
    }
    onMounted(() => {
      resetConsole()
    })

    const terminalInput = ref('')
    return {
      terminal,
      terminalInput,
      refreshKey,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/bry.scss';

.terminal {
  font-family: 'Source Code Pro', monospace;
  font-size: $font-small;
  background-color: black;
  color: $bry-andes;
  border-radius: 5px;
  overflow-y: scroll;
  height: 200px;
  padding: 1rem;
}
</style>
