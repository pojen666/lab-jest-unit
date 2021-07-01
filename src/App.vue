<template>
  <div id="app">
    <button class="btn btn-primary" @click="openModal">點我</button>
    <modal ref="modal"></modal>
  </div>
</template>

<script>
import ConfirmModal from "@/components/ConfirmModal";
import {ModalData} from "@/model/ModalData";

export default {
  name: 'App',
  components: {
    modal: ConfirmModal
  },
  methods: {
    openModal() {
      const modalData = new ModalData();
      modalData.title = '測試標題'
      modalData.body = '測試內文'
      this.$refs.modal.openModal(modalData);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
