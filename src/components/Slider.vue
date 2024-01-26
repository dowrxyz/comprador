<template>
  <Splide
    :options="{ rewind: true, wheel: true, arrows: false }"
    aria-label="Vue Splide Example"
    class="my-3"
  >
    <SplideSlide>
      <div
        class="bg-blue-400 w-11/12 h-32 md:h-48 p-3  grid grid-cols-2  items-center justify-items-center mx-auto rounded-xl"
      >
        <div class="grid">
          <h1 class="font-bold">No data</h1>
          <p class="text-sm">
            Resguardado para publicidad
          </p>
        </div>

      </div>
    </SplideSlide>
    <SplideSlide>
      <div
        class="default-bar w-11/12 h-32 md:h-48 p-3 grid grid-cols-2 items-center justify-items-center mx-auto rounded-xl"
      >
        <div class="grid">
          <h1 class="font-bold">No data</h1>
          <p class="text-sm">
            Resguardado para publicidad
          </p>
        </div>
      </div>
    </SplideSlide>
    <SplideSlide class="grid place-center">
      <div
        class="bg-indigo-600 w-11/12 h-32 md:h-48 p-3 grid grid-cols-2  items-center justify-items-center mx-auto rounded-xl"
      >
        <div class="grid">
          <h1 class="font-bold">Evita estafas</h1>
          <p class="text-sm">
            Realiza transacciones de manera segura.
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          height="54px"
          viewBox="0 0 24 24"
          width="54px"
          fill="#ffffff"
        >
          <g>
            <rect fill="none" height="24" width="24" />
            <path
              d="M12,1L3,5v6c0,5.55,3.84,10.74,9,12c5.16-1.26,9-6.45,9-12V5L12,1L12,1z M11,7h2v2h-2V7z M11,11h2v6h-2V11z"
            />
          </g>
        </svg>
      </div>
    </SplideSlide>
  </Splide>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { defineComponent } from "vue";
import "@splidejs/vue-splide/css";

export default defineComponent({
  components: { Splide, SplideSlide },
});
</script>
