<template>
  <div
    id="projects"
    class="projects tracking-wide"
  >
    <h3 class="section-title font-bold">
      PROJECTS
      <hr>
    </h3>
    <p class="my-3">
      I work for a team at <a
        href="https://www.remax.com/"
        class="text-andes"
        target="_blank"
      >RE/MAX</a> that builds a large CRM platform. My immediate team is responsible for a suite that allows creating custom email campaigns. My recent projects include:
    </p>
    <p class="text-andes">
      Headless CMS
    </p>
    <p class="mb-4 pl-4">
      I led a project to build a headless CMS with Node that generates HTML programmatically.
    </p>
    <p class="my-4 pl-4">
      It renders Vue components (i.e. emails) on the server, hydrated with sender-specific details, and converts those components to email-ready HTML.
    </p>
    <p class="my-4 pl-4">
      The HTML is consumed by a range of clients in different contexts.
    </p>
    <p class="text-andes">
      Frontend testing strategy
    </p>
    <p class="mb-4 pl-4">
      I am on a small team that created testing infrastructure and strategy for our engineers. This includes testing utilities and
      extensive documentation. We trained other frontend engineers to effectively test their code.
    </p>
    <p class="mb-4 pl-4">
      I am part of a similar initiative to document our codebase. I am a strong believer in the benefits of automated testing and good documentation.
    </p>
    <p class="mb-4 mt-6 pl-4">
      My other projects have a few things in common: they were built in a collaborative, agile development cycle;
      utilized emerging trends in web application development; and required comfort traversing the web stack.
    </p>
    <p class="text-andes mt-6">
      Dev Community
    </p>
    <p class="mb-4 pl-4">
      I lead a <a
        href="https://www.meetup.com/Bootcampers-Collective/"
        class="text-andes"
        target="_blank"
      >Meetup</a> focused on problem solving and technical communication.
      At Coders' Workshop, new and seasoned developers come together to help make everyone more competent at their job.
    </p>
    <p class="pl-4">
      It's been an important part of my life for several years.
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
