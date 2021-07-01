<template>
  <div class="sticky-top">
    <div class="list-group list-group-flush overflow-auto vh-100 bg-secondary">
      <a href="#" @click="linkToPage('/modal')" class="list-group-item list-group-item-action list-group-item-dark">確認視窗</a>
      <a href="#" class="list-group-item list-group-item-action list-group-item-dark">vuex</a>
      <a href="#" class="list-group-item list-group-item-action list-group-item-dark">axios</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  methods: {
    linkToPage(url) {
      this.$router.push(url)
    }
  }
}
</script>

<style scoped>

</style>