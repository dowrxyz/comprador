<template>
  <div class="content w-full mx-auto grid my-2 gap-2">
    <div class="grid gap-1">
      <div class="tutorial-card w-full shadow-md p-2 gap-2 grid">
        <p class="text-gray-700 w-11/12 mx-auto my-2">
          (*) Has recibido 3 mensajes de tu propuesta {{Item}} $17.50; 500QQ
        </p>
        <div class="w-11/12 mx-auto flex gap-3 justify-between">
          <RouterLink
            class="message-incoming flex gap-2 items-center"
            :to="'/app/chat/oferta/' + Item"
          >
            <img
              src="@/assets/People/Factory.svg"
              alt="Incoming Message Profile Icon"
              class="h-16 w-16"
            />
            <div class="message-content incoming-chat rounded-md p-2 w-11/12">
              <p class="text-sm text-gray-800">
                Me intereso, te ofrezco $17.50, puesto en mi planta.
              </p>
            </div>
          </RouterLink>
        </div>
        <div class="w-11/12 mx-auto flex gap-3 justify-between">
          <RouterLink
            class="message-outgoing flex gap-2 items-center"
            :to="'/app/chat/oferta/' + Item"
          >
            <img
              src="@/assets/People/Factory.svg"
              alt="Incoming Message Profile Icon"
              class="h-16 w-16"
            />
            <div class="message-content outgoing-chat rounded-md p-2 w-11/12">
              <p class="text-sm text-gray-800">
                Me intereso, te ofrezco $17.50, puesto en mi planta.
              </p>
            </div>
          </RouterLink>
        </div>
        <div class="w-11/12 mx-auto flex gap-3 justify-between">
          <RouterLink
            class="message-incoming flex gap-2 items-center"
            :to="'/app/chat/oferta/' + Item"
          >
            <img
              src="@/assets/People/Business.svg"
              alt="Incoming Message Profile Icon"
              class="h-16 w-16"
            />
            <div class="message-content incoming-chat rounded-md p-2 w-11/12">
              <p class="text-sm text-gray-800">
                Me intereso, te ofrezco $17.50, puesto en mi planta.
              </p>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
    <div class="grid gap-1">
      <div class="tutorial-card w-full shadow-md p-2 gap-2 grid">
        <p class="text-gray-700 w-11/12 mx-auto my-2">
          (*) Has recibido 2 mensajes de tu propuesta Maiz $16.50; 300QQ
        </p>
        <div class="w-11/12 mx-auto flex gap-3 justify-between">
          <RouterLink
            class="message-incoming flex gap-2 items-center"
            :to="'/app/chat/oferta/' + Item"
          >
            <img
              src="@/assets/People/Aso.svg"
              alt="Incoming Message Profile Icon"
              class="h-16 w-16"
            />
            <div class="message-content incoming-chat rounded-md p-2 w-11/12">
              <p class="text-sm text-gray-800">
                Me intereso, te ofrezco $16.50, puesto en mi planta.
              </p>
            </div>
          </RouterLink>
        </div>
        <div class="w-11/12 mx-auto flex gap-3 justify-between">
          <RouterLink
            class="message-outgoing flex gap-2 items-center"
            :to="'/app/chat/oferta/' + Item"
          >
            <img
              src="@/assets/People/Factory.svg"
              alt="Incoming Message Profile Icon"
              class="h-16 w-16"
            />
            <div class="message-content outgoing-chat rounded-md p-2 w-11/12">
              <p class="text-sm text-gray-800">
                Me intereso, te ofrezco $16.50, puesto en mi planta.
              </p>
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
      Item: this.$route.params.product,
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
</style>
