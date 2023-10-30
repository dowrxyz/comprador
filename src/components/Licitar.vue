<template>
  <div class="licitacion my-5 w-full mx-auto">
    <div class="grid gap-4 my-1">
      <h1 class="text-gray-500 text-md font-bold text-center">
        Publica tu oferta ({{ Licitacion }})
      </h1>

      <div
        class="ficha grid gap-2 w-11/12 p-2 mx-auto rounded-md border-2 border-gray-100 text-center"
      >
        <h2 class="text-gray-500 text-sm font-bold">Ficha del Producto</h2>
        <p class="text-gray-400 text-xs">Maíz duro amarillo</p>
      </div>
    </div>

    <form class="mx-auto grid items-center gap-3 w-11/12 mt-3">
      <div class="grid mt-3 gap-2">
        <label for="Precio" class="text-gray-500 font-bold text-sm"
          >Precio:</label
        >
        <input
          type="text"
          name="Precio"
          class="w-full text-gray-500 mx-auto bg-transparent border border-2 border-gray-300 rounded-[16px] px-3 py-3 rounded-md"
          placeholder="$14,40"
        />

        <select
          name="size"
          class="w-full mx-auto bg-transparent border border-2 border-gray-300 rounded-[16px] px-3 py-3 rounded-md text-gray-600"
        >
          <option selected>QQ</option>
          <option>KG</option>
        </select>
      </div>

      <div class="grid mt-3 gap-2">
        <label for="Cantidad" class="text-gray-500 font-bold text-sm"
          >Cantidad que necesitas:</label
        >
        <input
          type="text"
          name="Cantidad"
          class="w-full text-gray-500 mx-auto bg-transparent border border-2 border-gray-300 rounded-[16px] px-3 py-3 rounded-md"
          placeholder="#200"
        />

        <select
          name="size"
          class="w-full mx-auto bg-transparent border border-2 border-gray-300 rounded-[16px] px-3 py-3 rounded-md text-gray-600"
        >
          <option selected>QQ</option>
          <option>KG</option>
        </select>
      </div>

      <div class="grid mt-3 gap-2">
        <label for="Presentacion" class="text-gray-500 font-bold text-sm"
          >Presentación de entrega:</label
        >
        <select
          name="size"
          class="w-full mx-auto bg-transparent border border-2 border-gray-300 rounded-[16px] px-3 py-3 rounded-md text-gray-600"
        >
          <option selected>En sacos</option>
          <option>En bolsas</option>
        </select>

        <select
          name="size"
          class="w-full mx-auto bg-transparent border border-2 border-gray-300 rounded-[16px] px-3 py-3 rounded-md text-gray-600"
        >
          <option selected>100 libras</option>
          <option>50 libras</option>
        </select>
      </div>

      <div class="grid mt-3 gap-2">
        <label for="Validez" class="text-gray-500 font-bold text-sm"
          >Valida hasta:</label
        >
        <input
          type="date"
          name="Validez"
          class="w-full text-gray-500 mx-auto bg-transparent border border-2 border-gray-300 rounded-[16px] px-3 py-3 rounded-md"
        />
      </div>

      <div class="grid mt-3 gap-2">
        <label for="Adicional" class="text-gray-500 font-bold text-sm"
          >Información adicional:</label
        >
        <input
          type="text"
          name="Adicional"
          placeholder="Precio negociable"
          class="w-full text-gray-500 mx-auto bg-transparent border border-2 border-gray-300 rounded-[16px] px-3 py-3 rounded-md"
        />
      </div>

      <button @click="showModal" type="button"
        class="py-3 px-5 default-bar mx-auto mt-3 w-2/3 rounded font-bold grid items-center mb-3"
      >
        Publicar licitación
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
          class="text-center text-xl font-bold text-gray-500 w-3/4 mx-auto text-center"
        >
          Confirmación
        </h2>
        <div class="mx-auto text-center">
          <p class="text-gray-400 text-sm w-11/12 mx-auto">
            Agradecemos tu publicación, Agroec buscará los mejores clientes para tu publicación.
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
  props: {
    Licitacion: String
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
