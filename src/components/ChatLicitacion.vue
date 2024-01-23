<template>
  <div
    v-if="!details"
    class="content w-11/12 mx-auto grid my-5 gap-4 justify-center min-h-full"
  >
    <div class="mx-auto w-11/12 mt-2 message-wrap overflow-y-scroll">
      <div class="messages grid gap-3 p-2">
        <div class="message-incoming flex gap-2 items-center">
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
        </div>
        <div class="message-outgoing flex gap-2 items-center">
          <div class="message-content outgoing-chat rounded-md p-2 w-11/12">
            <p class="text-sm text-gray-800">
              Acepto donde esta ubicado, envieme su ubicacion.
            </p>
          </div>
          <img
            src="@/assets/People/Aso.svg"
            alt="Outgoing Message Profile Icon"
            class="h-16 w-16"
          />
        </div>
        <div class="message-outgoing flex gap-2 items-center">
          <div class="message-content outgoing-chat rounded-md p-2 w-11/12">
            <p class="text-sm text-gray-800">
              Acepto donde esta ubicado, envieme su ubicacion.
            </p>
          </div>
          <img
            src="@/assets/People/Aso.svg"
            alt="Outgoing Message Profile Icon"
            class="h-16 w-16"
          />
        </div>
        <div class="message-outgoing flex gap-2 items-center">
          <div class="message-content outgoing-chat rounded-md p-2 w-11/12">
            <p class="text-sm text-gray-800">
              Acepto donde esta ubicado, envieme su ubicacion.
            </p>
          </div>
          <img
            src="@/assets/People/Aso.svg"
            alt="Outgoing Message Profile Icon"
            class="h-16 w-16"
          />
        </div>
        <div class="message-outgoing flex gap-2 items-center">
          <div class="message-content outgoing-chat rounded-md p-2 w-11/12">
            <p class="text-sm text-gray-800">
              Acepto donde esta ubicado, envieme su ubicacion.
            </p>
          </div>
          <img
            src="@/assets/People/Aso.svg"
            alt="Outgoing Message Profile Icon"
            class="h-16 w-16"
          />
        </div>
        <div class="message-outgoing flex gap-2 items-center">
          <div class="message-content outgoing-chat rounded-md p-2 w-11/12">
            <p class="text-sm text-gray-800">
              Acepto donde esta ubicado, envieme su ubicacion.
            </p>
          </div>
          <img
            src="@/assets/People/Aso.svg"
            alt="Outgoing Message Profile Icon"
            class="h-16 w-16"
          />
        </div>
        <div class="message-outgoing flex gap-2 items-center">
          <div class="message-content outgoing-chat rounded-md p-2 w-11/12">
            <p class="text-sm text-gray-800">
              Acepto donde esta ubicado, envieme su ubicacion.
            </p>
          </div>
          <img
            src="@/assets/People/Aso.svg"
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
          Condiciones
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
          v-model="messageInput"
          class="bg-gray-200 rounded-md w-full h-12 p-3 text-gray-500"
          placeholder="Responder"
        />
        <button class="absolute right-2 top-4" @click="sendMessage">
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
    <RouterLink
      to="/app/vendedor/1/1"
      class="seller-info w-full mx-auto grid gap-3 shadow-md p-3 items-center justfiy-center"
    >

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
    </RouterLink>

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
          Válida hasta:
        </h1>
        <p class="text-gray-400 text-sm">14/11/23</p>
        <h1 class="text-md font-bold text-gray-500 text-center">
          Información adicional:
        </h1>
        <p class="text-gray-400 text-sm">Precio necogiable</p>
      </div>


      <div class="mx-auto w-5/6" >
        <h1 class="text-md font-bold text-gray-500 text-center">
          Parametros de calidad:
        </h1>

        <button
          class="w-full mx-auto bg-transparent text-center text-gray-400 text-sm mt-3 flex justify-center items-center gap-2"
        >
          Descargar planilla
          <svg
            fill="#8d919a"
            height="24px"
            width="24px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 29.978 29.978"
            xml:space="preserve"
          >
            <g>
              <path
                d="M25.462,19.105v6.848H4.515v-6.848H0.489v8.861c0,1.111,0.9,2.012,2.016,2.012h24.967c1.115,0,2.016-0.9,2.016-2.012
		v-8.861H25.462z"
              />
              <path
                d="M14.62,18.426l-5.764-6.965c0,0-0.877-0.828,0.074-0.828s3.248,0,3.248,0s0-0.557,0-1.416c0-2.449,0-6.906,0-8.723
		c0,0-0.129-0.494,0.615-0.494c0.75,0,4.035,0,4.572,0c0.536,0,0.524,0.416,0.524,0.416c0,1.762,0,6.373,0,8.742
		c0,0.768,0,1.266,0,1.266s1.842,0,2.998,0c1.154,0,0.285,0.867,0.285,0.867s-4.904,6.51-5.588,7.193
		C15.092,18.979,14.62,18.426,14.62,18.426z"
              />
            </g>
          </svg>
        </button>
      </div>

    </div>
  </div>

  <CModal alignment="center" :visible="visible"  @close="closeModal">
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

  
  <CModal alignment="center" :visible="errorChat"  @close="closeChatModal">
    <CModalBody>
      <div class="grid w-full gap-3 pb-3">
        <img
          src="@/assets/Nav/X.svg"
          alt="Close alert"
          @click="closeChatModal"
          class="justify-self-end"
        />
        <h2
          class="text-center text-xl font-bold text-gray-500 w-3/4 mx-auto text-center"
        >
          Error
        </h2>
        <div class="mx-auto text-center">
          <p class="text-gray-400 text-sm w-3/4 mx-auto">
            No es posible ingresar numeros o correos en el chat.
          </p>
        </div>
      </div>
    </CModalBody>
  </CModal>
</template>

<script allowJs>
import Event from '../libs/event.js';
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
      errorChat: false,
      messageInput: "",
      parametros: false,
      castigos: false,
      paramSelected: false,
      param: "",
      minmax: "",
      isActive: true,
      borders: true,
    };
  },
  created(){
    Event.on('back-to-details', () => {
      this.closeDetails();
    });
  },
  methods: {
    setProduct(product) {
      this.param = product;
      this.paramSelected = false;
      this.borders = true
    },
    checkParam(){
      this.paramSelected = true;
      if(this.param != ''){
        this.borders = false
      }else{
        this.borders = true
      }
    },
    sendProduct() {
      if(this.param == "") return;
      this.visible = true;
    },
    sendMessage() {
      // Check if message contains emails or numbers

      const expresion = /\w+@\w+\.+[a-z]/;

      if (this.messageInput === "") {
        return;
      } else if (expresion.test(this.messageInput)) {
        this.errorChat = true;
        return;
      } else if (this.messageInput.match(/\d+/g)) {
        this.errorChat = true;
        return;
      } else {
        this.messageInput = "";
      }

    },
    showDealDetails() {
      this.details = !this.details ? true : false;
      this.$emit("back-to-details");
      this.offerSaw = true;
    },
    closeDetails() {
      this.details = this.details ? false : true;
      this.$emit("back-to-details");
    },
    showModal() {
      this.visible = true;
    },
    closeChatModal() {
      this.errorChat = false;
    },
    closeModal() {
      // Close the menu by setting menuOpen to false
      this.visible = false;
    },
  },
};
</script>

<style scoped>
.message-wrap {
  height: 50vh;
}

/* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: #b4b1b1 #ffffff;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 8px;
  }

  *::-webkit-scrollbar-track {
    background: #ffffff;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #b4b1b1;
    border-radius: 10px;
    border: 3px solid #ffffff;
  }
</style>