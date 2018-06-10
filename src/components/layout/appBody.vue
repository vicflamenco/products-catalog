<template>
  <div class="container">
    <div class="row">
      <app-sidebar/>
      <app-body-content />
    </div>
  </div>
</template>

<script>

import appSidebar from './appSidebar'
import appBodyContent from './appBodyContent'

  export default {
    name: 'appBody',
    components: {
      appSidebar,
      appBodyContent
    }
  }
</script>

<style scoped>
  .container {
    min-height: 400px;
  }
</style>