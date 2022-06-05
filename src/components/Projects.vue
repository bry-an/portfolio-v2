<template>
  <div
    id="projects"
    class="projects tracking-wide"
  >
    <h3 class="section-title font-bold">
      PROJECTS
    </h3>
    <p class="mt-8">
      My projects all utilize emerging trends in web application engineering.
    </p>
    <p class="my-3">
      <span class="font-bold">I'm currently a software engineer</span> on a team at <a
        href="https://www.gateless.com/"
        class="text-andes"
        style="text-decoration:underline;"
        target="_blank"
      >gateless</a>, where we're revolutionizing the mortgage loan industry through intelligent automation.
    </p>
    <div class="card">
      <p class="text-andes my-2">
        SmartUnderwrite Portal
      </p>
      <p class="section">
        I help architect, develop from the ground up, deploy, and maintain a modern frontend with Svelte.js,
        using the latest web standards and technologies to create performant, intuitive user interfaces.
      </p>
      <p class="text-andes my-2">
        SmartUnderwrite
      </p>
      <p class="section">
        I contribute to a large-scale Clojure distributed expert system that creates mortgage loan projections against a rules namespace.
      </p>
      <p class="text-andes my-2">
        Tested and reusable: engineered to last
      </p>
      <p class="section">
        I designed, built, and maintain unit and integration testing suites for our platform, as well as help maintain our UI library.
      </p>
    </div>

    <p class="mb-3 mt-12">
      <span class="font-bold">At <a
        href="https://www.remax.com/"
        class="text-andes"
        style="text-decoration:underline;"
        target="_blank"
      >RE/MAX</a></span>, I worked on a team that built a large CRM platform with Vue.js. We worked on a suite of products for users to build custom email campaigns.
    </p>
    <div class="card">
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
        I was on a small team that created testing infrastructure and strategy for our engineers, including testing utilities and
        extensive documentation. We trained other frontend engineers to effectively test their code.
      </p>
      <p class="section">
        I was part of another initiative to document our codebase. Testing and documentation are integral parts of my development workflow.
      </p>
    </div>
    <p class="mt-14 mb-3">
      <span class="font-bold">At OppenheimerFunds</span> (now <a
        href="https://www.invesco.com/corporate/en/home.html"
        class="text-andes"
        style="text-decoration:underline;"
        target="_blank"
      >Invesco</a>), I worked on a team that built internal HR applications.
    </p>
    <div class="card">
      <p class="text-andes my-2">
        HR Provisioning Application
      </p>
      <p class="section">
        I helped develop and maintain a new HR dashboard that connected three line-of-business applications to streamline the employee onboarding process, a workflow that traditionally involved interacting individually with distinct teams.
      </p>
      <p class="section">
        This suite transformed the onboarding process from days to at little as a few minutes.
      </p>
    </div>
    <p class="mt-14 mb-3">
      <span class="font-bold">I co-created and lead</span> a <a
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

.card {
    border-bottom: 1px solid white;
    padding: 0;
    margin: 0;
    background: inherit;

    @include sm {
        border: 1px solid white;
        border-radius: 4px;
        padding: 1rem;
        margin: 1rem;
        background: #222043;
    }
}

.projects {
  @include sm {
    font-size: $font-schmedium;
  }
  font-size: $font-small;
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
