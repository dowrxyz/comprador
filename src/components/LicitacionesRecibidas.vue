<template>
  <div class="content w-full mx-auto grid my-5 gap-2">
    <h2 class="text-gray-500 font-bold font-md text-center">Filtra por</h2>
    <div class="grid grid-cols-2 justify-center items-end mx-auto w-5/6 md:w-2/6">
      <div
        @click="showCantonWrapper"
        class="input-container border-2 mr-2 w-11/12 grid items-end relative h-12 text-gray-500 p-2"
      >
        <p class="text-left">Cantón</p>
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

  
  <!-- Modal para seleccion de canton -->
  <CModal alignment="center" :visible="selectCanton" @close="closeModal">
    <CModalBody>
      <div class="grid w-full gap-3 pb-3">
        <img
          src="@/assets/Nav/X.svg"
          alt="Close alert"
          @click="closeModal"
          class="justify-self-end"
        />
        <div class="flex">
          <div class="wrapper w-full">
            <div
              class="w-full mx-auto h-24 grid items-center p-3 gap-3 rounded"
            >
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
                <div class="grid grid-cols-2 items-center mb-2 text-sm">
                  <input type="checkbox" name="City1" class="checkbox" v-model="jaramijo" @change="handleCheckboxChange"/>
                  <label for="City1" class="text-gray-600 col-span-1">Jaramijó</label>
                </div>
                <div class="grid grid-cols-2 items-center mb-2 w-full text-sm">
                  <input type="checkbox" name="City2" class="checkbox" v-model="pedroCarbo" @change="handleCheckboxChange"/>
                  <label for="City2" class="text-gray-600">Pedro Carbo</label>
                </div>
                <div class="grid grid-cols-2 items-center mb-2 w-full text-sm">
                  <input type="checkbox" name="City3" class="checkbox" v-model="milagro" @change="handleCheckboxChange"/>
                  <label for="City3" class="text-gray-600">Milagro</label>
                </div>
                <div class="grid grid-cols-2 items-center mb-2 w-full text-sm">
                  <input type="checkbox" name="City4" class="checkbox" v-model="all" @change="handleCheckboxChange"/>
                  <label for="City4" class="text-gray-600">Todos</label>
                </div>
            </div>
          </div>
        </div>
      </div>
    </CModalBody>
  </CModal>

  <!-- Modal para seleccion de comerciante -->
  <CModal alignment="center" :visible="selectSeller" @close="closeModal">
    <CModalBody>
      <div class="grid w-full gap-3 pb-3">
        <img
          src="@/assets/Nav/X.svg"
          alt="Close alert"
          @click="closeModal"
          class="justify-self-end"
        />
        <div
          class="wrapper w-full"
        >
          <div class="checkboxes grid">
              <div class="grid grid-cols-2 items-center mb-2 w-full text-sm" v-for="option in options" :key="option.value">
                <input type="checkbox" :id="option.name" class="checkbox" v-model="comercianteType" :value="option.value"/>
                <label :for="option.name" class="text-gray-600">{{option.name}}</label>
              </div>
          </div>
        </div>
      </div>
    </CModalBody>
  </CModal>
</template>


<script allowJs>
import { CModal, CModalBody } from "@coreui/vue";
export default {
  components: {
    CModal,
    CModalBody,
  },
  props: {
    Item: String,
  },
  data() {
    return {
      distancia: 5,
      pedroCarbo: false,
      jaramijo: false,
      all: false,
      milagro: false,
      selectSeller: false,
      selectCanton: false,
      comercianteType: [],
      options: [
        { name: "Agricultor", value: "Agricultor" },
        { name: "Comerciante", value: "Comerciante" },
        { name: "Asociación de Agricultor", value: "Asociación de Agricultor" },
      ]
    };
  },
  methods: {
    showCantonWrapper() {
      this.selectCanton = true;
    },
    showComercianteWrapper() {
      this.selectSeller = true;
    },
    closeModal() {
      this.selectSeller = false;
      this.selectCanton = false;
    },
    handleCheckboxChange() {
      // Implementa la lógica para garantizar que solo uno esté seleccionado
      if (this.pedroCarbo) {
        this.jaramijo = false;
        this.milagro = false;
        this.all = false;
      }
      if (this.jaramijo) {
        this.pedroCarbo = false;
        this.milagro = false;
        this.all = false;
      }
      if (this.milagro) {
        this.jaramijo = false;
        this.pedroCarbo = false;
        this.all = false;
      }
      if (this.all) {
        this.jaramijo = false;
        this.milagro = false;
        this.pedroCarbo = false;
      }
    }
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
