<template>
  <div class="sticky-top">
    <div class="list-group list-group-flush overflow-auto vh-100 bg-secondary">
      <a href="#"
         v-for="route in routes"
         v-bind:key="route.path"
         @click="linkToPage(route.path)"
         class="list-group-item list-group-item-action list-group-item-dark">
        {{ route.name }}
      </a>
    </div>
  </div>
</template>

<script>
import routes from "@/router/modules/routes";

export default {
  name: "Sidebar",
  methods: {
    linkToPage(url) {
      this.$router.push(url)
    }
  },
  data: function () {
    return {
      routes: routes
    }
  }
}
</script>

<style scoped>

</style>