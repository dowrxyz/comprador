<template>
  <apexcharts v-if="!extended"
    :width="chartWidth"
    :height="chartHeight"
    :type="type"
    :options="chartOptions"
    :series="series"
  ></apexcharts>
  <apexcharts v-else
    :width="extendedWidth"
    :height="extendedHeight"
    :type="type"
    :options="chartOptions"
    :series="series"></apexcharts>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
  name: "Chart",
  components: {
    apexcharts: VueApexCharts,
  },
  props: {
    type: String,
    extended: Boolean,
  },
  data: function () {
    return {
      chartOptions: {
        chart: {
          id: "vuechart-example",
          toolbar: {
            show: false,
          },
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994],
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 10],
        },
      ],
      extendedWidth: 350,
      extendedHeight: 300,
      chartWidth: window.innerWidth >= 768 ? 400 : 185, // Ancho del gráfico en píxeles
      chartHeight: window.innerWidth >= 768 ? 300 : 120, // Alto del gráfico en píxeles
    };
  },
  created() {
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.chartWidth = window.innerWidth >= 768 ? 400 : 120;
      this.chartHeight = window.innerWidth >= 768 ? 300 : 130;
    },
  },
};
</script>
