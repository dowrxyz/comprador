<template>
  <Splide :options="{ rewind: true, wheel: true, arrows: false }" aria-label="Vue Splide Example" class="my-3">
    <SplideSlide>
      <div class="bg-blue-400 h-32 md:h-48 p-3 grid items-center w-11/12 justify-items-center mx-auto rounded-xl">
        <h1>Carta</h1>
      </div>
    </SplideSlide>
    <SplideSlide>
      <div class="default-bar h-32 md:h-48 p-3 grid items-center w-11/12 justify-items-center mx-auto rounded-xl">
        <h1>Carta</h1>
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
