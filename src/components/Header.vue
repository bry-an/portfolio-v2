<template>
  <div class="header flex justify-between items-baseline">
    <div>
      <div class="header-name tracking-wide">
        Bryan Yunis
      </div>
      <div class="header-title">
        > Software Engineer
      </div>
    </div>
    <div class="flex justify-center items-end nav-box">
      <div class="mr-16">
        Home
      </div>
      <div class="ml-2">
        About
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>
<style lang="scss" scoped>
@import '@/assets/bry.scss';

.header {
  font-family: 'Source Sans Pro', sans-serif;
  color: $bry-andes;
  width: 90%;
  margin: auto;
  padding-top: 2rem;
  .header-name {
    font-size: 9.101vmin;
  }
  .header-title {
    font-family: 'Source Code Pro';
    font-size: 5.625vmin;
  }
  .cursor {
    display: inline-block;
    animation: blinking 1s linear infinite;
    color: transparent;
    background-color: $bry-andes;
  }
  .nav-box {
    font-family: 'Source Code Pro', monospace;
    font-size: $font-large;
  }
}
@keyframes blinking {
  0% {
    background-color: $bry-chalk;
  }
  100% {
    background-color: $bry-andes;
  }
}
</style>
