<template>
  <div
    class="footer tracking-wide flex justify-center items-end"
  >
    <div class="sm:mx-12 mx-2">
      <a
        href="http://www.linkedin.com/in/bryan-yunis"
        target="_blank"
      >
        <img
          class="logo"
          :src="require('../assets/linkedin.png')"
          alt="linkedIn logo"
        >
      </a>
    </div>
    <div class="text-andes sm:mx-12 mx-2">
      &#169; Bryan Yunis
    </div>
    <div class="sm:mx-12 mx-2">
      <a
        href="http://www.github.com/bry-an"
        target="_blank"
      >
        <img
          class="logo"
          :src="require('../assets/github.png')"
          alt="github logo"
        >
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Philosophy',
}
</script>

<style lang="scss" scoped>
@import '@/assets/bry.scss';

.footer {
  @include lg {
      font-size: $font-large;
  }
  // @include md {
  //   font-size: $font-schmedium;
  // }
  font-size: $font-schmedium;
  padding-bottom: 0;
}

.logo {
  width: 7vmin;
}

.text-andes {
  color: $bry-andes;
}

</style>
