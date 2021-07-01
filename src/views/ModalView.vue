<template>
  <div>
    <button class="btn btn-primary" @click="openModal">點我</button>
    <modal ref="modal"></modal>
  </div>
</template>

<script>
import ConfirmModal from "@/components/ConfirmModal";
import {ModalModel} from "@/model/ModalModel";

export default {
  name: "ModalView",
  components: {
    modal: ConfirmModal
  },
  methods: {
    openModal() {
      const modal = new ModalModel();
      modal.title = '測試標題'
      modal.body = '測試內文'
      this.$refs.modal.openModal(modal);
    }
  }
}
</script>

<style scoped>

</style>