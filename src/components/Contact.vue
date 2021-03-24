<template>
  <div
    id="contact"
    class="contact tracking-wide"
  >
    <h3 class="section-title tracking-wide font-bold">
      CONTACT
      <hr>
    </h3>
    <p class="mb-1 mt-6">
      Full contact information can be found on my <a
        href="https://s3-us-west-2.amazonaws.com/bryanyunis.com/resume/bryan-yunis-resume.pdf"
        class="text-andes"
        target="_blank"
      >resume</a>
    </p>
    <p class="my-2">
      Otherwise, please reach out on <a
        href="https://s3-us-west-2.amazonaws.com/bryanyunis.com/resume/bryan-yunis-resume.pdf"
        class="text-andes"
      >LinkedIn</a>
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

.contact {
  @include sm {
    font-size: $font-schmedium;
    text-align: left;
  }
  font-size: $font-small;
    text-align: center;
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
