<template>
  <div class="content w-full mx-auto grid my-5 gap-2">
    <h2 class="text-gray-500 font-bold font-md text-center">Filtra por</h2>
    <div class="flex gap-3 justify-center items-end mx-auto w-5/6">
      <div class="input-container grid items-end justify-center relative">
        <multiselect
          v-model="cantonSelected"
          :options="canton"
          :multiple="true"
          placeholder="Canton"
          deselect-label="Quitar filtro"
          select-label="Añadir filtro"
        >
        </multiselect>
        <div class="absolute right-1 top-3">
          <img
            src="@/assets/Search.svg"
            alt="Search by Canton"
            class="h-6 w-6"
          />
        </div>
      </div>

      <div class="input-container grid items-end justify-center relative">
        <multiselect
          v-model="calidadSelected"
          :options="calidad"
          :multiple="true"
          placeholder="Comerciante"
          deselect-label="Quitar filtro"
          select-label="Añadir filtro"
          :show-labels="false"
          :hide-selected="true"
        >
        </multiselect>
        <div class="absolute right-1 top-3">
          <img
            src="@/assets/Search.svg"
            alt="Search by Calidad"
            class="h-6 w-6"
          />
        </div>
      </div>
    </div>

    <div
      class="my-2 w-11/12 mx-auto shadow-sm h-24 grid items-center p-3 gap-3 rounded"
    >
      <div class="grid grid-cols-2 justify-between">
        <label for="range" class="text-gray-700 text-md font-bold"
          >Distancia</label
        >
        <span class="text-gray-800 text-md text-right"
          >({{ distancia }} km)</span
        >
      </div>
      <input
        type="range"
        class="w-full rangeDistancia"
        min="5"
        max="150"
        step="5"
        name="range"
        v-model="distancia"
      />
    </div>

    <div class="grid gap-1">
      <RouterLink :to="'/chat/licitacion/' + Item">
        <div class="tutorial-card w-full shadow-md p-2">
          <div class="w-11/12 mx-auto flex gap-3 justify-between">
            <div class="inline-flex gap-4">
              <div class="Profile grid items-center text-center justify-center">
                <img
                  src="@/assets/People/Farmer.svg"
                  alt="Seller Profile Icon"
                  class="h-16 w-16 mx-auto"
                />
                <div class="flex items-center justfiy-center">
                  <img
                    src="@/assets/Star.svg"
                    alt="Star Icon"
                    class="w-3 h-3"
                  />
                  <img
                    src="@/assets/Star.svg"
                    alt="Star Icon"
                    class="w-3 h-3"
                  />
                  <img
                    src="@/assets/Star.svg"
                    alt="Star Icon"
                    class="w-3 h-3"
                  />
                  <img
                    src="@/assets/Star.svg"
                    alt="Star Icon"
                    class="w-3 h-3"
                  />
                  <img
                    src="@/assets/Star.svg"
                    alt="Star Icon"
                    class="w-3 h-3"
                  />
                </div>
              </div>

              <div class="Profile-Text">
                <h1 class="text-gray-600 text-sm font-bold">Agricultor</h1>
                <p class="text-gray-500 text-xs">Guayas / Pedro Carbo</p>
                <p class="text-gray-500 text-xs">Cant: 200qq</p>
                <p class="text-gray-500 text-xs">En sacos de 100 libras</p>
              </div>
            </div>

            <div class="Product-Price text-right flex flex-col mt-2">
              <h1 class="text-yellow-400 text-md font-bold">$18.50</h1>
              <p class="text-yellow-400 text-md font-bold">Hum 17%</p>
            </div>
          </div>
        </div>
      </RouterLink>

      <RouterLink :to="'/chat/licitacion/' + Item">
        <div class="tutorial-card w-full shadow-md p-2">
          <div class="w-11/12 mx-auto flex gap-3 justify-between">
            <div class="inline-flex gap-4">
              <div class="Profile grid items-center text-center justify-center">
                <img
                  src="@/assets/People/Aso.svg"
                  alt="Seller Profile Icon"
                  class="h-16 w-16 mx-auto"
                />
                <div class="flex items-center justfiy-center">
                  <img
                    src="@/assets/Star.svg"
                    alt="Star Icon"
                    class="w-3 h-3"
                  />
                  <img
                    src="@/assets/Star.svg"
                    alt="Star Icon"
                    class="w-3 h-3"
                  />
                  <img
                    src="@/assets/Star.svg"
                    alt="Star Icon"
                    class="w-3 h-3"
                  />
                  <img
                    src="@/assets/Star.svg"
                    alt="Star Icon"
                    class="w-3 h-3"
                  />
                  <img
                    src="@/assets/Star.svg"
                    alt="Star Icon"
                    class="w-3 h-3"
                  />
                </div>
              </div>

              <div class="Profile-Text">
                <h1 class="text-gray-600 text-sm font-bold">Aso. Agrícola</h1>
                <p class="text-gray-500 text-xs">Guayas / Pedro Carbo</p>
                <p class="text-gray-500 text-xs">Cant: 200qq</p>
                <p class="text-gray-500 text-xs">En sacos de 100 libras</p>
              </div>
            </div>

            <div class="Product-Price text-right flex flex-col mt-2">
              <h1 class="text-yellow-400 text-md font-bold">$18.50</h1>
              <p class="text-yellow-400 text-md font-bold">Hum 17%</p>
            </div>
          </div>
        </div>
      </RouterLink>

      <RouterLink :to="'/chat/licitacion/' + Item">
        <div class="tutorial-card w-full shadow-md p-2">
          <div class="w-11/12 mx-auto flex gap-3 justify-between">
            <div class="inline-flex gap-4">
              <div class="Profile grid items-center text-center justify-center">
                <img
                  src="@/assets/People/Business.svg"
                  alt="Seller Profile Icon"
                  class="h-16 w-16 mx-auto"
                />
                <div class="flex items-center justfiy-center">
                  <img
                    src="@/assets/Star.svg"
                    alt="Star Icon"
                    class="w-3 h-3"
                  />
                  <img
                    src="@/assets/Star.svg"
                    alt="Star Icon"
                    class="w-3 h-3"
                  />
                  <img
                    src="@/assets/Star.svg"
                    alt="Star Icon"
                    class="w-3 h-3"
                  />
                  <img
                    src="@/assets/Star.svg"
                    alt="Star Icon"
                    class="w-3 h-3"
                  />
                  <img
                    src="@/assets/Star.svg"
                    alt="Star Icon"
                    class="w-3 h-3"
                  />
                </div>
              </div>

              <div class="Profile-Text">
                <h1 class="text-gray-600 text-sm font-bold">Comerciante</h1>
                <p class="text-gray-500 text-xs">Guayas / Pedro Carbo</p>
                <p class="text-gray-500 text-xs">Cant: 200qq</p>
                <p class="text-gray-500 text-xs">En sacos de 100 libras</p>
              </div>
            </div>

            <div class="Product-Price text-right flex flex-col mt-2">
              <h1 class="text-yellow-400 text-md font-bold">$18.50</h1>
              <p class="text-yellow-400 text-md font-bold">Hum 17%</p>
            </div>
          </div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script allowJs>
import multiselect from "vue-multiselect";
export default {
  components: { multiselect },
  props: {
    Item: String,
  },
  data() {
    return {
      selected: null,
      distancia: 5,
      calidadSelected: "",
      cantonSelected: "",
      calidad: ["Agrícola", "Empresa", "Particular"],
      canton: ["Provincia", "Provincia", "Provincia"],
    };
  },
};
</script>

<style
  src="../../node_modules/vue-multiselect/dist/vue-multiselect.css"
></style>

<style scoped>
.input {
  font-size: 14px;
}

.rangeDistancia {
  accent-color: #a3e635;
}
</style>
