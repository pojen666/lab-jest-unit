<template>
  <div>
    <br>
    <div class="col-12">
      <div class="col-12">
        <button class="btn btn-secondary" @click="getJwt">取得jwt</button>
      </div>
      <div class="col-12 text-light">回傳結果為: <span>{{jwt}}</span></div>
    </div>
  </div>
</template>

<script>


export default {
  name: "Jwt",
  created() {
    this.$store.dispatch('changeCurrentUnit', '使用axios取得mock jwt並放置到store')
  },
  data: function () {
    return {
      jwt: ''
    }
  },
  methods: {
    async getJwt() {
      const response = await this.axios.get('/jwt')
      await this.$store.dispatch('setJwt', response.data)
      this.jwt = this.$store.getters.jwt
    }
  }
}
</script>
