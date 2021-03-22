<template>
  <div class="flex intro">
    <div class="w-1/2 text-right">
      <p>
        I am a <span class="text-andes">JavaScript</span> engineer.
      </p>
      <p class="mt-4">
        I write frontend applications with <span class="text-andes">Vue.js</span>
        <span class="block my-3"> and APIs with <span class="text-andes">Node.js</span></span>
      </p>
      <p class="text-right mt-12">
        But on the right team, we can build <span class="text-andes">anything</span>
      </p>
    </div>
    <div class="w-1/2 flex flex-col items-center ml-3">
      <div class="w-2/3">
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
    font-size: $font-medium;
  }

}

</style>
