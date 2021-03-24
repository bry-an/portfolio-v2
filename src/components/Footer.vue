<template>
  <div
    class="footer tracking-wide flex justify-center items-end"
  >
    <div class="md:mx-12 mx-4">
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
    <div class="text-andes md:mx-12 mx-4">
      &#169; Bryan Yunis
    </div>
    <div class="md:mx-12 mx-4">
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
  @include md {
    font-size: $font-schmedium;
  }
  font-size: $font-small;
  padding-bottom: 0;
}

.logo {
  @include sm {
    width: 35px;
  }
  @include md {
    width: 60px;
  }
  width: 25px;
}

.text-andes {
  color: $bry-andes;
}

</style>
