<template>
  <div class="content w-full mx-auto grid my-3 gap-4">
    <div class="grid gap-1" v-if="status">
      <RouterLink to="/status">
        <div class="order-card flex md:grid md:grid-cols-2 gap-3 shadow-md p-2">
          <div class="flex w-full gap-3">
            <div class="Order grid items-center text-center">
              <img
                src="@/assets/Products/Corn.svg"
                alt="Orden Icon"
                class="h-16 w-16 mx-auto"
              />
            </div>

            <div class="Order-Text text-left">
              <h1 class="text-gray-600 text-sm font-bold">Orden #345</h1>
              <h1 class="text-gray-600 text-xs font-bold">
                Maiz Duro Amarillo
              </h1>
              <p class="text-gray-500 text-xs">Cant: 200qq</p>
              <p class="text-gray-500 text-xs">24/12/2023</p>
            </div>
          </div>

          <div class="Order-Price text-right grid mt-2 justify-end">
            <h1 class="text-yellow-400 text-md font-bold">$17.50</h1>
            <h1 class="text-yellow-400 text-md font-bold">QQ</h1>
            <p class="text-lime text-xs font-bold">Pagado</p>
          </div>
        </div>
      </RouterLink>

      <RouterLink to="/status">
        <div class="order-card flex md:grid md:grid-cols-2 gap-3 shadow-md p-2">
          <div class="flex w-full gap-3">
            <div class="Order grid items-center text-center">
              <img
                src="@/assets/Products/Cacao.svg"
                alt="Orden Icon"
                class="h-16 w-16 mx-auto"
              />
            </div>

            <div class="Order-Text text-left">
              <h1 class="text-gray-600 text-sm font-bold">Orden #346</h1>
              <h1 class="text-gray-600 text-xs font-bold">Cacao</h1>
              <p class="text-gray-500 text-xs">Cant: 200qq</p>
              <p class="text-gray-500 text-xs">24/12/2023</p>
            </div>
          </div>

          <div class="Order-Price text-right grid mt-2 justify-end">
            <h1 class="text-yellow-400 text-md font-bold">$17.50</h1>
            <h1 class="text-yellow-400 text-md font-bold">QQ</h1>
            <p class="text-lime text-xs font-bold">Pagado</p>
          </div>
        </div>
      </RouterLink>

      <RouterLink to="/status">
        <div class="order-card flex md:grid md:grid-cols-2 gap-3 shadow-md p-2">
          <div class="flex w-full gap-3">
            <div class="Order grid items-center text-center">
              <img
                src="@/assets/Products/Corn.svg"
                alt="Orden Icon"
                class="h-16 w-16 mx-auto"
              />
            </div>

            <div class="Order-Text text-left">
              <h1 class="text-gray-600 text-sm font-bold">Orden #347</h1>
              <h1 class="text-gray-600 text-xs font-bold">
                Maiz Duro Amarillo
              </h1>
              <p class="text-gray-500 text-xs">Cant: 200qq</p>
              <p class="text-gray-500 text-xs">24/12/2023</p>
            </div>
          </div>

          <div class="Order-Price text-right grid mt-2 justify-end">
            <h1 class="text-yellow-400 text-md font-bold">$17.50</h1>
            <h1 class="text-yellow-400 text-md font-bold">QQ</h1>
            <p class="text-lime text-xs font-bold">Pagado</p>
          </div>
        </div>
      </RouterLink>
    </div>
    <div class="grid gap-1" v-if="!status">
      <RouterLink to="/status/unpaid">
        <div class="order-card flex md:grid md:grid-cols-2 gap-3 shadow-md p-2">
          <div class="flex w-full gap-3">
            <div class="Order grid items-center text-center">
              <img
                src="@/assets/Products/Maracuya.svg"
                alt="Orden Icon"
                class="h-16 w-16 mx-auto"
              />
            </div>

            <div class="Order-Text text-left">
              <h1 class="text-gray-600 text-sm font-bold">Orden #323</h1>
              <h1 class="text-gray-600 text-xs font-bold">
                Maracuya
              </h1>
              <p class="text-gray-500 text-xs">Cant: 200qq</p>
              <p class="text-gray-500 text-xs">24/12/2023</p>
            </div>
          </div>

          <div class="Order-Price text-right grid mt-2 justify-end">
            <h1 class="text-yellow-400 text-md font-bold">$17.50</h1>
            <h1 class="text-yellow-400 text-md font-bold">QQ</h1>
            <p class="text-red-400 text-xs font-bold w-20">Por pagar</p>
          </div>
        </div>
      </RouterLink>

      <RouterLink to="/status/unpaid">
        <div class="order-card flex md:grid md:grid-cols-2 gap-3 shadow-md p-2">
          <div class="flex w-full gap-3">
            <div class="Order grid items-center text-center">
              <img
                src="@/assets/Products/Bag.svg"
                alt="Orden Icon"
                class="h-16 w-16 mx-auto"
              />
            </div>

            <div class="Order-Text text-left">
              <h1 class="text-gray-600 text-sm font-bold">Orden #385</h1>
              <h1 class="text-gray-600 text-xs font-bold">Polvillo de Arroz</h1>
              <p class="text-gray-500 text-xs">Cant: 200qq</p>
              <p class="text-gray-500 text-xs">24/12/2023</p>
            </div>
          </div>

          <div class="Order-Price text-right grid mt-2 justify-end">
            <h1 class="text-yellow-400 text-md font-bold">$17.50</h1>
            <h1 class="text-yellow-400 text-md font-bold">QQ</h1>
            <p class="text-red-400 text-xs font-bold w-20">Por pagar</p>
          </div>
        </div>
      </RouterLink>

      <RouterLink to="/status/unpaid">
        <div class="order-card flex md:grid md:grid-cols-2 gap-3 shadow-md p-2">
          <div class="flex w-full gap-3">
            <div class="Order grid items-center text-center">
              <img
                src="@/assets/Products/Corn.svg"
                alt="Orden Icon"
                class="h-16 w-16 mx-auto"
              />
            </div>

            <div class="Order-Text text-left">
              <h1 class="text-gray-600 text-sm font-bold">Orden #353</h1>
              <h1 class="text-gray-600 text-xs font-bold">
                Maiz Duro Amarillo
              </h1>
              <p class="text-gray-500 text-xs">Cant: 200qq</p>
              <p class="text-gray-500 text-xs">24/12/2023</p>
            </div>
          </div>

          <div class="Order-Price text-right grid mt-2 justify-end">
            <h1 class="text-yellow-400 text-md font-bold">$17.50</h1>
            <h1 class="text-yellow-400 text-md font-bold">QQ</h1>
            <p class="text-red-400 text-xs font-bold w-20">Por pagar</p>
          </div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    status: Boolean,
  },
}
</script>