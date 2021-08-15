<template>
  <div>
    <div class="row m-0">
      <div ref="leftToRight" class="col-sm p-0 bg-primary text-white">
        block left to right
      </div>
      <div class="col-sm p-0"></div>
    </div>
    <div class="row m-0">
      <div class="col-sm p-0"></div>
      <div ref="rightToLeft" class="col-sm p-0 bg-primary text-white">
        block right to left
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TransformByScrollView",
  methods: {
    tranFormLR() {
      const left = document.documentElement.scrollTop + 'px'
      this.$refs.leftToRight.style.transform = 'translate3d(' + left + ', 0, 0)'
      this.$refs.rightToLeft.style.transform = 'translate3d(-' + left + ', 0, 0)'
    }
  },
  created() {
    this.$store.dispatch('changeCurrentUnit', '滑動時移動區塊展示')
  },
  mounted: function () {
    window.addEventListener('scroll', this.tranFormLR)
  }
}
</script>

<style scoped>

</style>