<template>
  <div class="header-container">
    <div class="header flex flex-col xl:flex-row justify-center xl:justify-between items-center xl:items-baseline">
      <div class="flex flex-col sm:flex-row items-center sm:items-baseline">
        <h1 class="tracking-wide inline header-name">
          Bryan Yunis
        </h1>
        <span class="header-title sm:inline block">
          <span class="hidden sm:inline sm:ml-4">></span> Software Engineer
        </span>
      </div>
      <div class="flex justify-center items-baseline nav-box">
        <span
          class="cursor-pointer mr-6 bxl:mr-12 nav-item"
          @click="scrollTo('home')"
        >
          Home
        </span>
        <span
          class="cursor-pointer mr-6 xl:mr-12 nav-item"
          @click="scrollTo('vision')"
        >
          Vision
        </span>
        <span
          class="cursor-pointer nav-item mr-6 xl:mr-12"
          @click="scrollTo('projects')"
        >
          Projects
        </span>
        <span
          class="cursor-pointer nav-item"
          @click="scrollTo('contact')"
        >
          Contact
        </span>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>

export default {
  name: 'Header',
  methods: {
    scrollTo(id) {
      const yOffset = -90
      const element = document.getElementById(id)
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: id === 'home' ? 0 : y, behavior: 'smooth' })
    },
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/bry.scss';
.header-container {
  position: sticky;
  top: 0;
  background-color: $bry-dark-sky;
  .header {
    font-family: 'Red Hat Display', sans-serif;
    color: $bry-andes;
    width: 90%;
    margin: auto;
    .header-name {
      line-height: 9.5vmin;
      font-size: $font-large;
      @include md {
        font-size: $font-h1;
      }
    }
    .header-title {
      font-family: 'Source Code Pro';
      font-size: $font-schmedium;
      @include md {
        font-size: $font-large;
      }
    }
    .nav-box {
      font-family: 'Source Code Pro', monospace;
      @include xl {
        font-size: $font-large;
      }
      @include md {
        font-size: $font-schmedium;
      }
      font-size: $font-small;
      .nav-item {
        &:hover {
          font-weight: 700;
        }
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
