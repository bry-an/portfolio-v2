<template>
  <div
    id="home"
    class="home"
  >
    <div class="intro-container">
      <Intro />
    </div>
    <div class="philosophy-container">
      <Philosophy />
    </div>
    <div class="projects-container">
      <Projects />
    </div>
    <div class="contact-container">
      <Contact />
    </div>
    <div class="footer-container">
      <Footer />
    </div>
  </div>
</template>

<script>
import Intro from '../components/Intro.vue'
import Philosophy from '../components/Philosophy.vue'
import Projects from '../components/Projects.vue'
import Contact from '../components/Contact.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Intro,
    Philosophy,
    Projects,
    Contact,
    Footer,
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/bry.scss';

.home {
  width: 80%;
  margin: 3rem auto;
  font-size: $font-large;
  .intro-container {
    margin-top: 10vmin;
  }
  .philosophy-container {
    margin-top: 10vmin;
  }
  .projects-container {
    margin-top: 10vmin;
  }
  .contact-container {
    margin-top: 10vmin;
  }
  .footer-container {
    margin-top: 10vmin;
  }
}
</style>
