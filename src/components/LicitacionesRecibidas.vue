<template>
  <div class="content w-full mx-auto grid my-2 gap-2">
    <div class="grid gap-1">
      <div class="tutorial-card w-full p-2 gap-2 grid">
        <div class="w-11/12 mx-auto flex gap-3 justify-between">
          <RouterLink
            class="message-incoming flex gap-2 w-full"
            :to="'/chat/licitacion/' + Item"
          >
            <div
              class="grid gap-2 justify-center text-center text-gray-700 text-sm"
            >
              <img
                src="@/assets/People/Factory.svg"
                alt="Incoming Message Profile Icon"
                class="h-16 w-16 mx-auto self-end mt-4"
              />
            </div>
            <div class="grid gap-1 w-full">
              <div class="grid text-gray-600">
                <p class="text-sm"><span class="font-bold text-base">Aso. Agricola</span> Guayas, Pedro Carbo</p>
              </div>
              <div
                class="message-content incoming-chat rounded-md p-2 w-full relative"
              >
                <p class="text-sm text-gray-800 font-bold">
                  Me intereso, te ofrezco $17.50, puesto en mi planta.
                </p>
                <span
                  class="text-gray-700 text-xs absolute right-2 xs:top-2 sm:top-4 md:top-2 top-8 md:mr-2 hour-text"
                  >Hoy 09:21 AM</span
                >
              </div>
            </div>
          </RouterLink>
        </div>
        <div class="w-11/12 mx-auto flex gap-3 justify-between">
          <RouterLink
            class="message-outgoing flex gap-2 w-full"
            :to="'/chat/licitacion/' + Item"
          >
            <div
              class="grid gap-2 justify-center text-center text-gray-700 text-sm"
            >
              <img
                src="@/assets/People/Factory.svg"
                alt="Incoming Message Profile Icon"
                class="h-16 w-16 mx-auto self-end mt-4"
              />
            </div>
            <div class="grid gap-1 w-full">
              <div class="grid text-gray-600">
                <p class="text-sm"><span class="font-bold text-base">Aso. Agricola</span> Guayas, Pedro Carbo</p>
              </div>
              <div
                class="message-content outgoing-chat rounded-md p-2 w-full relative"
              >
                <p class="text-sm text-gray-800">
                  Me intereso, te ofrezco $17.50, puesto en mi planta.
                </p>
                <span
                  class="text-gray-700 text-xs absolute right-2 xs:top-2 sm:top-4 md:top-2 top-8 md:mr-2 hour-text"
                  >Hoy 07:21 AM</span
                >
              </div>
            </div>
          </RouterLink>
        </div>
        <div class="w-11/12 mx-auto flex gap-3 justify-between">
          <RouterLink
            class="message-outgoing flex gap-2 w-full"
            :to="'/chat/licitacion/' + Item"
          >
            <div
              class="grid gap-2 justify-center text-center text-gray-700 text-sm"
            >
              <img
                src="@/assets/People/Farmer.svg"
                alt="Incoming Message Profile Icon"
                class="h-16 w-16 mx-auto self-end mt-4"
              />
            </div>

            <div class="grid gap-1 w-full">
              <div class="grid text-gray-600">
                <p class="text-sm"><span class="font-bold text-base">Agricultor</span> Guayas, Pedro Carbo</p>
              </div>
              <div
                class="message-content outgoing-chat rounded-md p-2 w-full relative"
              >
                <p class="text-sm text-gray-800">
                  Me intereso, te ofrezco $17.50, puesto en mi planta.
                </p>
                <span
                  class="text-gray-700 text-xs absolute right-2 xs:top-2 sm:top-4 md:top-2 top-8 md:mr-2 hour-text"
                  >Ayer 09:21 PM</span
                >
              </div>
            </div>
          </RouterLink>
        </div>
      </div>

      <div class="tutorial-card w-full p-2 gap-2 grid">
        <div class="w-11/12 mx-auto flex gap-3 justify-between">
          <RouterLink
            class="message-outgoing flex gap-2 w-full"
            :to="'/chat/licitacion/' + Item"
          >
            <div
              class="grid gap-2 justify-center text-center text-gray-700 text-sm"
            >
              <img
                src="@/assets/People/Business.svg"
                alt="Incoming Message Profile Icon"
                class="h-16 w-16 mx-auto self-end mt-4"
              />
            </div>
            <div class="grid gap-1 w-full">
              <div class="grid text-gray-600">
                <p class="text-sm"><span class="font-bold text-base">Comerciante</span> Guayas, Pedro Carbo</p>
              </div>
              <div
                class="message-content outgoing-chat rounded-md p-2 w-full relative"
              >
                <p class="text-sm text-gray-800">
                  Me intereso, te ofrezco $17.50, puesto en mi planta.
                </p>
                <span
                  class="text-gray-700 text-xs absolute right-2 xs:top-2 sm:top-4 md:top-2 top-8 md:mr-2 hour-text"
                  >3/4/2024 10:21 AM</span
                >
              </div>
            </div>
          </RouterLink>
        </div>
        <div class="w-11/12 mx-auto flex gap-3 justify-between">
          <RouterLink
            class="message-outgoing flex gap-2 w-full"
            :to="'/chat/licitacion/' + Item"
          >
            <div
              class="grid gap-2 justify-center text-center text-gray-700 text-sm"
            >
              <img
                src="@/assets/People/Business.svg"
                alt="Incoming Message Profile Icon"
                class="h-16 w-16 mx-auto self-end mt-4"
              />
            </div>
            <div class="grid gap-1 w-full">
              <div class="grid text-gray-600">
                <p class="text-sm"><span class="font-bold text-base">Comerciante</span> Guayas, Pedro Carbo</p>
              </div>
              <div
                class="message-content outgoing-chat rounded-md p-2 w-full relative"
              >
                <p class="text-sm text-gray-800">
                  Me intereso, te ofrezco $17.50, puesto en mi planta.
                </p>
                <span
                  class="text-gray-700 text-xs absolute right-2 xs:top-2 sm:top-4 md:top-2 top-8 md:mr-2 hour-text"
                  >2/4/2024 09:21 AM</span
                >
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>

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
        <div class="wrapper w-full">
          <div class="checkboxes grid">
            <div
              class="grid grid-cols-2 items-center mb-2 w-full text-sm"
              v-for="option in options"
              :key="option.value"
            >
              <input
                type="checkbox"
                :id="option.name"
                class="checkbox"
                v-model="comercianteType"
                :value="option.value"
              />
              <label :for="option.name" class="text-gray-600">{{
                option.name
              }}</label>
            </div>
          </div>
        </div>
      </div>
    </CModalBody>
  </CModal>
</template>

<script allowJs>
import Provincias from "../assets/JSON/Provincias.json";
import Cantones from "../assets/JSON/Cantones.json";
import { CModal, CModalBody } from "@coreui/vue";
export default {
  components: {
    CModal,
    CModalBody,
  },
  data() {
    return {
      distancia: 5,
      selectSeller: false,
      comercianteType: [],
      ProvinciaSelected: null,
      CantonSelected: null,
      Provincias: Provincias,
      Cantones: Cantones,
      Item: this.$route.params.name,
      options: [
        { name: "Agricultor", value: "Agricultor" },
        { name: "Comerciante", value: "Comerciante" },
        { name: "Asociación de Agricultor", value: "Asociación de Agricultor" },
      ],
    };
  },
  methods: {
    showComercianteWrapper() {
      this.selectSeller = true;
    },
    closeModal() {
      this.selectSeller = false;
    },
    handleCantones() {
      this.Cantones = Cantones.filter(
        (canton) => canton.Provincia_ID == this.ProvinciaSelected
      );
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

.hour-text {
  opacity: 0.8;
}
</style>
