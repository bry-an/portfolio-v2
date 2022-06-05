<template>
  <div class="flex intro">
    <div class="sm:w-1/2 w-full sm:text-right text-left">
      <p>
        I am a software engineer who writes a lot of <span class="text-andes">JavaScript</span> and <span class="text-andes">Clojure</span>
      </p>
      <p class="mt-4">
        I build frontend applications with <span class="text-andes">Vue</span> and <span class="text-andes">Svelte</span>
        <span class="block my-3">
          and APIs with <span class="text-andes">Node.js</span>, <span class="text-andes">Clojure</span> and <span class="text-andes">Laravel</span>
        </span>
      </p>
      <p class="sm:text-right mt-12">
        But on the right team, we can build <span class="text-andes">anything</span>
      </p>
    </div>
    <div class="w-1/2 hidden sm:flex flex-col items-center justify-center ml-6">
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
