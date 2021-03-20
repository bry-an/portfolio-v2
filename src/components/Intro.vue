<template>
  <div class="w-1/2 text-right">
    <p>
      I am a <span class="text-andes">JavaScript</span> engineer.
    </p>
    <p class="mt-16">
      I write frontend software applications in <span class="text-andes">Vue.js</span>
      <span class="block my-3 indent"> and microservices with <span class="text-andes">Node.js</span></span>
    </p>
  </div>
</template>

<script>

export default {
  name: 'Intro',
}
</script>

<style lang="scss" scoped>
@import '@/assets/bry.scss';
.text-andes {
    color: $bry-andes;
}
.indent {
    padding-left: 10vmin;
}
.indent-2 {
    padding-left: 20vmin;
}
</style>
