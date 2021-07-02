<template>
  <div class="modal fade" ref="modal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
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
          <button type="button" class="btn btn-dark" @click="confirm">確認</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Modal} from 'bootstrap'
import {ModalModel} from "@/model/ModalModel";

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
    openModal(modalModel) {
      this.modal = new Modal(this.$refs.modal);
      if (modalModel instanceof ModalModel) {
        this.body = modalModel.body;
        this.title = modalModel.title;
        if (modalModel.value) {
          this.value = modalModel.value;
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