<template>
  <div class="content w-full mx-auto grid my-5 gap-2">
    <CAccordion flush>
      <CAccordionItem class="shadow-md">
        <CAccordionHeader class="flex gap-3">
        <img src="@/assets/Fertilizer.svg" alt="Fertilizer Icon" />
        <p class="text-gray-500 text-sm font-semibold w-3/4 ml-3">Fertilizantes</p>
        </CAccordionHeader>
        <CAccordionBody>
          Aqui podras ver la informacion acerca de los Fertilizantes de Agroec
        </CAccordionBody>
      </CAccordionItem>
    </CAccordion>
    <CAccordion flush>
      <CAccordionItem class="shadow-md">
        <CAccordionHeader class="flex gap-3">
          <img src="@/assets/Bottle.svg" alt="Hibridos Icon" />
          <p class="text-gray-500 text-sm font-semibold w-3/4 ml-3">
            Variedades de híbridos
          </p>
        </CAccordionHeader>
        <CAccordionBody>
          Aqui podras conocer acerca de la distinta variedad de hibridos.
        </CAccordionBody>
      </CAccordionItem>
    </CAccordion>
    <CAccordion flush>
      <CAccordionItem class="shadow-md">
        <CAccordionHeader class="flex gap-3">
        <img src="@/assets/Defensive.svg" alt="Defensivos Icon" />
        <p class="text-gray-500 text-sm font-semibold w-3/4 ml-3">Defensivos</p>
        </CAccordionHeader>
        <CAccordionBody>
          Aqui podras conocer acerca de los defensivos.
        </CAccordionBody>
      </CAccordionItem>
    </CAccordion>
  </div>
</template>

<script>
import {
  CAccordion,
  CAccordionItem,
  CAccordionHeader,
  CAccordionBody,
} from "@coreui/vue";
export default {
  components: {
    CAccordion,
    CAccordionItem,
    CAccordionHeader,
    CAccordionBody,
  },
  data() {
    return {
      insumos: false,
    };
  },
};
</script>
