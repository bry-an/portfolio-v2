<template>
  <div
    class="tracking-wide flex justify-center items-end"
  >
    <div class="mx-12">
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
    <div class="text-andes mx-12">
      &#169; Bryan Yunis
    </div>
    <div class="mx-12">
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
  font-size: $font-schmedium;
  padding-bottom: 0;
}

.logo {
    width: 50px;
}

.text-andes {
  color: $bry-andes;
}

</style>
