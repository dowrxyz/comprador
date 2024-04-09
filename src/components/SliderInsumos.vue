<template>
  <Splide
    :options="{ rewind: true, wheel: true, arrows: false }"
    aria-label="Vue Splide Example"
    class="h-64 md:w-1/2 mx-auto mb-3 max-h-64"
  >
    <SplideSlide class="h-64">
      <img src="@/assets/fertlizante.webp" alt="Insumo" class="h-full w-full" />
    </SplideSlide>
    <SplideSlide class="h-64">
      <img src="@/assets/fertlizante.webp" alt="Insumo" class="h-full w-full" />
    </SplideSlide>
    <SplideSlide class="h-64">
      <img src="@/assets/fertlizante.webp" alt="Insumo" class="h-full w-full" />
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
