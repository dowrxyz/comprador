<template>
  <CAccordion flush class="col-span-2">
    <CAccordionItem class="shadow-md">
      <CAccordionHeader class="flex gap-3 rounded-md">
        <p class="text-gray-500 text-sm font-semibold w-3/4 ml-3">Contacto {{ num }}</p>
      </CAccordionHeader>
      <CAccordionBody>
        <div class="mb-2 visible">
          <label for="name" class="text-gray-600 font-bold w-5/6 mx-auto"
            >Nombre</label
          >
          <input
            type="text"
            id="name"
            class="text-gray-400 w-full mx-auto bg-transparent border-2 border-gray-300 px-3 py-3 rounded-md"
            placeholder="Nombre"
          />
        </div>
        <div class="mb-2 visible">
          <label for="telf" class="text-gray-600 font-bold w-5/6 mx-auto"
            >Teléfono</label
          >
          <input
            type="number"
            id="telf"
            class="text-gray-400 w-full mx-auto bg-transparent border-2 border-gray-300 px-3 py-3 rounded-md"
            placeholder="Teléfono"
          />
        </div>
        <div class="mb-2 visible">
          <label for="cargo" class="text-gray-600 font-bold w-5/6 mx-auto"
            >Cargo</label
          >
          <input
            type="text"
            id="cargo"
            class="text-gray-400 w-full mx-auto bg-transparent border-2 border-gray-300 px-3 py-3 rounded-md"
            placeholder="Cargo"
          />
        </div>
        <div class="mb-2 visible">
          <label for="correo" class="text-gray-600 font-bold w-5/6 mx-auto"
            >Correo</label
          >
          <input
            type="email"
            id="correo"
            class="text-gray-400 w-full mx-auto bg-transparent border-2 border-gray-300 px-3 py-3 rounded-md"
            placeholder="Correo"
          />
        </div>
      </CAccordionBody>
    </CAccordionItem>
  </CAccordion>
</template>

<script allowJs>
import {
  CModal,
  CModalBody,
  CAccordion,
  CAccordionBody,
  CAccordionItem,
  CAccordionHeader,
} from "@coreui/vue";
export default {
  components: {
    CModal,
    CModalBody,
    CAccordion,
    CAccordionItem,
    CAccordionHeader,
    CAccordionBody,
  },
  props: {
    num: {
      type: Number,
      required: true,
    },
  }
};
</script>
