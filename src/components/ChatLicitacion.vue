<template>
  <div
    v-if="!details"
    class="content w-11/12 mx-auto grid my-5 gap-4 justify-center min-h-full"
  >
    <div class="mx-auto w-11/12 mt-2 items-center h-5/6 overflow-hidden">
      <div class="messages grid h-100 gap-3 overflow-hidden">
        <div class="message-incoming flex gap-2 items-center">
          <img
            src="@/assets/People/Farmer.svg"
            alt="Incoming Message Profile Icon"
            class="h-16 w-16"
          />
          <div class="message-content incoming-chat rounded-md p-2 w-11/12">
            <p class="text-sm text-gray-800">
              Puedo licitar, puesto en mi planta
            </p>
          </div>
        </div>
        <div class="message-outgoing flex gap-2 items-center">
          <div class="message-content outgoing-chat rounded-md p-2 w-11/12">
            <p class="text-sm text-gray-800">
              Acepto, necesito cumplir con esta licitacion.
            </p>
          </div>
          <img
            src="@/assets/People/Factory.svg"
            alt="Outgoing Message Profile Icon"
            class="h-16 w-16"
          />
        </div>
      </div>
    </div>

    <div class="grid gap-3 items-center justify-center">
      <div class="flex justify-between mx-auto w-full gap-3 h-full items-end">
        <button
          class="bg-red-400 px-2 py-1 w-1/2 h-8 rounded-md shadow-md color-white text-xs"
        >
          Rechazar
        </button>
        <button
          v-on:click="showDealDetails"
          class="default-bar px-2 w-3/4 py-1 h-8 rounded-md shadow-md color-white text-xs"
        >
          Ver oferta
        </button>
        <button
          v-if="!offerSaw"
          class="bg-gray-400 px-2 w-full py-1 h-8 rounded-md shadow-md color-white text-xs"
        >
          Aceptar oferta
        </button>
        <button
          v-if="offerSaw"
          @click="showModal"
          class="default-bar px-2 w-full py-1 h-8 rounded-md shadow-md color-white text-xs"
        >
          Aceptar oferta
        </button>
      </div>

      
      <div class="message-form self-center relative">
        <input
          type="text"
          class="bg-gray-200 rounded-md w-full h-12 p-3 text-gray-500"
          placeholder="Responder"
        />
        <button class="absolute right-2 top-4">
          <img src="@/assets/Send.svg" alt="Send Message" class="h-4 w-4" />
        </button>
      </div>


      <p
        class="text-xs text-gray-500 font-bold my-2 text-center w-11/12 mx-auto"
      >
        Recuerda, que solo podrás aceptar la oferta, cuando visites las
        condiciones y cuando el comprador confirme el acuerdo.
      </p>
    </div>
    <!--Navbar Inside chat-->
  </div>

  <div
    v-if="details"
    class="content w-min-screen mx-auto grid my-3 gap-3"
  >
    <div
      class="seller-info w-full mx-auto grid gap-3 shadow-md p-3 items-center justfiy-center"
    >
      <img
        src="@/assets/Nav/X.svg"
        alt="Close deal details"
        class="self-end"
        v-on:click="closeDetails"
      />

      <h1 class="text-xl font-bold text-gray-500 text-center">
        Información de Vendedor
      </h1>

      <div class="Profile grid items-center text-center justify-center">
        <img
          src="@/assets/People/Farmer.svg"
          alt="Seller Profile Icon"
          class="h-16 w-16 mx-auto"
        />
        <div class="flex items-center justfiy-center">
          <img src="@/assets/Star.svg" alt="Star Icon" class="w-3 h-3" />
          <img src="@/assets/Star.svg" alt="Star Icon" class="w-3 h-3" />
          <img src="@/assets/Star.svg" alt="Star Icon" class="w-3 h-3" />
          <img src="@/assets/Star.svg" alt="Star Icon" class="w-3 h-3" />
          <img src="@/assets/Star.svg" alt="Star Icon" class="w-3 h-3" />
        </div>
      </div>

      <div class="Profile-Text text-center grid gap-2">
        <h1 class="text-gray-600 text-sm font-bold">Aso. Agricola</h1>
        <p class="text-gray-500 text-xs">Guayas / Pedro Carbo</p>
      </div>
    </div>

    <div
      class="product-info w-full mx-auto grid gap-3 shadow-md p-3 items-center justfiy-center mt-3"
    >
      <h1 class="text-xl font-bold text-gray-500 text-center">
        Información de Producto
      </h1>

      <div
        class="product-card flex md:grid md:grid-cols-3 gap-3 p-2 justify-center"
      >
        <div class="Product grid items-center text-center justify-center">
          <img
            src="@/assets/Products/Corn.svg"
            alt="Product Seller Icon"
            class="h-16 w-16 mx-auto"
          />
        </div>

        <div class="Product-Text">
          <h1 class="text-gray-600 text-sm font-bold">Maiz Duro Amarillo</h1>
          <p class="text-gray-500 text-xs">Cant: 200qq</p>
          <p class="text-gray-500 text-xs">En sacos: 100 libras</p>
        </div>

        <div class="Product-Price text-right flex flex-col mt-2">
          <h1 class="text-yellow-400 text-md font-bold">$18.50</h1>
          <p class="text-yellow-400 text-md font-bold">QQ</p>
        </div>
      </div>

      <hr class="h-0.5 bg-gray-400" />

      <div class="grid gap-2 text-center">
        <h1 class="text-md font-bold text-gray-500 text-center">
          Valida hasta:
        </h1>
        <p class="text-gray-400 text-sm">14/11/23</p>
        <h1 class="text-md font-bold text-gray-500 text-center">
          Información adicional:
        </h1>
        <p class="text-gray-400 text-sm">Precio necogiable</p>
      </div>
    </div>
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
          <p class="text-gray-400 text-sm w-3/4 mx-auto">
            Agradecemos el presente acuerdo, Agroec respaldará todo el proceso.
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
    Item: String,
  },
  data() {
    return {
      details: false,
      offerSaw: false,
      visible: false,
    };
  },
  methods: {
    showDealDetails() {
      this.details = !this.details ? true : false;
      this.offerSaw = true;
    },
    closeDetails() {
      this.details = this.details ? false : true;
    },
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
