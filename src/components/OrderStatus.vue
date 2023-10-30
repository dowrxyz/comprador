<template>
  <div class="content w-11/12 mx-auto grid my-5 gap-3">
    <div class="deliver-title grid gap-2">
      <p class="text-gray-500 text-sm font-bold">Proceso creado:</p>
      <div class="flex gap-2">
        <img
          src="@/assets/Status/Event.svg"
          alt="Calendar"
          class="w-4 h-4 self-center"
        />
        <h2 class="text-center text-gray-600 text-2xl">Octubre 5, 2023</h2>
      </div>
    </div>

    <div class="deliver-status flex gap-4 mt-3 w-full mx-auto">
      <img
        src="@/assets/Status/FirstCheck.svg"
        v-if="count == 1"
        @click="changeStatus"
      />
      <img
        src="@/assets/Status/SecondCheck.svg"
        v-if="count == 2"
        @click="showModal"
      />
      <img
        src="@/assets/Status/ThirdCheck.svg"
        v-if="count == 3"
        @click="changeStatus"
      />
      <img
        src="@/assets/Status/AllCheck.svg"
        v-if="count == 4"
        @click="changeStatus"
      />

      <div class="deliver-cards grid gap-3 w-full">
        <div class="bg-gray-200 text-left px-4 py-3 rounded-md grid gap-1">
          <h2 class="text-md text-gray-700">Pendiente de entrega</h2>
          <p class="text-sm text-gray-600">Noviembre 19, 2023 4:50 PM</p>
        </div>
        <div class="bg-blue-100 text-left px-4 py-3 rounded-md grid gap-1">
          <h2 class="text-md text-gray-700">En camino</h2>
          <p class="text-sm text-gray-600">Noviembre 19, 2023 4:50 PM</p>
        </div>

        <!--Recibido-->
        <div
          class="bg-blue-200 text-left px-4 py-3 rounded-md grid gap-1"
          v-if="recibido"
        >
          <h2 class="text-md text-gray-700">Recibido Aceptado</h2>
          <p class="text-sm text-gray-600">Noviembre 19, 2023 4:50 PM</p>
        </div>
        <div
          class="bg-red-200 text-left px-4 py-3 rounded-md grid gap-1"
          v-if="!recibido && !esperando"
        >
          <h2 class="text-md text-gray-700">Recibido Rechazado</h2>
          <p class="text-sm text-gray-600">Noviembre 19, 2023 4:50 PM</p>
        </div>
        <div
          class="bg-green-200 text-left px-4 py-3 rounded-md grid gap-1"
          v-if="esperando"
        >
          <h2 class="text-md text-gray-700">Recibido Esperando</h2>
          <p class="text-sm text-gray-600">Noviembre 19, 2023 4:50 PM</p>
        </div>

        <div class="bg-orange text-left px-4 py-3 rounded-md grid gap-1">
          <h2 class="text-md text-gray-700">Pagado</h2>
          <p class="text-sm text-gray-600">Noviembre 19, 2023 4:50 PM</p>
        </div>
      </div>
    </div>

    <div class="deliver-data grid gap-4 mt-3" @click="showEmbed">
      <h1 class="text-sm text-gray-700 font-bold">Lugar de entrega:</h1>
      <div class="flex gap-2 items-center">
        <span
          class="flex bg-blue-100 rounded-full h-10 w-10 items-center justify-center"
        >
          <img
            src="@/assets/Status/Location.svg"
            alt="StatusBar"
            class="self-center"
          />
        </span>
        <p class="text-gray-600 text-xs w-3/4">
          Industria Copesca, Guayaquil - Guayas 090101
        </p>
      </div>

      <hr />
    </div>

    <div class="embed-data grid mb-6 mt-2" v-if="embed">
      <iframe
        class="rounded-md shadow-sm"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d592.6469091181473!2d-79.90415112891621!3d-2.2149872566503324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d13cbe855805f%3A0x8015a492f4fca473!2sGuayaquil%2C%20Ecuador!5e0!3m2!1ses-419!2sar!4v1698694785560!5m2!1ses-419!2sar"
        width="100%"
        height="300"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    <div class="deliver-price grid gap-3">
      <div class="grid grid-cols-2">
        <p class="text-sm text-gray-700 text-left">Precio</p>
        <p class="text-sm text-gray-700 text-right">$15,50</p>
      </div>
      <div class="grid grid-cols-2">
        <p class="text-sm text-gray-700 text-left">Cantidad</p>
        <p class="text-sm text-gray-700 text-right">200</p>
      </div>
      <div class="grid grid-cols-2">
        <p class="text-sm text-gray-800 text-left font-bold">Total</p>
        <p class="text-sm text-gray-800 text-right font-bold">$35.000.00</p>
      </div>
    </div>
  </div>

  <!-- Alert Modal -->
  <CModal alignment="center" :visible="delivered">
    <CModalBody>
      <div class="grid w-full gap-3 pb-3">
        <img
          src="@/assets/Nav/X.svg"
          alt="Close alert"
          @click="closeModal"
          class="justify-self-end"
        />
        <h2
          class="text-center text-md font-bold text-gray-500 w-3/5 mx-auto text-center"
        >
          Su producto fue recibido con éxito?
        </h2>
        <div class="flex gap-3 w-5/6 mx-auto">
          <button
            class="default-bar text-white text-center p-2 w-3/5 rounded-md shadow"
            @click="changeStatus"
          >
            Si
          </button>
          <button
            class="bg-gray-400 text-white text-center p-2 w-3/5 rounded-md shadow"
            @click="callLater"
          >
            Esperar
          </button>
          <button
            class="bg-red-400 text-white text-center p-2 w-3/5 rounded-md shadow"
            @click="notReceived"
          >
            Rechazar
          </button>
        </div>
      </div>
    </CModalBody>
  </CModal>

  <!-- Reseña Modal -->
  <CModal alignment="center" :visible="calificar">
    <CModalBody>
      <div class="grid w-full gap-3 pb-3">
        <h2
          class="mt-3 text-center text-md font-bold text-gray-900 w-3/5 mx-auto text-center"
        >
          Porfavor califica al vendedor
        </h2>
        <h3 class="text-center text-gray-700 font-bold text-sm">
          {{ value }}.0
        </h3>
        <div class="flex gap-3 w-5/6 mx-auto justify-center" v-if="value == 0">
          <img
            src="@/assets/Calificar/GrayStar.svg"
            class="h-6 w-6"
            @click="calify(1)"
          />
          <img
            src="@/assets/Calificar/GrayStar.svg"
            class="h-6 w-6"
            @click="calify(2)"
          />
          <img
            src="@/assets/Calificar/GrayStar.svg"
            class="h-6 w-6"
            @click="calify(3)"
          />
          <img
            src="@/assets/Calificar/GrayStar.svg"
            class="h-6 w-6"
            @click="calify(4)"
          />
          <img
            src="@/assets/Calificar/GrayStar.svg"
            class="h-6 w-6"
            @click="calify(5)"
          />
        </div>
        <Calify
          :value="value"
          v-if="value >= 1"
          @update:value="updateCalification"
        ></Calify>

        <button
          class="mt-3 default-bar text-white font-bold shadow p-2 h-12 mx-auto w-3/5 rounded-md"
        >
          Enviar
        </button>
      </div>
    </CModalBody>
  </CModal>
</template>

<script>
import { CModal, CModalBody } from "@coreui/vue";
import Calify from "@/components/Calify.vue";
export default {
  components: {
    CModal,
    Calify,
    CModalBody,
  },
  data() {
    return {
      count: 1,
      delivered: false,
      esperando: true,
      recibido: null,
      calificar: false,
      embed: false,
      value: 0,
    };
  },
  methods: {
    calify(value) {
      this.value = value;
    },
    showEmbed() {
      this.embed = this.embed ? false : true;
    },
    updateCalification(value) {
      this.value = value;
    },
    changeStatus() {
      if (this.count == 2) {
        this.count++;
        this.recibido = true;
        this.esperando = false;
        this.closeModal();
        this.calificar = true;
      } else if (this.count < 4) {
        this.count++;
      }
    },
    notReceived() {
      if (this.count == 2) {
        this.recibido = false;
        this.esperando = false;
        this.closeModal();
        this.calificar = true;
      }
    },
    callLater() {
      this.closeModal();
      setTimeout(() => {
        this.showModal();
      }, 2000);
    },
    showModal() {
      this.delivered = true;
    },
    closeModal() {
      // Close the menu by setting menuOpen to false
      this.delivered = false;
      this.calificar = false;
    },
  },
};
</script>
