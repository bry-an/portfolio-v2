<template>
  <div class="header">
    <h1>Bryan Yunis</h1>
    <h3>Software Engineer</h3>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>
<style lang="scss" scoped>
@import '@/assets/bry.scss';

.header {
  font-family: 'Source Sans Pro', sans-serif;
  color: $bry-andes;
  width: 90%;
  margin: auto;
    padding-top: 2rem;
    h1 {
        display: inline;
        margin-right: 5rem;
    }
    h3 {
        display: inline;
        font-family: 'Source Code Pro';
    }
}
</style>
