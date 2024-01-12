<template>
  <div class="logIn">
    <img
      src="@/assets/ProfileIcon.svg"
      alt="Profile Icon"
      class="icon-app mx-auto my-6"
    />

    <form
      class="mx-auto items-center gap-3 w-11/12 my-5 md:w-1/2 justify-center grid md:grid-cols-2"
    >
      <div class="col-span-2">
        <label
          for="comp"
          class="text-gray-600 font-bold w-5/6 mx-auto"
          v-if="razon != '' || razon == '' || !showErrors"
          >Razon Social</label
        >
        <label
          for="comp"
          class="text-red-400 font-bold w-5/6 mx-auto"
          v-if="razon == '' && showErrors"
          >Ingresa una Razon Social</label
        >
        <input
          type="text"
          id="comp"
          v-model="razon"
          class="text-gray-400 w-full mx-auto bg-transparent border border-2 border-gray-300 rounded-[16px] px-3 py-3 rounded-md"
          placeholder="Razon Social"
        />
      </div>
      <div class="mx-auto grid relative w-full">
        <div class="relative">
          <label
            for="identificador"
            class="text-gray-600 font-bold w-5/6 mx-auto"
            v-if="identificacion != '' || identificacion == '' || !showErrors"
            >Tipo de Identificacion</label
          >
          <label
            for="identificador"
            class="text-red-400 font-bold w-5/6 mx-auto"
            v-if="identificacion == '' && showErrors"
            >Debes seleccionar un Tipo de Identificacion</label
          >
          <select
            id="identificador"
            v-model="identificacion"
            class="w-full mx-auto bg-transparent border border-2 border-gray-300 rounded-[16px] px-3 py-3 rounded-md text-gray-600"
          >
            <option selected value="RUC">RUC</option>
            <option value="Cédula">Cédula</option>
            <option value="Pasaporte">Pasaporte</option>
          </select>
        </div>
      </div>
      <div class="">
        <label
          for="cedula"
          class="text-gray-600 font-bold w-5/6 mx-auto"
          v-if="
            numeroIdentificacion != '' ||
            numeroIdentificacion == '' ||
            !showErrors
          "
          >Numero de Identificacion</label
        >
        <label
          for="cedula"
          class="text-red-400 font-bold w-5/6 mx-auto"
          v-if="numeroIdentificacion == '' && showErrors"
          >Debes ingresar un Numero de Identificacion</label
        >
        <input
          type="number"
          name="cedula"
          v-model="numeroIdentificacion"
          class="text-gray-400 w-full mx-auto bg-transparent border border-2 border-gray-300 rounded-[16px] px-3 py-3 rounded-md"
          placeholder="Numero de Identificacion"
        />
      </div>
      <div class="">
        <label
          for="correo"
          class="text-gray-600 font-bold w-5/6 mx-auto"
          v-if="email != '' || email == '' || !showErrors"
          >Correo</label
        >
        <label
          for="correo"
          class="text-red-400 font-bold w-5/6 mx-auto"
          v-if="email == '' && showErrors"
          >Debes ingresar un Correo</label
        >
        <input
          type="email"
          id="correo"
          v-model="email"
          class="text-gray-400 w-full mx-auto bg-transparent border border-2 border-gray-300 rounded-[16px] px-3 py-3 rounded-md"
          placeholder="Correo"
        />
      </div>
      <div class="relative">
        <label
          for="clave"
          class="text-gray-600 font-bold w-5/6 mx-auto"
          v-if="password != '' || password == '' || !showErrors"
          >Clave</label
        >
        <label
          for="clave"
          class="text-red-400 font-bold w-5/6 mx-auto"
          v-if="password == '' && showErrors"
          >Debes crear tu Clave</label
        >
        <input
          v-if="visiblePassword"
          type="password"
          id="clave"
          v-model="password"
          class="text-gray-400 w-full mx-auto bg-transparent border border-2 border-gray-300 rounded-[16px] px-3 py-3 rounded-md"
          placeholder="Clave"
        />

        <input
          v-else
          type="text"
          id="clave"
          v-model="password"
          class="text-gray-400 w-full mx-auto bg-transparent border border-2 border-gray-300 rounded-[16px] px-3 py-3 rounded-md"
          placeholder="Clave"
        />
        <button @click="changeVisibility" type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="absolute bottom-4 mb-0.5 right-2"
            fill="#a2afbe"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path
              d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"
            />
          </svg>
        </button>
      </div>

      <div class="mx-auto grid relative w-full">
        <div class="relative">
          <label
            for="provincia"
            class="text-gray-600 font-bold w-5/6 mx-auto"
            v-if="provincia != '' || provincia == '' || !showErrors"
            >Provincia</label
          >
          <label
            for="provincia"
            class="text-red-400 font-bold w-5/6 mx-auto"
            v-if="provincia == '' && showErrors"
            >Debes seleccionar una Provincia</label
          >
          <select
            id="provincia"
            v-model="provincia"
            class="w-full mx-auto bg-transparent border border-2 border-gray-300 rounded-[16px] px-3 py-3 rounded-md text-gray-600"
          >
            <option selected>Jaramijó</option>
            <option>Pedro Carbo</option>
            <option>Milagro</option>
          </select>
        </div>
      </div>

      <div class="mx-auto grid relative w-full">
        <div class="relative">
          <label
            for="canton"
            class="text-gray-600 font-bold w-5/6 mx-auto"
            v-if="canton != '' || canton == '' || !showErrors"
            >Cantón</label
          >
          <label
            for="canton"
            class="text-red-400 font-bold w-5/6 mx-auto"
            v-if="canton == '' && showErrors"
            >Debes seleccionar un Cantón</label
          >
          <select
            id="canton"
            v-model="canton"
            class="w-full mx-auto bg-transparent border border-2 border-gray-300 rounded-[16px] px-3 py-3 rounded-md text-gray-600"
          >
            <option selected>Jaramijó</option>
            <option>Pedro Carbo</option>
            <option>Milagro</option>
          </select>
        </div>
      </div>
      <div class="">
        <label
          for="dic"
          class="text-gray-600 font-bold w-5/6 mx-auto"
          v-if="direccion != '' || direccion == '' || !showErrors"
          >Dirección</label
        >
        <label
          for="dic"
          class="text-red-400 font-bold w-5/6 mx-auto"
          v-if="direccion == '' && showErrors"
          >Debes ingresar tu Dirección</label
        >
        <input
          type="text"
          id="dic"
          v-model="direccion"
          class="text-gray-400 w-full mx-auto bg-transparent border border-2 border-gray-300 rounded-[16px] px-3 py-3 rounded-md"
          placeholder="Dirección"
        />
      </div>
      <div class="">
        <label
          for="dic"
          class="text-gray-600 font-bold w-5/6 mx-auto"
          v-if="ubicacion != '' || ubicacion == '' || !showErrors"
          >Ubicación</label
        >
        <label
          for="dic"
          class="text-red-400 font-bold w-5/6 mx-auto"
          v-if="ubicacion == '' && showErrors"
          >Debes ingresar tu Ubicación</label
        >
        <input
          type="text"
          id="ubicacion"
          v-model="ubicacion"
          class="text-gray-400 w-full mx-auto bg-transparent border border-2 border-gray-300 rounded-[16px] px-3 py-3 rounded-md"
          placeholder="Ubicación"
        />
      </div>
      <div class="col-span-2">
        <label
          for="telf"
          class="text-gray-600 font-bold w-5/6 mx-auto"
          v-if="telefono != '' || telefono == '' || !showErrors"
          >Teléfono</label
        >
        <label
          for="telf"
          class="text-red-400 font-bold w-5/6 mx-auto"
          v-if="telefono == '' && showErrors"
          >Debes ingresar un numero de Teléfono</label
        >
        <input
          type="text"
          id="telf"
          v-model="telefono"
          class="text-gray-400 w-full mx-auto bg-transparent border border-2 border-gray-300 rounded-[16px] px-3 py-3 rounded-md"
          placeholder="Teléfono"
        />
      </div>

      <Contact num="1" />
      <Contact num="2" />
      <Contact num="3" />

      <div class="col-span-2">
        <label
          for="eco"
          class="text-gray-600 font-bold w-5/6 mx-auto"
          v-if="
            actividadEconomica != '' || actividadEconomica == '' || !showErrors
          "
          >Actividad Económica</label
        >
        <label
          for="eco"
          class="text-red-400 font-bold w-5/6 mx-auto"
          v-if="actividadEconomica == '' && showErrors"
          >Debes ingresar un tipo de Actividad Económica</label
        >
        <input
          type="text"
          id="eco"
          v-model="actividadEconomica"
          class="text-gray-400 w-full mx-auto bg-transparent border border-2 border-gray-300 rounded-[16px] px-3 py-3 rounded-md"
          placeholder="Actividad Económica"
        />
      </div>

      <div class="mx-auto grid relative w-full col-span-2">
        <div class="relative">
          <label
            for="negocio"
            class="text-gray-600 font-bold w-5/6 mx-auto"
            v-if="tipoNegocio != '' || tipoNegocio == '' || !showErrors"
            >Tipo de Negocio</label
          >
          <label
            for="negocio"
            class="text-red-400 font-bold w-5/6 mx-auto"
            v-if="tipoNegocio == '' && showErrors"
            >Debes ingresar un tipo de Negocio</label
          >
          <select
            id="negocio"
            v-model="tipoNegocio"
            class="w-full mx-auto bg-transparent border border-2 border-gray-300 rounded-[16px] px-3 py-3 rounded-md text-gray-600"
          >
            <option selected>Agricultor</option>
            <option>Comerciante</option>
            <option>Asociación de Agricultor</option>
          </select>
        </div>
      </div>

      <div class="col-span-2 grid relative">
        <label for="eco" class="text-gray-600 font-bold w-full mx-auto"
          >Productos de Interés</label
        >
        <RouterLink
          to="/app/add/product/interested/profile"
          class="text-gray-400 w-full mx-auto bg-transparent border border-2 border-gray-300 px-3 py-3 rounded-md"
          >Agregar productos</RouterLink
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="absolute bottom-4 mb-0.5 right-2"
          fill="#a2afbe"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
        </svg>
      </div>

      <div class="grid" v-if="getProducts().length > 0">
        <h1 class="text-gray-600 mb-3 font-bold">Productos Agregados</h1>

        <p
          class="text-gray-500 flex gap-3 items-center"
          v-for="item in getProducts()"
          :key="item.id"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="18"
            fill="#a2afbe"
            viewBox="0 -960 960 960"
            width="18"
          >
            <path
              d="m560-120-57-57 144-143H200v-480h80v400h367L503-544l56-57 241 241-240 240Z"
            />
          </svg>
          {{ item.nombre }}

          <button type="button" v-on:click="deleteProduct(item.id)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              fill="#E87C61"
            >
              <path
                d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
              />
            </svg>
          </button>
        </p>
      </div>

      <div class="col-span-2">
        <label
          for="ctm"
          class="text-gray-600 font-bold w-5/6 mx-auto"
          v-if="consumoMesTM != '' || consumoMesTM == '' || !showErrors"
          >Consumo Mes TM</label
        >
        <label
          for="ctm"
          class="text-red-400 font-bold w-5/6 mx-auto"
          v-if="consumoMesTM == '' && showErrors"
          >Debes ingresar un consumo por mes</label
        >
        <input
          type="number"
          name="ctm"
          placeholder="Consumo Mes TM"
          v-model="consumoMesTM"
          class="text-gray-400 w-full mx-auto bg-transparent border border-2 border-gray-300 rounded-[16px] px-3 py-3 rounded-md"
        />
      </div>

      <div class="col-span-2">
        <label
          for="ca"
          class="text-gray-600 font-bold w-5/6 mx-auto"
          v-if="consumoAnual != '' || consumoAnual == '' || !showErrors"
          >Consumo Anual</label
        >
        <label
          for="ca"
          class="text-red-400 font-bold w-5/6 mx-auto"
          v-if="consumoAnual == '' && showErrors"
          >Debes ingresar un consumo anual</label
        >
        <input
          type="number"
          name="ca"
          placeholder="Consumo Anual"
          v-model="consumoAnual"
          class="text-gray-400 w-full mx-auto bg-transparent border border-2 border-gray-300 rounded-[16px] px-3 py-3 rounded-md"
        />
      </div>

      <div class="col-span-2">
        <label
          for="pmes"
          v-if="presupuestoMes != '' || presupuestoMes == '' || !showErrors"
          class="text-gray-600 font-bold w-5/6 mx-auto"
          >Presupuesto por Mes</label
        >
        <label
          for="pmes"
          v-if="presupuestoMes == '' && showErrors"
          class="text-red-400 font-bold w-5/6 mx-auto"
          >Debes ingresar un presupuesto por Mes</label
        >
        <input
          type="number"
          name="pmes"
          placeholder="Presupuesto por Mes"
          v-model="presupuestoMes"
          class="text-gray-400 w-full mx-auto bg-transparent border border-2 border-gray-300 rounded-[16px] px-3 py-3 rounded-md"
        />
      </div>

      <button
        type="button"
        @click="showModal"
        class="py-3 px-5 default-bar mx-auto mt-3 w-2/3 col-span-2 rounded font-bold grid items-center mb-3"
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
import Contact from "@/components/Contacto.vue";
import { mapGetters, mapActions } from 'vuex';
import { CModal, CModalBody } from "@coreui/vue";
export default {
  components: {
    CModal,
    Contact,
    CModalBody,
  },
  computed: {
    ...mapGetters(['getProducts']),
    ...mapGetters(['deleteProduct']),
  },
  data() {
    return {
      visible: false,
      visiblePassword: true,
      razon: "",
      identificacion: "RUC",
      numeroIdentificacion: "",
      email: "",
      password: "",
      provincia: "Jaramijó",
      canton: "Jaramijó",
      direccion: "",
      ubicacion: "",
      telefono: "",
      actividadEconomica: "",
      tipoNegocio: "Agricultor",
      consumoMesTM: "",
      consumoAnual: "",
      presupuestoMes: "",
      showErrors: false,

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
    changeVisibility () {
      this.visiblePassword = !this.visiblePassword;
    },
  },
};
</script>
