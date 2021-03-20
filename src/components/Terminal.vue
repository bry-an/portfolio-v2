<template>
  <div class="terminal">
    <label for="prompt">root@bry:~$</label>
    <span
      contenteditable="true"
      type="text"
      name="terminal"
      v-bind="terminalInput"
      class="terminal-input"
    >
      &nbsp;
    </span>
    <span class="block-cursor">&nbsp;</span>
  </div>
</template>

<script>
import { ref, watch } from 'vue'

export default {
  setup() {
    const terminalInput = ref('')
    watch(terminalInput, (newVal) => {
      if (newVal === '') {
        terminalInput.value = ' '
      }
    })
    return {
      terminalInput,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/bry.scss';

.terminal {
  font-family: 'Source Code Pro', monospace;
  background-color: black;
  color: $bry-andes;
  border-radius: 3px;
}
.terminal-input {
  caret-color: transparent;
  background-color: black;
}
.block-cursor {
  background-color: $bry-andes;
}
</style>
