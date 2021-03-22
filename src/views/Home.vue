<template>
  <div class="home">
    <div class="intro-container">
      <Intro />
    </div>
    <div class="philosophy-container">
      <Philosophy />
    </div>
  </div>
</template>

<script>
import Intro from '../components/Intro.vue'
import Philosophy from '../components/Philosophy.vue'

export default {
  name: 'Home',
  components: {
    Intro,
    Philosophy,
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/bry.scss';

.home {
  width: 80%;
  margin: 3rem auto;
  font-size: $font-large;
  .intro-container {
    margin-top: 10vmin;
  }
  .philosophy-container {
    margin-top: 20vmin;
  }
}
</style>
