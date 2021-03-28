<template>
  <div
    id="kitten"
    class="header-container"
  >
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
        <button
          :class="['cursor-pointer mr-6 xl:mr-12 nav-item', {'text-andes': scrollPos < navItemPositions.vision }]"
          @click="scroll('home')"
        >
          Home
        </button>
        <button
          :class="['cursor-pointer mr-6 xl:mr-12 nav-item', {'text-andes': scrollPos > navItemPositions.vision && scrollPos < navItemPositions.projects }]"
          @click="scroll('vision')"
        >
          Vision
        </button>
        <button
          :class="['cursor-pointer mr-6 xl:mr-12 nav-item', {'text-andes': scrollPos > navItemPositions.projects && scrollPos < navItemPositions.contact }]"
          @click="scroll('projects')"
        >
          Projects
        </button>
        <button
          :class="['cursor-pointer nav-item', {'text-andes': scrollPos === navItemPositions.contact }]"
          @click="scroll('contact')"
        >
          Contact
        </button>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { scroll, scrollListener, getNavItemPositions, navItemPositions } from '../utils/sharedMethods.js'

export default {
  name: 'Header',
  setup() {
    const scrollPos = ref(0)
    onMounted(() => {
      // issue with Vue 3 comp api, DOM not yet fully rendered onMounted, thus setTimeout :(
      setTimeout(() => {
        getNavItemPositions()
      })
      scrollListener(scrollPos)
    })
    return {
      scroll,
      scrollPos,
      navItemPositions,
    }
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
    button {
      outline: none;
    }
    font-family: 'Red Hat Display', sans-serif;
    color: $bry-chalk;
    width: 90%;
    margin: auto;
    .header-name {
      color: $bry-andes;
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
        &.text-andes {
          color: $bry-andes;
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
