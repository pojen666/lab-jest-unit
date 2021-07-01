<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-secondary">
      <span class="navbar-brand mb-0 h1">Vue組件展示</span>
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
