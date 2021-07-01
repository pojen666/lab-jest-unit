import Vue from 'vue'
import App from './App.vue'
import store from './store'
import 'babel-polyfill'
import 'bootstrap/dist/css/bootstrap.css'
import router from './router'


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
