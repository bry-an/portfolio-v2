<template>
  <div
    id="vision"
    class="philosophy tracking-wide"
  >
    <h3 class="section-title tracking-wide font-bold">
      VISION
    </h3>
    <p class="mb-1 mt-6">
      Being an effective software engineer means writing <span class="text-andes">well-documented</span>, <span class="text-andes">tested</span> code,
    </p>
    <p class="my-1">
      <span class="text-andes">communicating</span> clearly with colleagues
      and fostering an environment conducive to <span class="text-andes">collaboration</span>,
    </p>
    <p class="my-1">
      and eagerly approaching technical problems with an open mind and boundless <span class="text-andes">curiosity</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Philosophy',
}
</script>

<style lang="scss" scoped>
@import '@/assets/bry.scss';

.philosophy {
  @include sm {
    font-size: $font-schmedium;
  }
  font-size: $font-small;
}
.section-title {
  color: $bry-andes;
}

.text-andes {
  color: $bry-andes;
  font-family: 'Source Code Pro', monospace;
}

hr {
  border-top: 1px solid $bry-andes;
  width: 70%;
  @include sm {
    margin: 0;
  }
    margin: auto;
}

</style>
