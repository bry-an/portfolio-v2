<template>
  <div class="home">
    <div class="intro-container">
      <Intro />
    </div>
    <div>
      <Terminal />
    </div>
  </div>
</template>

<script>
import Intro from '../components/Intro.vue'
import Terminal from '../components/Terminal.vue'

export default {
  name: 'Home',
  components: {
    Intro,
    Terminal,
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/bry.scss';

.home {
  width: 70%;
  margin: 3rem auto;
  font-size: $font-large;
  .intro-container {
    margin-top: 30vmin;
  }
}
</style>
