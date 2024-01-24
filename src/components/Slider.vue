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
          <h1 class="font-bold">Preferencias</h1>
          <p class="text-sm">
            Encarga y vende productos en base a tus preferencias.
          </p>
        </div>
        <svg width="54" height="54" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4606 0.585786C12.2417 1.36684 12.2417 2.63316 11.4606 3.41421L4.07415 10.8007C3.75375 11.1211 3.3523 11.3484 2.91272 11.4583L0.621723 12.031C0.255533 12.1226 -0.0761638 11.7909 0.0153838 11.4247L0.588134 9.13367C0.698029 8.69409 0.925326 8.29264 1.24572 7.97225L8.63218 0.585786C9.41323 -0.195262 10.6796 -0.195262 11.4606 0.585786ZM7.925 2.707L1.95283 8.67935C1.76059 8.87159 1.62421 9.11246 1.55828 9.37621L1.18764 10.8588L2.67019 10.4881C2.93394 10.4222 3.1748 10.2858 3.36704 10.0936L9.339 4.121L7.925 2.707ZM9.33929 1.29289L8.632 2L10.046 3.414L10.7535 2.70711C11.144 2.31658 11.144 1.68342 10.7535 1.29289C10.363 0.902369 9.72981 0.902369 9.33929 1.29289Z" fill="white"/>
</svg>

      </div>
    </SplideSlide>
    <SplideSlide>
      <div
        class="default-bar w-11/12 h-32 md:h-48 p-3 grid grid-cols-2 items-center justify-items-center mx-auto rounded-xl"
      >
        <div class="grid">
          <h1 class="font-bold">Calidad Asegurada</h1>
          <p class="text-sm">
            Comercia con una variedad de productos de alta calidad.
          </p>
        </div>
        <svg
          height="54px"
          width="54px"
          version="1.1"
          id="_x32_"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512 512"
          fill="#ffffff"
          xml:space="preserve"
        >
          <g>
            <path
              class="st0"
              d="M511.735,411.733l-64.819-288.538c-4.356-19.391-17.332-35.718-35.238-44.346l-72.443-34.884l-83.231,213.436
		l-83.24-213.436l-72.442,34.884c-17.906,8.628-30.882,24.955-35.238,44.346L0.265,411.733c-1.309,5.842,2.356,11.633,8.189,12.959
		l53.134,11.996c5.766,1.3,11.507-2.262,12.917-8.003l47.665-195.183l14.335,95.6l-25.64,119.668
		c-0.785,3.672-0.025,7.497,2.127,10.578c2.136,3.073,5.454,5.133,9.169,5.665l117.11,17.036l16.732-46.474l16.724,46.474
		l117.11-17.036c3.707-0.532,7.032-2.592,9.169-5.665c2.152-3.081,2.912-6.906,2.127-10.578l-25.638-119.668l14.335-95.6
		l47.664,195.183c1.401,5.741,7.151,9.304,12.917,8.003l53.135-11.996C509.38,423.366,513.044,417.575,511.735,411.733z
		 M256.004,394.418c-5.598,0-10.131-4.542-10.131-10.131c0-5.597,4.533-10.131,10.131-10.131c5.589,0,10.122,4.534,10.122,10.131
		C266.126,389.876,261.593,394.418,256.004,394.418z M256.004,325.91c-5.598,0-10.131-4.534-10.131-10.131
		c0-5.589,4.533-10.122,10.131-10.122c5.589,0,10.122,4.533,10.122,10.122C266.126,321.377,261.593,325.91,256.004,325.91z"
            />
            <polygon
              class="st0"
              points="270.348,65.535 273.53,53.075 267.874,29.952 243.156,29.952 237.491,53.075 240.682,65.535 	"
            />
            <polygon
              class="st0"
              points="275.861,175.343 271.943,83.408 240.057,83.408 236.14,175.343 256.004,227.111 	"
            />
          </g>
        </svg>
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
