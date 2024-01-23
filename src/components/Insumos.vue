<template>
  <div class="content w-full mx-auto grid my-5 gap-2">
    <RouterLink to="/app/insumos/1" class="p-2 mx-auto w-full items-center shadow-md h-16 flex">
      <div class="w-11/12 mx-auto flex items-center">
        <img src="@/assets/Fertilizer.svg" alt="Fertilizer Icon" />
        <p class="text-gray-500 text-sm font-semibold w-3/4 ml-3">
          Fertilizantes
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
            fill="#000000"
          />
        </svg>
    </RouterLink>
    <RouterLink to="/app/insumos/2" class="p-2 mx-auto w-full items-center shadow-md h-16 flex">
      <div class="w-11/12 mx-auto flex items-center">
        <img src="@/assets/Bottle.svg" alt="Fertilizer Icon" />
        <p class="text-gray-500 text-sm font-semibold w-3/4 ml-3">
          Variedades de híbridos
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
            fill="#000000"
          />
        </svg>
    </RouterLink>
    <RouterLink to="/app/insumos/3" class="p-2 mx-auto w-full items-center shadow-md h-16 flex">
      <div class="w-11/12 mx-auto flex items-center">
        <img src="@/assets/Defensive.svg" alt="Fertilizer Icon" />
        <p class="text-gray-500 text-sm font-semibold w-3/4 ml-3">Defensivos</p>
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
            fill="#000000"
          />
        </svg>
    </RouterLink>
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


<style scoped>
.rotate {
  transform: rotate(-90deg);
}
</style>