<template>
  <div class="col-lg-3 smallMargin">
    <div class="list-group">
      <router-link class="list-group-item" to="/">Home</router-link>
      <router-link class="list-group-item" to="/Products">Products</router-link>
      <router-link class="list-group-item" to="/About">About</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'appSidebar'
  }
</script>

<style scoped>
  .smallMargin {
    margin-top: 25px;
  }
</style>