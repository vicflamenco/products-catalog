<template>
  <div class="container">
    <h1>About</h1>
    <div class="row">
      <author name="Victor" />
      <author name="Nishant" />
    </div>
  </div>
</template>

<script>
  import author from './author'

  export default {
    name: 'about',
    components: {
      author
    }
  }
</script>

<style scoped>
  h1 {
    margin-bottom: 20px;
    padding-bottom: 5px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  }
  .container {
    padding-top: 0px;
    margin-top: 0px;
  }
</style>