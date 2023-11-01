<template>
  <div class="content w-full mx-auto grid my-5 gap-2">
    <h2 class="text-gray-500 font-bold font-md text-center">Filtra por</h2>
    <div class="grid grid-cols-2 justify-center items-end mx-auto w-5/6">
      <div
        @click="showCantonWrapper"
        v-if="!cantonWrapper"
        class="input-container border-2 mr-2 w-11/12 grid items-end relative h-12 text-gray-500 p-2"
      >
        <p class="text-left">Canton</p>
        <div class="absolute right-1 top-3">
          <img
            src="@/assets/Search.svg"
            alt="Search by Canton"
            class="h-6 w-6"
          />
        </div>
      </div>
      <div
        @click="showCantonWrapper"
        v-else
        class="input-hover border-2 mr-2 w-11/12 grid items-end relative h-12 text-gray-500 p-2"
      >
        <p class="text-left">Canton</p>
        <div class="absolute right-1 top-3">
          <img
            src="@/assets/Search.svg"
            alt="Search by Canton"
            class="h-6 w-6"
          />
        </div>
      </div>

      <div
        @click="showComercianteWrapper"
        v-if="!comercianteWrapper"
        class="input-container border-2 w-full grid items-end relative h-12 text-gray-500 p-2"
      >
        <p class="">Comerciante</p>
        <div class="absolute right-1 top-3">
          <img
            src="@/assets/Search.svg"
            alt="Search by Comerciante"
            class="h-6 w-6"
          />
        </div>
      </div>

      <div
        @click="showComercianteWrapper"
        v-else
        class="input-hover border-2 w-full grid items-end relative h-12 text-gray-500 p-2"
      >
        <p class="">Comerciante</p>
        <div class="absolute right-1 top-3">
          <img
            src="@/assets/Search.svg"
            alt="Search by Comerciante"
            class="h-6 w-6"
          />
        </div>
      </div>

      <div class="flex">
        <div
          v-if="cantonWrapper"
          class="wrapper w-11/12 col-span-2 md:col-span-1 border-b-2 border-l-2 border-r-2 rounded-b-md"
        >
          <div class="w-full mx-auto h-24 grid items-center p-3 gap-3 rounded">
            <div class="grid mx-auto md:mx-0 md:grid-cols-2 justify-between">
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

          <div class="checkboxes mt-3 md:grid-cols-2 grid justify-start">
            <div class="grid grid-cols-2 items-center mb-2 w-full text-sm">
              <input type="checkbox" name="Provincia" class="checkbox" />
              <label for="Provincia" class="text-gray-600">Quito</label>
            </div>
            <div class="grid grid-cols-2 items-center mb-2 w-full text-sm">
              <input type="checkbox" name="Provincia" class="checkbox" />
              <label for="Provincia" class="text-gray-600">Guayas</label>
            </div>
            <div class="grid grid-cols-2 items-center mb-2 w-full text-sm">
              <input type="checkbox" name="Provincia" class="checkbox" />
              <label for="Provincia" class="text-gray-600">La Paz</label>
            </div>
            <div class="grid grid-cols-2 items-center mb-2 w-full text-sm">
              <input type="checkbox" name="Provincia" class="checkbox" />
              <label for="Provincia" class="text-gray-600">Otra</label>
            </div>
          </div>
        </div>
      </div>

      <div
        v-if="comercianteWrapper"
        class="wrapper md:w-full border-b-2 border-l-2 border-r-2 rounded-b-md"
      >
        <div class="checkboxes md:grid-cols-2 grid">
          <div class="grid grid-cols-2 items-center mb-2 w-full text-sm">
            <input type="checkbox" name="Provincia" class="checkbox" />
            <label for="Provincia" class="text-gray-600">Aso Agrícola</label>
          </div>
          <div class="grid grid-cols-2 items-center mb-2 w-full text-sm">
            <input type="checkbox" name="Provincia" class="checkbox" />
            <label for="Provincia" class="text-gray-600">Empresa</label>
          </div>
          <div class="grid grid-cols-2 items-center mb-2 w-full text-sm">
            <input type="checkbox" name="Provincia" class="checkbox" />
            <label for="Provincia" class="text-gray-600">Fabrica</label>
          </div>
          <div class="grid grid-cols-2 items-center mb-2 w-full text-sm">
            <input type="checkbox" name="Provincia" class="checkbox" />
            <label for="Provincia" class="text-gray-600">Artesano</label>
          </div>
        </div>
      </div>
    </div>

    <div class="grid gap-1">
      <RouterLink :to="{ name: 'chatDeals', params: { name: Item } }">
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
              </div>
            </div>

            <div class="Product-Price text-right flex flex-col mt-2">
              <h1 class="text-yellow-400 text-md font-bold">$18.50</h1>
              <p class="text-yellow-400 text-md font-bold">Hum 17%</p>
            </div>
          </div>
        </div>
      </RouterLink>

      <RouterLink :to="{ name: 'chatDeals', params: { name: Item } }">
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
              </div>
            </div>

            <div class="Product-Price text-right flex flex-col mt-2">
              <h1 class="text-yellow-400 text-md font-bold">$18.50</h1>
              <p class="text-yellow-400 text-md font-bold">Hum 17%</p>
            </div>
          </div>
        </div>
      </RouterLink>

      <RouterLink :to="{ name: 'chatDeals', params: { name: Item } }">
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
export default {
  props: {
    Item: String,
  },
  data() {
    return {
      distancia: 5,
      calidadSelected: "",
      cantonSelected: "",
      comercianteWrapper: false,
      cantonWrapper: false,
    };
  },
  methods: {
    showCantonWrapper() {
      if (this.comercianteWrapper) this.comercianteWrapper = false;
      this.cantonWrapper = this.cantonWrapper ? false : true;
    },
    showComercianteWrapper() {
      if (this.cantonWrapper) this.cantonWrapper = false;
      this.comercianteWrapper = this.comercianteWrapper ? false : true;
    },
  },
};
</script>

<style scoped>
.input {
  font-size: 14px;
}

.checkbox {
  accent-color: #a3e635;
}

.rangeDistancia {
  accent-color: #a3e635;
}

.input-container {
  border-top: 1px solid #e2e8f0;
  border-left: 1px solid #e2e8f0;
  border-right: 1px solid #e2e8f0;
  border-bottom: 1px solid #e2e8f0;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.input-hover {
  border-bottom: none;
  border-top: 1px solid #e2e8f0;
  border-left: 1px solid #e2e8f0;
  border-right: 1px solid #e2e8f0;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
</style>
