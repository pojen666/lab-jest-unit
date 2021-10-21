<template>
  <div>
    <input ref="keywordInput" class="form-control w-100"
           v-model="keyword"
           type="search"
           :placeholder="placeholder"
           aria-label="Search">
    <div ref="autoComplete" class="position-absolute list-group m-0 pr-0">
      <button v-for="feature of featureList" :key="feature.id + feature.description"
              @click="selectFeature(feature)"
              class="list-group-item list-group-item-action">
        {{ feature.description }}
      </button>
    </div>
    <confirm-modal ref="modal"></confirm-modal>
  </div>
</template>

<script>
import pipePromise from "../utils/pipe-promise";
import ConfirmModal from "./ConfirmModal";

export default {
  name: "AutoComplete",
  props: {
    service: {
      type: Object,
      require: true
    },
    queryFunction: {
      type: Function,
      require: true
    },
    placeholder: {
      type: String
    }
  },
  components: {
    confirmModal: ConfirmModal
  },
  data: function () {
    return {
      pending: false,
      keyword: '',
      queryResult: undefined,
      featureList: [],
      selected: false
    }
  },
  watch: {
    keyword: function (value) {
      if (this.selected) {
        this.selected = false
        if (value.length === 0) {
          this.featureList = []
        }
      } else {
        this.$emit('selectedId', undefined)
        if (value.length > 0) {
          this.queryKeywordSearch(value)
        } else {
          this.featureList = []
        }
      }
    }
  },
  methods: {
    async queryKeywordSearch(value) {
      if (value.length === 0) {
        this.featureList = []
        return
      }
      if (!this.pending) {
        this.pending = true
        const response = await pipePromise(
            this.queryFunction.call(this.service, value),
            error => this.$refs.modal.openModal(error)
        )
        this.pending = false
        if (response === undefined) {
          return
        }
        if (this.keyword === value) {
          this.featureList = response.data
          const keywordInput = this.$refs.keywordInput
          const offsetHeight = keywordInput.offsetHeight
          const autoComplete = this.$refs.autoComplete
          autoComplete.style.top = offsetHeight + 'px'
          autoComplete.style.left = keywordInput.offsetLeft + 'px'
          autoComplete.style.position = 'absolute'
          autoComplete.style.width = keywordInput.offsetWidth + 'px'
        } else {
          await this.queryKeywordSearch(this.keyword)
        }
      }
    },
    selectFeature(feature) {
      this.$emit('selectedId', feature.id)
      this.selected = true
      this.keyword = feature.description
      this.featureList = []
    }
  }
}
</script>

<style scoped>
.list-group {
  max-height: 80vh;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  z-index: 999;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>