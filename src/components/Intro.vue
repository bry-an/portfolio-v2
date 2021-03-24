<template>
  <div class="flex md:flex-row flex-col intro">
    <div class="md:w-1/2 w-full md:text-right text-center">
      <p>
        I am a software engineer who writes a lot of <span class="text-andes">JavaScript</span>
      </p>
      <p class="mt-4">
        I build frontend applications with <span class="text-andes">Vue.js</span>
        <span class="block my-3"> and APIs with <span class="text-andes">Node.js</span></span>
      </p>
      <p class="md:text-right mt-12">
        But on the right team, we can build <span class="text-andes">anything</span>
      </p>
    </div>
    <div class="md:w-1/2 flex flex-col items-center justify-center mt-3 md:mt-0 md:ml-6">
      <div class="w-4/5">
        <Terminal />
      </div>
    </div>
  </div>
</template>

<script>
import Terminal from './Terminal.vue'

export default {
  name: 'Intro',
  components: {
    Terminal,
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/bry.scss';
.intro {
  .text-andes {
      color: $bry-andes;
  }
  p {
    @include sm {
      font-size: $font-medium;
    }
    font-size: $font-small;
  }

}

</style>
