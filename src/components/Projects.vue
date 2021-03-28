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
      I work on a team at <a
        href="https://www.remax.com/"
        class="text-andes"
        style="text-decoration:underline;"
        target="_blank"
      >RE/MAX</a> that builds a large CRM platform. My immediate team works on a suite of products for building custom email campaigns. Recent larger projects include:
    </p>
    <p class="text-andes my-2">
      Custom Headless CMS
    </p>
    <p class="section">
      I led a project to build a headless CMS service with Node/TypeScript that generates HTML programmatically.
    </p>
    <p class="section">
      It renders Vue components (i.e. emails) hydrated with dynamic data, and converts those components to email-ready HTML.
    </p>
    <p class="section">
      The HTML is consumed by a range of clients in different contexts.
    </p>
    <p class="text-andes my-2">
      Frontend testing strategy
    </p>
    <p class="section">
      I am on a small team that created testing infrastructure and strategy for our engineers, including testing utilities and
      extensive documentation. We trained other frontend engineers to effectively test their code.
    </p>
    <p class="section">
      I am part of another initiative to document our codebase. Testing and documentation are integral parts of my development workflow.
    </p>
    <p class="section mt-6">
      My other projects have a few things in common: they were built in a collaborative, agile development cycle;
      utilized emerging trends in web application engineering; and required comfort traversing the web stack.
    </p>
    <p class="text-andes mt-6 mb-2">
      Dev Community
    </p>
    <p class="section">
      I created and lead a <a
        href="https://www.meetup.com/Bootcampers-Collective/"
        class="text-andes"
        target="_blank"
        style="text-decoration:underline;"
      >Meetup</a> focused on technical problem solving and communication.
      At Coders' Workshop, new and seasoned developers come together to help everyone be better at their job &#8212; or get a job.
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
  .section {
    @apply mb-4;
    @include sm {
      @apply pl-4;
    }
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
}

</style>
