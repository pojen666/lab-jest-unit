<template>
  <div>
    <br>
    <div class="col-12">
      <div class="col-12">
        <auto-complete :placeholder="'請輸入關鍵字出現下拉選單後選擇'"
                       :service="queryService"
                       :query-function="queryService.getSomeFeatureData"
                       @selectedId="selectedId">
        </auto-complete>
      </div>
      <div class="col-12 text-light">回傳結果為: <span>{{no}}</span></div>
    </div>
  </div>
</template>

<script>
import {MockDataService} from '../service/mock-data.service'
import AutoComplete from '../components/AutoComplete'

export default {
  name: 'AutoCompleteView',
  data: function () {
    return {
      no: undefined,
      queryService: new MockDataService()
    }
  },
  components: {
    autoComplete: AutoComplete
  },
  methods: {
    selectedId(id) {
      this.no = id
    }
  },
  created() {
    this.$store.dispatch('changeCurrentUnit', '展示自動完成組件')
  }
}
</script>

<style scoped>

</style>