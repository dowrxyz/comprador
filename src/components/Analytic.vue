<template>
      <apexcharts width="130" height="120" :type="type" :options="chartOptions" :series="series"></apexcharts>
  </template>
  
  <script>
  import VueApexCharts from 'vue3-apexcharts'
  
  export default {
    name: 'Chart',
    components: {
      apexcharts: VueApexCharts,
    },
    props: {
        type: String
    },
    data: function() {
        return {
          chartOptions: {
            chart: {
              id: 'vuechart-example',
              toolbar: {
                show: false
              },
            },
            xaxis: {
              categories: [1991, 1992, 1993, 1994],
            },
          },
          series: [{
            name: 'series-1',
            data: [30, 40, 45, 10]
          }]
        }
      }
  }
  </script>
  