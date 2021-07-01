<template>
  <div class="sticky-top">
    <div class="list-group list-group-flush overflow-auto vh-100 bg-secondary">
      <a href="#" @click="linkToPage('/')" class="list-group-item list-group-item-action list-group-item-dark">說明頁面</a>
      <a href="#" @click="linkToPage('/modal')" class="list-group-item list-group-item-action list-group-item-dark">確認視窗</a>
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