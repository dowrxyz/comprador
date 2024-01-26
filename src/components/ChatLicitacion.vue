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
          @click="openModalDatos"
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

  <div v-if="details" class="content w-min-screen mx-auto grid my-3 gap-3">
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

      <h1 class="text-md font-bold text-gray-500 text-center">
        Parametros de calidad:
      </h1>
      <div class="mx-auto w-full overflow-x-scroll md:w-5/6">
        <table class="text-gray-500">
          <thead>
            <tr>
              <th class="text-sm">Imp-Hum</th>
              <th>1%</th>
              <th>2%</th>
              <th>3%</th>
              <th>4%</th>
              <th>5%</th>
              <th>6%</th>
              <th>7%</th>
              <th>8%</th>
              <th>9%</th>
              <th>10%</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="number" value="13.0" class="bg-transparent w-11/12">
              </td>
              <td>
                <input type="number" value="15.6" class="bg-transparent w-11/12">
              </td>
              <td>
                <input type="number" value="15.3" class="bg-transparent w-11/12">
              </td>
              <td>
                <input type="number" value="15.2" class="bg-transparent w-11/12">
              </td>
              <td>
                <input type="number" value="15.0" class="bg-transparent w-11/12">
              </td>
              <td>
                <input type="number" value="14.8" class="bg-transparent w-11/12">
              </td>
              <td>
                <input type="number" value="14.6" class="bg-transparent w-11/12">
              </td>
              <td>
                <input type="number" value="14.4" class="bg-transparent w-11/12">
              </td>
              <td>
                <input type="number" value="14.2" class="bg-transparent w-11/12">
              </td>
              <td>
                <input type="number" value="14.1" class="bg-transparent w-11/12">
              </td>
              <td>
                <input type="number" value="13.9" class="bg-transparent w-11/12">
              </td>
            </tr>
            <tr>
              <td>
                <input type="number" value="13.0" class="bg-transparent w-11/12">
              </td>
              <td>
                <input type="number" value="15.6" class="bg-transparent w-11/12">
              </td>
              <td>
                <input type="number" value="15.3" class="bg-transparent w-11/12">
              </td>
              <td>
                <input type="number" value="15.2" class="bg-transparent w-11/12">
              </td>
              <td>
                <input type="number" value="15.0" class="bg-transparent w-11/12">
              </td>
              <td>
                <input type="number" value="14.8" class="bg-transparent w-11/12">
              </td>
              <td>
                <input type="number" value="14.6" class="bg-transparent w-11/12">
              </td>
              <td>
                <input type="number" value="14.4" class="bg-transparent w-11/12">
              </td>
              <td>
                <input type="number" value="14.2" class="bg-transparent w-11/12">
              </td>
              <td>
                <input type="number" value="14.1" class="bg-transparent w-11/12">
              </td>
              <td>
                <input type="number" value="13.9" class="bg-transparent w-11/12">
              </td>
            </tr>
            <tr>
              <td>
                <input type="number" value="13.0" class="bg-transparent w-11/12">
              </td>
              <td>
                <input type="number" value="15.6" class="bg-transparent w-11/12">
              </td>
              <td>
                <input type="number" value="15.3" class="bg-transparent w-11/12">
              </td>
              <td>
                <input type="number" value="15.2" class="bg-transparent w-11/12">
              </td>
              <td>
                <input type="number" value="15.0" class="bg-transparent w-11/12">
              </td>
              <td>
                <input type="number" value="14.8" class="bg-transparent w-11/12">
              </td>
              <td>
                <input type="number" value="14.6" class="bg-transparent w-11/12">
              </td>
              <td>
                <input type="number" value="14.4" class="bg-transparent w-11/12">
              </td>
              <td>
                <input type="number" value="14.2" class="bg-transparent w-11/12">
              </td>
              <td>
                <input type="number" value="14.1" class="bg-transparent w-11/12">
              </td>
              <td>
                <input type="number" value="13.9" class="bg-transparent w-11/12">
              </td>
            </tr>
            <!-- Agrega más filas según sea necesario -->
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <CModal alignment="center" :visible="datos" @close="closeModalDatos">
    <CModalBody>
      <div class="grid w-full gap-3 justify-center h-modaldatos overflow-y-scroll">
        <h2
          class="text-center text-xl font-bold text-gray-500 w-3/4 mx-auto text-center"
        >
          Datos de tu compra
        </h2>
        <div class="mx-auto md:grid md:grid-cols-2 w-11/12 md:w-3/4 gap-2">
          <p class="text-gray-400 text-sm mx-auto col-span-2">
            Puedes confirmar los datos o indicar detalles para recibir tu
            compra.
          </p>

          <h3 class="text-gray-400 text-sm mt-3 col-span-2">
            Producto:
            <span class="text-gray-600 font-bold">{{
              this.$route.params.name
            }}</span>
          </h3>
          
          
          <div class="grid gap-1 mx-auto mt-3">
            <label for="entrega" class="text-gray-400 text-sm"
              >Precio Final</label
            >
            <input
              type="text"
              id="entrega"
              class="bg-transparent border-2 rounded-md h-10 w-full text-gray-600 text-sm p-1"
              placeholder="$16.50"
            />
          </div>

          
          <div class="grid gap-1 mx-auto mt-3">
            <label for="entrega" class="text-gray-400 text-sm"
              >Cantidad</label
            >
            <input
              type="text"
              id="entrega"
              class="bg-transparent border-2 rounded-md h-10 w-full text-gray-600 text-sm p-1"
              placeholder="1600 TM"
            />
          </div>

          <div class="grid gap-1 mx-auto col-span-2 w-full mt-3">
            <label for="entrega" class="text-gray-400 text-sm"
              >Dirección de entrega</label
            >
            <input
              type="text"
              id="entrega"
              class="bg-transparent border-2 rounded-md h-10 w-full text-gray-600 text-sm p-1"
              placeholder="Balvanera 32, Chiapas"
            />
          </div>

          <div class="grid gap-1 mx-auto col-span-2 w-full mt-3">
            <label for="recepcion" class="text-gray-400 text-sm"
              >Politicas de recepción</label
            >
            <input
              type="text"
              id="recepcion"
              class="bg-transparent border-2 rounded-md h-10 w-full text-gray-600 text-sm p-1"
            />
          </div>

          <div class="grid gap-1 mx-auto mt-3 col-span-2 w-full">
            <label for="recepcion" class="text-gray-400 text-sm"
              >Confirmar principales parámetros de calidad</label
            >
            <input
              type="text"
              id="recepcion"
              class="bg-transparent border-2 rounded-md h-10 w-full text-gray-600 text-sm p-1"
            />
          </div>

          
          <div class="inline-flex justify-between mx-auto mt-3 col-span-2 w-11/12">
            <label for="domicilio" class="text-gray-400 text-sm"
              >Precio es puesto en domicilio del cliente</label
            >
            <input
              type="checkbox"
              id="domicilio"

            />
          </div>
        </div>

        <button
          class="h-12 w-2/4 default-bar rounded-md text-white text-center mx-auto"
          @click="showModal"
        >
          Confirmar
        </button>
      </div>
    </CModalBody>
  </CModal>

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

  <CModal alignment="center" :visible="errorChat" @close="closeChatModal">
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
import Event from "../libs/event.js";
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
      datos: false,
    };
  },
  created() {
    Event.on("back-to-details", () => {
      this.closeDetails();
    });
  },
  methods: {
    closeModalDatos() {
      this.datos = false;
    },
    openModalDatos() {
      this.datos = true;
    },
    setProduct(product) {
      this.param = product;
      this.paramSelected = false;
      this.borders = true;
    },
    checkParam() {
      this.paramSelected = true;
      if (this.param != "") {
        this.borders = false;
      } else {
        this.borders = true;
      }
    },
    sendProduct() {
      if (this.param == "") return;
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
      this.datos = false;
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
table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: center;
}

th {
  background-color: #f2f2f2;
  text-align: left;
}
z .message-wrap {
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
.h-modaldatos{
  height: 75vh;
}

@media (min-width: 768px) {
  .h-modaldatos{
    height: 65vh;
  }
}

#domicilio {
  accent-color: #a3e635;
}
</style>
