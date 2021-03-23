<template>
  <div class="projects tracking-wide">
    <h3 class="section-title font-bold">
      PROJECTS
      <hr>
    </h3>
    <p class="my-3">
      I work for a team at <a
        href="https://www.remax.com/"
        class="text-andes"
        target="_blank"
      >RE/MAX</a> that builds a large CRM platform. My immediate team is responsible for a suite that allows creating custom email campaigns.
    </p>
    <p class="text-andes">
      Headless CMS
    </p>
    <p class="mb-4">
      I led a project to build a headless CMS with Node that generates HTML programmatically.
    </p>
    <p class="my-4">
      It renders Vue components on the server, hydrated with sender-specific details, and converts those components to email-ready HTML,
      which is then consumed by a wide range of sources in different contexts.
    </p>
    <p class="text-andes">
      Frontend testing initiative
    </p>
    <p class="mb-4">
      I am on a small team that created testing infrastructure for the codebase. We created testing utilities and
      extensive documentation, and trained other frontend developers on how to test their code. I am part of a similar initiative to
      document our codebase. I am a strong believer in both testing and documentation.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Projects',
}
</script>

<style lang="scss" scoped>
@import '@/assets/bry.scss';

.projects {
  font-size: $font-schmedium;
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
}

</style>
