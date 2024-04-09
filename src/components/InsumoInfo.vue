<template>
  <div class="content w-full mx-auto grid mb-5 gap-2 md:w-1/2" v-if="!details">
    <div
      class="p-1 mx-auto w-full items-center h-20 flex border-bottom-2 border-top-2"
      @click="openDetails"
    >
      <div class="w-full flex items-center">
        <img src="@/assets/fertlizante.webp" class="h-20 w-20" alt="Insumo Icon">
        <p class="text-gray-500 text-md font-semibold w-3/4 ml-3">1,4 SIGHT</p>
      </div>
      <svg
        width="12"
        height="7"
        class="rotate"
        viewBox="0 0 12 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.43431 6.56569C5.74673 6.8781 6.25327 6.8781 6.56569 6.56569L11.6569 1.47452C11.9693 1.1621 11.9693 0.655565 11.6569 0.343146C11.3444 0.0307264 10.8379 0.0307264 10.5255 0.343146L6 4.86863L1.47452 0.343146C1.1621 0.0307265 0.655565 0.0307265 0.343146 0.343146C0.0307264 0.655565 0.0307264 1.1621 0.343146 1.47452L5.43431 6.56569ZM5.2 5L5.2 6L6.8 6L6.8 5L5.2 5Z"
          fill="#b3b3b3"
        />
      </svg>
    </div>
    <div
      class="p-2 mx-auto w-full items-center h-20 flex border-bottom-2"
      @click="openDetails"
    >
      <div class="w-full flex items-center">
        <img src="@/assets/fertlizante.webp" class="h-20 w-20" alt="Insumo Icon">
        <p class="text-gray-500 text-md font-semibold w-3/4 ml-3">
          2,4D (240) PICLORAM
        </p>
      </div>
      <svg
        width="12"
        height="7"
        class="rotate"
        viewBox="0 0 12 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.43431 6.56569C5.74673 6.8781 6.25327 6.8781 6.56569 6.56569L11.6569 1.47452C11.9693 1.1621 11.9693 0.655565 11.6569 0.343146C11.3444 0.0307264 10.8379 0.0307264 10.5255 0.343146L6 4.86863L1.47452 0.343146C1.1621 0.0307265 0.655565 0.0307265 0.343146 0.343146C0.0307264 0.655565 0.0307264 1.1621 0.343146 1.47452L5.43431 6.56569ZM5.2 5L5.2 6L6.8 6L6.8 5L5.2 5Z"
          fill="#b3b3b3"
        />
      </svg>
    </div>
    <div
      class="p-2 mx-auto w-full items-center h-20 flex border-bottom-2"
      @click="openDetails"
    >
      <div class="w-full flex items-center">
        <img src="@/assets/fertlizante.webp" class="h-20 w-20" alt="Insumo Icon">
        <p class="text-gray-500 text-md font-semibold w-3/4 ml-3">
          2,4D AMINA CCAB
        </p>
      </div>
      <svg
        width="12"
        height="7"
        class="rotate"
        viewBox="0 0 12 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.43431 6.56569C5.74673 6.8781 6.25327 6.8781 6.56569 6.56569L11.6569 1.47452C11.9693 1.1621 11.9693 0.655565 11.6569 0.343146C11.3444 0.0307264 10.8379 0.0307264 10.5255 0.343146L6 4.86863L1.47452 0.343146C1.1621 0.0307265 0.655565 0.0307265 0.343146 0.343146C0.0307264 0.655565 0.0307264 1.1621 0.343146 1.47452L5.43431 6.56569ZM5.2 5L5.2 6L6.8 6L6.8 5L5.2 5Z"
          fill="#b3b3b3"
        />
      </svg>
    </div>
    <div
      class="p-2 mx-auto w-full items-center h-20 flex border-bottom-2"
      @click="openDetails"
    >
      <div class="w-full flex items-center">
        <img src="@/assets/fertlizante.webp" class="h-20 w-20" alt="Insumo Icon">
        <p class="text-gray-500 text-md font-semibold w-3/4 ml-3">
          2,4D 806 RN
        </p>
      </div>
      <svg
        width="12"
        height="7"
        class="rotate"
        viewBox="0 0 12 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.43431 6.56569C5.74673 6.8781 6.25327 6.8781 6.56569 6.56569L11.6569 1.47452C11.9693 1.1621 11.9693 0.655565 11.6569 0.343146C11.3444 0.0307264 10.8379 0.0307264 10.5255 0.343146L6 4.86863L1.47452 0.343146C1.1621 0.0307265 0.655565 0.0307265 0.343146 0.343146C0.0307264 0.655565 0.0307264 1.1621 0.343146 1.47452L5.43431 6.56569ZM5.2 5L5.2 6L6.8 6L6.8 5L5.2 5Z"
          fill="#b3b3b3"
        />
      </svg>
    </div>
    <div
      class="p-2 mx-auto w-full items-center h-20 flex border-bottom-2"
      @click="openDetails"
    >
      <div class="w-full flex items-center">
        <img src="@/assets/fertlizante.webp" class="h-20 w-20" alt="Insumo Icon">
        <p class="text-gray-500 text-md font-semibold w-3/4 ml-3">
          2,4D 806 SL ALAMOS
        </p>
      </div>
      <svg
        width="12"
        height="7"
        class="rotate"
        viewBox="0 0 12 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.43431 6.56569C5.74673 6.8781 6.25327 6.8781 6.56569 6.56569L11.6569 1.47452C11.9693 1.1621 11.9693 0.655565 11.6569 0.343146C11.3444 0.0307264 10.8379 0.0307264 10.5255 0.343146L6 4.86863L1.47452 0.343146C1.1621 0.0307265 0.655565 0.0307265 0.343146 0.343146C0.0307264 0.655565 0.0307264 1.1621 0.343146 1.47452L5.43431 6.56569ZM5.2 5L5.2 6L6.8 6L6.8 5L5.2 5Z"
          fill="#b3b3b3"
        />
      </svg>
    </div>
  </div>

  <div v-if="details" class="content w-min-screen mx-auto grid mb-3 gap-3 md:w-1/2">
    <Slider/>
    <div
      class="seller-info w-full mx-auto grid gap-3 shadow-md p-3 items-center justfiy-center"
    >

      <div class="card-info border-bottom-1 pb-2">
        <h1 class="text-gray-400">Nombre Comercial</h1>
        <p class="text-gray-800 text-md font-semibold">1,4 SIGHT</p>
      </div>

      <CAccordion flush class="border-bottom-1">
        <CAccordionItem class="pb-2">
          <CAccordionHeader class="flex gap-3">
            <p class="text-gray-800 text-md font-semibold">Composicion</p>
          </CAccordionHeader>
          <CAccordionBody>
            <div class="grid gap-2">
              <span>1,4 diffentamina 98,77%</span>
              <span>Otros ingredientes 1,63%</span>
            </div>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>

      <CAccordion flush class="border-bottom-1">
        <CAccordionItem class="pb-2">
          <CAccordionHeader class="flex gap-3">
            <p class="text-gray-800 text-md font-semibold">Clase</p>
          </CAccordionHeader>
          <CAccordionBody>
            <div class="grid gap-2">
              <span>Data del Insumo</span>
            </div>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>

      <CAccordion flush class="border-bottom-1">
        <CAccordionItem class="pb-2">
          <CAccordionHeader class="flex gap-3">
            <p class="text-gray-800 text-md font-semibold">Tipo de Formula</p>
          </CAccordionHeader>
          <CAccordionBody>
            <div class="grid gap-2">
              <span>Data del Insumo</span>
            </div>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>

      <CAccordion flush class="border-bottom-1">
        <CAccordionItem class="pb-2">
          <CAccordionHeader class="flex gap-3">
            <p class="text-gray-800 text-md font-semibold">Titular</p>
          </CAccordionHeader>
          <CAccordionBody>
            <div class="grid gap-2">
              <span>Data del Insumo</span>
            </div>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>

      <CAccordion flush class="border-bottom-1">
        <CAccordionItem class="pb-2">
          <CAccordionHeader class="flex gap-3">
            <p class="text-gray-800 text-md font-semibold">Clasificación</p>
          </CAccordionHeader>
          <CAccordionBody>
            <div class="grid gap-2">
              <span>Data del Insumo</span>
            </div>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>

      <CAccordion flush class="border-bottom-1">
        <CAccordionItem class="pb-2">
          <CAccordionHeader class="flex gap-3">
            <p class="text-gray-800 text-md font-semibold">
              Instrucciones de uso
            </p>
          </CAccordionHeader>
          <CAccordionBody>
            <div class="grid gap-2">
              <span>Data del Insumo</span>
            </div>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>

      <CAccordion flush class="border-bottom-1">
        <CAccordionItem class="pb-2">
          <CAccordionHeader class="flex gap-3">
            <p class="text-gray-800 text-md font-semibold">
              Cultura, Modo de aplicación, Época e intervalo
            </p>
          </CAccordionHeader>
          <CAccordionBody>
            <div class="grid gap-2">
              <span>Data del Insumo</span>
            </div>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>

      <CAccordion flush class="border-bottom-1">
        <CAccordionItem class="pb-2">
          <CAccordionHeader class="flex gap-3">
            <p class="text-gray-800 text-md font-semibold">
              Intervalo de entrada área tratada
            </p>
          </CAccordionHeader>
          <CAccordionBody>
            <div class="grid gap-2">
              <span>Data del Insumo</span>
            </div>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>

      <CAccordion flush class="border-bottom-1">
        <CAccordionItem class="pb-2">
          <CAccordionHeader class="flex gap-3">
            <p class="text-gray-800 text-md font-semibold">Link</p>
          </CAccordionHeader>
          <CAccordionBody>
            <div class="grid gap-2">
              <span>Data del Insumo</span>
            </div>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>

      
      <CAccordion flush class="border-bottom-1">
        <CAccordionItem class="pb-2">
          <CAccordionHeader class="flex gap-3">
            <p class="text-gray-800 text-md font-semibold">Atención</p>
          </CAccordionHeader>
          <CAccordionBody>
            <div class="grid gap-2">
              <span>Data del Insumo</span>
            </div>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>


      <a href="#" class="text-decoration-none text-center text-white default-bar h-16 my-5 grid items-center rounded-md w-1/2 mx-auto">Contactar</a>
    </div>
  </div>
</template>

<script>
import Slider from './SliderInsumos.vue';
import Event from "../libs/event.js";
import {
  CAccordion,
  CAccordionItem,
  CAccordionHeader,
  CAccordionBody,
} from "@coreui/vue";
export default {
  components: {
    Slider,
    CAccordion,
    CAccordionItem,
    CAccordionHeader,
    CAccordionBody,
  },
  data() {
    return {
      insumos: false,
      details: false,
    };
  },
  created() {
    Event.on("back-to-details", () => {
      this.closeDetails();
    });
  },
  methods: {
    openDetails() {
      this.details = !this.details ? true : false;
      this.$emit("back-to-details");
    },
    closeDetails() {
      this.details = !this.details ? true : false;
      this.$emit("back-to-details");
    },
  },
};
</script>

<style scoped>
.rotate {
  transform: rotate(-90deg);
}
</style>
