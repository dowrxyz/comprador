<template>
  <div class="grid gap-3">
    
    <Slider />
    
    <RouterLink to="/app/vendedor/1/2" class="profilepad inline-flex w-5/6 mx-auto gap-3 items-center md:w-1/2">
      <img src="@/assets/People/Business.svg" alt="Profile Image" />
      <div class="grid gap-1 items-center">
        <h2 class="text-xl font-bold text-gray-500">Vendedor A</h2>
        <p class="text-sm text-gray-400">Produagri</p>
      </div>
    </RouterLink>

    <div class="pricepad bg-gray-200 text-center h-28 grid items-center">
      <div class="">
        <h2 class="text-sm font-bold text-gray-900">Precio con transacción protegida</h2>
        <p class="text-3xl font-bold text-gray-700">USD $50.00 x QQ</p>
      </div>
    </div>

    <div class="detailspad inline-flex w-5/6 mx-auto gap-6 md:w-1/2">
      <div class="titles grid gap-2 text-gray-400">
        <p>Producto</p>
        <p>Cantidad</p>
        <p>Provincia y cantón</p>
        <p>Presentación de entrega</p>
        <p>Fecha de entrega</p>
        <p>Informacion adicional</p>
      </div>
      <div class="titles grid gap-2 text-gray-700">
        <p>Maiz</p>
        <p>200 QQ</p>
        <p>Guayas, Pedro Carbo</p>
        <p>En sacos</p>
        <p>24/7/2024</p>
        <p>Mercado</p>
      </div>
    </div>

    <hr class="text-gray-700 my-3">

    <div class="descripcionpad my -2 w-5/6 mx-auto text-left text-gray-700 text-sm md:w-1/2">
      <p>Este Maiz esta premiado como uno de los mejores de la región, con una genetica justa y precisa que aplica un sabor fuerte e intenso.</p>
    </div>

    <div class="propuestapad grid bg-gray-200 items-center gap-3 h-48 p-3">

      <div class="informative-text text-center text-gray-700">
        Para proceder con la compra de este producto debes generar una propuesta al vendedor.
      </div>

      <RouterLink class="default-bar p-3 rounded-md text-center text-zinc-50 md:w-1/2 mx-auto" :to="{name: 'propuestaDeals', params: { id: '1' }}">Generar propuesta de compra</RouterLink>

    </div>
  </div>
</template>


<script>
import Slider from '@/components/SliderImage.vue';
export default {
  name: 'Home',
  components: {
    Slider
  }
}
</script>

<style scoped>
.message-wrap {
  height: 50vh;
}

/* ===== Scrollbar CSS ===== */
/* Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: #b4b1b1 #ffffff;
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 8px;
}

*::-webkit-scrollbar-track {
  background: #ffffff;
}

*::-webkit-scrollbar-thumb {
  background-color: #b4b1b1;
  border-radius: 10px;
  border: 3px solid #ffffff;
}
</style>
