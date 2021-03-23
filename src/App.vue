<template>
  <div class="wrapper">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
  },
}
</script>
<style lang="scss">
@import '@/assets/reset.scss';
@import '@/assets/bry.scss';
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@500;700&display=swap');

.wrapper {
  background-color: $bry-dark-sky;
  width: 100vw;
  font-family: 'Red Hat Display', sans-serif;
  color: $bry-chalk;
  padding-bottom: 3rem;
}
</style>
