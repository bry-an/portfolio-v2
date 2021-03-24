<template>
  <div>
    <div
      ref="terminal"
      class="terminal"
    />
    <div class="flex justify-center mt-4">
      <button
        :class="['terminal-button', {'visible': newTab, 'invisible': !newTab } ]"
        @click="navigateToResource"
      >
        Take me there
      </button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, nextTick } from 'vue'
import '../assets/jquery.console.js'
import $ from 'jquery'
import { handleTerminalInput, newTab } from '../utils/terminal.js'

export default {
  setup() {
    const terminal = ref(null)
    const terminalInstance = ref(null)
    const commandHandle = (line) => {
      if (line === 'clear') {
        terminalInstance.value.reset()
        return null
      }
      nextTick(() => {
        terminal.value.scrollTop = terminal.value.scrollHeight
      })
      return handleTerminalInput(line)
    }
    const navigateToResource = () => {
      window.open(newTab.value, '_blank')
      newTab.value = null
      terminalInstance.value.reset()
    }
    const resetConsole = () => {
      terminalInstance.value = $(terminal.value).console({
        promptLabel: 'root@bry:~/ ',
        promptHistory: true,
        commandHandle,
        cols: 5,
        welcomeMessage: '> Type \'help\' for a list of commands ',
        fadeOnReset: false,
      })
    }
    onMounted(() => {
      resetConsole()
    })

    const terminalInput = ref('')
    return {
      terminal,
      terminalInput,
      navigateToResource,
      newTab,
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
.terminal-button {
  font-size: $font-small;
  background-color: black;
  color: $bry-andes;
  font-family: 'Source Code Pro', monospace;
  border-radius: 5px;
  padding: 8px;
  border: 1px solid $bry-andes;
}
</style>
