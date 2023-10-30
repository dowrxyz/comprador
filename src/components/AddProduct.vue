<template>
  <div class="addProduct mt-6">
    <form class="mx-auto grid items-center gap-3 w-full">
      <label for="listado" class="text-gray-500 font-bold w-5/6 mx-auto"
        >Productos en listado</label
      >
      <select
        name="listado"
        class="w-5/6 mx-auto bg-transparent border border-2 border-gray-300 rounded-[16px] px-3 py-3 rounded-md text-gray-600"
      >
        <option selected>Aguacate</option>
        <option selected>Tomate</option>
        <option selected>Maiz</option>
      </select>
      <label for="sugerencia" class="text-gray-500 font-bold w-5/6 mx-auto"
        >Sugerir producto</label
      >
      <input
        type="text"
        name="sugerencia"
        class="w-5/6 mx-auto bg-transparent border border-2 border-gray-300 rounded-[15px] px-3 py-3 rounded-md text-gray-400"
        placeholder="Sugerencia"
      />
      <button
        @click="showModal"
        type="button"
        class="py-3 px-5 default-bar mx-auto mt-3 w-2/3 rounded text-center"
      >
        Agregar
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
          Agregado con éxito
        </h2>
        <div class="mx-auto text-center">
          <p class="text-gray-400 text-sm w-3/4 mx-auto">
            Agradecemos tu publicación, Agroec listara a los clientes tu publicación.
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
