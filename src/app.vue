<template>
  <div id="app">
    <app-header/>
    <app-body/>
    <app-footer/>
  </div>
</template>

<script>
  import appHeader from './components/layout/appHeader'
  import appBody from './components/layout/appBody'
  import appFooter from './components/layout/appFooter'

  export default {
    name: 'app',
    components: {
      appHeader,
      appBody,
      appFooter
    }
  }
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
