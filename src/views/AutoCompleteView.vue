<template>
  <div>
    <br>
    <div class="col-12">
      <div class="col-12">
        <auto-complete :placeholder="'請輸入關鍵字或證號'"
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
  }
}
</script>

<style scoped>

</style>