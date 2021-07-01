<template>
  <div>
    <br>
    <div class="col-12 justify-content-center">
      <div class="card w-25">
        <div class="card-header">
          確認視窗展示
        </div>
        <div class="card-body">
          <div class="form-group">
            <label for="title">輸入確認視窗標題</label>
            <input class="form-control" id="title" v-model="title">
          </div>
          <div class="form-group">
            <label for="body">輸入確認視窗內容</label>
            <input class="form-control" id="body" v-model="body">
          </div>
          <div class="form-group">
            <label for="value">輸入確認視窗回傳內容</label>
            <input class="form-control" id="value" v-model="value">
          </div>
        </div>
        <div class="card-footer text-center">
          <button class="btn btn-dark" @click="openModal">執行確認視窗組件</button>
        </div>
      </div>
    </div>
    <div class="col-12 text-light">回傳結果為: {{confirmValue}}</div>
    <modal ref="modal" @confirm="confirm"></modal>
  </div>
</template>

<script>
import ConfirmModal from "@/components/ConfirmModal";
import {ModalModel} from "@/model/ModalModel";

export default {
  name: "ModalView",
  data: function () {
    return {
      title: '',
      body: '',
      value: '',
      confirmValue: ''
    }
  },
  created() {
    this.$store.dispatch('changeCurrentUnit', '確認視窗組件展示')
  },
  components: {
    modal: ConfirmModal
  },
  methods: {
    openModal() {
      const modal = new ModalModel();
      modal.title = this.title
      modal.body = this.body
      modal.value = this.value
      this.$refs.modal.openModal(modal);
    },
    confirm(confirmValue) {
      this.confirmValue = confirmValue
    }
  }
}
</script>

<style scoped>

</style>