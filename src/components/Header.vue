<template>
  <div>
    <div class="header flex justify-between items-baseline">
      <div>
        <h1 class="tracking-wide inline">
          Bryan Yunis
        </h1>
        <h3 class="header-title inline">
          > Software Engineer
        </h3>
      </div>
      <div class="flex justify-center items-baseline nav-box">
        <span class="cursor-pointer mr-12">
          Home
        </span>
        <span class="cursor-pointer mr-12">
          Vision
        </span>
        <span class="cursor-pointer">
          Projects
        </span>
      </div>
    </div>
    <hr>
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
  padding-top: 1rem;
  .header-title {
    font-family: 'Source Code Pro';
  }
  .nav-box {
    font-family: 'Source Code Pro', monospace;
    font-size: $font-large;
    .nav-box-item {
      &:hover {
        font-weight: 700;
      }
    }
  }
}
  hr {
    border-top: 1px solid $bry-andes;
    width: 90%;
    margin: auto;
  }
</style>
