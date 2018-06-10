import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import app from './App'
import appRouter from './routing/appRouter.js'

Vue.use(Router)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router: appRouter,
  components: { 
    app 
  },
  template: '<app/>'
})
