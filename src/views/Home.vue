<template>
  <div class="home">
    <div class="intro-container">
    <Intro />
    </div>
  </div>
</template>

<script>
import Intro from '../components/Intro.vue'

export default {
  name: 'Home',
  components: {
    Intro,
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
