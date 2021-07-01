<template>
  <div class="home text-light">
    請點選左邊選單的項目查看元件效果
  </div>
</template>

<script>

export default {
  name: 'Home',
  created() {
    this.$store.dispatch('changeCurrentUnit', '說明頁面')
  },
}
</script>
