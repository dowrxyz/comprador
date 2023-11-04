<template>
  <div class="licitacion my-5 w-full md:w-5/6 mx-auto">
    <form class="mx-auto flex items-center gap-3 w-11/12 md:w-1/2 mt-3 justify-evenly">
      <div class="grid mt-3 gap-2 relative">
        <label for="Inicio" class="text-gray-500 font-bold text-sm"
          >Fecha: Desde</label
        >
        <input
          type="date"
          name="Inicio"
          class="w-full text-gray-500 bg-transparent border border-2 border-gray-300 px-3 py-3 rounded-md"
        />
      </div>
      <div class="grid mt-3 gap-2 relative">
        <label for="Fin" class="text-gray-500 font-bold text-sm"
          >Fecha: Hasta</label
        >
        <input
          type="date"
          name="Fin"
          class="w-full text-gray-500 bg-transparent border border-2 border-gray-300 px-3 py-3 rounded-md"
        />
      </div>
    </form>

    <div class="grid gap-6 grid-cols-2 mx-auto justify-center w-11/12 mt-4">
      <div
        class="statistic-card pt-6 pb-2 border border-gray-200 h-auto rounded-md grid gap-2"
      >
      <Analytic type="line" class="mx-auto"></Analytic>
        <p class="text-gray-400 font-bold text-sm text-center w-5/6 mx-auto">
          Evolución de tu precio Agricultor
        </p>
      </div>

      <div
        class="statistic-card pt-6 pb-2 border border-gray-200 h-auto rounded-md grid gap-2"
      >
        <Analytic type="line" class="mx-auto"></Analytic>
        <p class="text-gray-400 font-bold text-sm text-center w-5/6 mx-auto">
          Evolución de tu precio Comerciante
        </p>
      </div>

      <div
        class="statistic-card pt-6 pb-2 border border-gray-200 h-auto rounded-md grid gap-2"
      >
        <Analytic type="bar"  class="mx-auto"></Analytic>
        <p class="text-gray-400 font-bold text-sm text-center w-5/6 mx-auto">
          Cantidad comprada por tipo de cliente (tm)
        </p>
      </div>

      <div
        class="statistic-card pt-6 pb-2 border border-gray-200 h-auto rounded-md grid gap-2"
      >
        <Analytic type="bar" class="mx-auto"></Analytic>
        <p class="text-gray-400 font-bold text-sm text-center w-5/6 mx-auto">
          Cantidad comprada por zona (Cantón)
        </p>
      </div>

    </div>
  </div>
</template>

<script allowJs>
import Analytic from "@/components/Analytic.vue";
export default {
  components: {
    Analytic
  },
  props: {
    Item: String,
  },
};
</script>
