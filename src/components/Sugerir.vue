<template>
    <div class="addProduct mt-6">
      <form class="mx-auto grid items-center gap-3 w-full md:w-2/5">
        <div class="w-5/6 mx-auto relative">
          <label
            for="listado"
            class="text-gray-500 font-bold w-full mx-auto relative"
            >Sugerir Producto</label
          >
          <input
            type="text"
            placeholder="Sugerir Producto"
            class="w-full mx-auto bg-transparent border-2 border-gray-300 px-3 py-3 rounded-md text-gray-600"
          />
        </div>
  
        <div class="grid relative w-5/6 mx-auto">
          <div class="relative">
            <label
              for="negocio"
              class="text-gray-500 font-bold w-5/6 mb-3 mx-auto"
              >Cantidad a comprar</label
            >
            <input type="number" placeholder="Cantidad" class="w-full mx-auto bg-transparent border-2 border-gray-300 px-3 py-3 rounded-md text-gray-600">
          </div>
        </div>
  
        <button
          @click="showModal"
          type="button"
          class="py-3 px-5 default-bar mx-auto mt-3 w-2/3 rounded text-center"
        >
          Enviar
        </button>
      </form>
    </div>
  
    <CModal alignment="center" :visible="visible">
      <CModalBody>
        <div class="grid w-full gap-3 pb-3">
          <img
            src="@/assets/Nav/X.svg"
            alt="Close alert"
            @click="closeModal"
            class="justify-self-end"
          />
          <h2
            class="text-center text-xl font-bold text-gray-500 w-5/6 mx-auto"
          >
           Sugerencia enviada
          </h2>
          <div class="mx-auto text-center">
            <p class="text-gray-400 text-sm w-3/4 mx-auto">
                Agroec analizará su sugerencia.
            </p>
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
    data() {
      return {
        visible: false,
      };
    },
    methods: {
      showModal() {
        this.visible = true;
      },
      closeModal() {
        // Close the menu by setting menuOpen to false
        this.visible = false;
      }
    },
  };
  </script>
  
  