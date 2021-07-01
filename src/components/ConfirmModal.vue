<template>
  <div class="modal modal-dialog-centered fade" ref="modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            {{ title }}
          </h5>
        </div>
        <div class="modal-body">
          {{ body }}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
          <button type="button" class="btn btn-primary" @click="confirm">確認</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Modal} from 'bootstrap'
import {ModalData} from "@/model/ModalData";

export default {
  name: "ConfirmModal",
  data: function () {
    return {
      title: '',
      body: '',
      value: undefined,
      modal: undefined
    }
  },
  methods: {
    openModal(modalData) {
      this.modal = new Modal(this.$refs.modal);
      if (modalData instanceof ModalData) {
        this.body = modalData.body;
        this.title = modalData.title;
        if (modalData.value) {
          this.value = modalData.value;
        } else {
          this.value = undefined
        }
      } else {
        this.title = '系統提示'
        this.body = '傳入參數有誤無法正常顯示內容'
      }
      this.modal.show();
    },
    confirm() {
      if (this.modal !== undefined) {
        if (this.value) {
          this.$emit('confirm', this.value)
        }
        this.modal.hide()
        this.modal = undefined;
      }
    }
  }
}
</script>