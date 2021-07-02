import Vue from 'vue'
import App from './App.vue'
import store from './store'
import 'babel-polyfill'
import 'bootstrap/dist/css/bootstrap.css'
import router from './router'
import VueAxios from "vue-axios";
import axios from "./axios";

Vue.use(VueAxios, axios)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
