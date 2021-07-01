<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
      <span class="navbar-brand mb-0 h5">Vue組件展示</span>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            {{currentUnit}}
          </li>
        </ul>
      </div>
    </nav>
    <div class="container-fluid">
      <div class="row flex-xl-nowrap">
        <div class="col-2 no-padding">
          <sidebar></sidebar>
        </div>
        <div class="col-10 no-padding bg-dark">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";

export default {
  name: 'App',
  components: {
    sidebar: Sidebar
  },
  computed: {
    currentUnit: function() {
      return this.$store.getters.currentUnit
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.no-padding {
  padding: 0!important;
}
</style>
