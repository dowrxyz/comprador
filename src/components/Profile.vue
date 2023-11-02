<template>
  <div class="logIn">
    <img
      src="@/assets/ProfileIcon.svg"
      alt="Profile Icon"
      class="icon-app mx-auto my-6"
    />

    <form class="mx-auto grid items-center gap-3 w-full md:w-1/3">
      <label for="data1" class="text-gray-600 font-bold w-5/6 mx-auto"
        >Data 1</label
      >
      <input
        type="text"
        name="data1"
        class="w-5/6 text-gray-400 mx-auto bg-transparent border border-2 border-gray-300 rounded-[16px] px-3 py-3 rounded-md"
        placeholder="Data 1"
      />
      <label for="data2" class="text-gray-600 font-bold w-5/6 mx-auto"
        >Data 2</label
      >
      <select
        name="data2"
        class="w-5/6 mx-auto bg-transparent border border-2 border-gray-300 rounded-[16px] px-3 py-3 rounded-md text-gray-600"
      >
        <option selected>Data2</option>
      </select>
      <div class="mx-auto grid relative w-5/6">
        <div class="relative">
          <label for="ubicacion" class="text-gray-600 font-bold w-5/6 mx-auto"
            >Ubicación</label
          >
          <input
            type="text"
            name="ubicacion"
            class="w-full text-gray-400 mx-auto bg-transparent border border-2 border-gray-300 rounded-[16px] px-3 py-3 rounded-md"
            placeholder="Ingresar ubicación"
          />

          <div class="absolute right-3 top-11">
            <img
              src="@/assets/Search.svg"
              alt="Your ubication"
              class="h-5 w-5"
            />
          </div>
        </div>
      </div>

      <button
        type="button"
        @click="showModal"
        class="py-3 px-5 default-bar mx-auto mt-3 w-2/3 rounded font-bold grid items-center mb-3"
      >
        Guardar
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
          class="text-center text-xl font-bold text-gray-500 w-5/6 mx-auto text-center"
        >
          Perfil actualizado
        </h2>
        <div class="mx-auto text-center">
          <p class="text-gray-400 text-sm w-3/4 mx-auto">
            Se ha actualizado tu perfil correctamente, verás los cambios en
            breve.
          </p>
        </div>
      </div>
    </CModalBody>
  </CModal>
</template>

<style>
.icon-app {
  width: 120px;
  height: 120px;
}
</style>

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
