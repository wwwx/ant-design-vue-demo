<template>
  <div class="page-function-manage">
    function manage works!
    <hr>
    <a-button type="primary">
      Primary
    </a-button>
    <a-button>Default</a-button>
    <a-button type="dashed">
      Dashed
    </a-button>
    <a-button type="danger">
      Danger
    </a-button>
    <a-button type="link">
      Link
    </a-button>
  </div>
</template>

<script>
export default {
    name: 'FunctionManage',
    methods: {

    },
    data() {
      return {
        originData: [
          ['0.01', '0.02'],
          ['0.24', '0.3302'],
        ]
      }
    },
    created() {

      const tableData = this.originData.map(array => {
        // console.log(array)
        return array.map(value => {
          console.log(value)
          return { rateValue:  value}
        })
      })

      console.log(JSON.stringify(tableData, null, 2))

    }
}
</script>
