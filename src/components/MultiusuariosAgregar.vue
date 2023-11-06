<template>
  <div class="logIn">
    <img
      src="@/assets/AgroIcon.svg"
      alt="App Icon"
      class="icon-app mx-auto my-4"
    />

    <form class="mx-auto grid items-center gap-3 w-full md:w-1/3">
      <label for="name" class="text-gray-500 font-bold w-5/6 mx-auto"
        >Nombre</label
      >
      <input
        type="text"
        id="name"
        class="text-gray-400 w-5/6 mx-auto bg-transparent border border-2 border-gray-300 rounded-[16px] px-3 py-3 rounded-md"
        placeholder="Ingresa el nombre"
      />
      <label for="correo" class="text-gray-500 font-bold w-5/6 mx-auto"
        >Correo</label
      >
      <input
        type="text"
        id="correo"
        class="text-gray-400 w-5/6 mx-auto bg-transparent border border-2 border-gray-300 rounded-[16px] px-3 py-3 rounded-md"
        placeholder="Introduce el correo"
      />
      <label for="clave" class="text-gray-500 font-bold w-5/6 mx-auto"
        >Clave</label
      >
      <input
        id="clave"
        type="password"
        class="text-gray-400 w-5/6 mx-auto bg-transparent border border-2 border-gray-300 rounded-[15px] px-3 py-3 rounded-md"
        placeholder="Clave de seguridad"
      />

      <div class="mx-auto grid relative w-5/6">
        <div class="relative">
          <label for="depa" class="text-gray-500 font-bold w-5/6 mx-auto"
            >Departamento</label
          >
          <select
            id="depa"
            class="w-full mx-auto bg-transparent border border-2 border-gray-300 rounded-[16px] px-3 py-3 rounded-md text-gray-600"
          >
            <option selected>Gerencia</option>
            <option>Secretaria</option>
            <option>Comercial</option>
          </select>
        </div>
      </div>

      <button type="button" @click="showModal"
        class="py-3 px-5 mb-3 default-bar mx-auto mt-3 w-2/3 rounded text-center"
      >
        Guardar
      </button>
    </form>
  </div>

  <CModal alignment="center" :visible="visible" @close="closeModal">
    <CModalBody>
      <div class="grid w-full gap-3 pb-3">
        <img
          src="@/assets/Nav/X.svg"
          alt="Close alert"
          @click="closeModal"
          class="justify-self-end"
        />
        <h2
          class="text-center text-xl font-bold text-gray-500 w-3/4 mx-auto text-center"
        >
          Usuario Agregado
        </h2>
        <div class="mx-auto text-center">
          <p class="text-gray-400 text-sm w-3/4 mx-auto">
            El usuario fue agregado exitosamente!
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
    },
  },
};
</script>
