<template>
  <div class="text-light">
    <span class="h2">練習回傳引用舊系統不使用Promise而用callback做異步回調方法的結果</span>
    <br>
    <span>由於</span>
    <span class="h4">舊系統程式無法被改動</span>
    <br>
    <span>但在新專案引用上須將舊方法(callback)封裝成與promise回傳值一致</span>
    <br>
    <div class="col-12 justify-content-center">
      <div class="card bg-secondary w-25">
        <div class="card-header">
          執行區塊
        </div>
        <div class="card-body">
          <span v-if="isStart">start test</span>
          <br>
          <span v-if="text">{{ text }}</span>
          <br>
          <span v-if="isFinished">finish test</span>
        </div>
        <div class="card-footer text-center">
          <button class="btn btn-dark mr-1" @click="startTesting">執行</button>
          <button class="btn btn-light text-dark" @click="clean">清空</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AwaitCallBackView",
  data: function () {
    return {
      isStart: false,
      isFinished: false,
      text: undefined
    }
  },
  methods: {
    // 無法被更動的程是碼
    oldStyleAsync(callback) {
      this.isStart = true
      setTimeout(callback, 3000)
    },
    async testCallback() {
      const oldStyleAsync = this.oldStyleAsync
      return new Promise(function (resolve) {
        const callbackMethod = function () {
          resolve('callback return work!!')
        }
        oldStyleAsync(callbackMethod)
      })
    },
    async startTesting() {
      this.clean()
      this.text = await this.testCallback()
      this.isFinished = true
    },
    clean() {
      this.isStart = false
      this.isFinished = false
      this.text = undefined
    }
  }
}
</script>

<style scoped>

</style>