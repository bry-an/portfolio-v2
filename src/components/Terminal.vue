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

export default {
  setup() {
    const terminal = ref(null)
    const commandHandle = (line) => {
      // eslint-disable-next-line
      nextTick(() => { terminal.value.scrollTop = terminal.value.scrollHeight })

      if (line === 'ls') {
        return 'home about'
      }
      return `Command '${line}' not found`
    }
    onMounted(() => {
      $(terminal.value).console({
        promptLabel: 'root@bry:~$ ',
        promptHistory: true,
        commandHandle,
        cols: 5,
        welcomeMessage: '> Use bash commands to navigate',
      })
    })

    const terminalInput = ref('')
    return {
      terminal,
      terminalInput,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/bry.scss';

.terminal {
  font-family: 'Source Code Pro', monospace;
  font-size: $font-medium;
  background-color: black;
  color: $bry-andes;
  border-radius: 5px;
  overflow-y: scroll;
  max-height: 200px;
}
</style>
