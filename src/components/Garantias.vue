<template>
  <div class="content w-full mx-auto grid my-2 gap-2">
    <div class="w-11/12 mx-auto my-3 text-right">
      <h1 class="text-gray-500 font-bold text-md text-right mb-1">
        Saldo Total
      </h1>
      <h1 class="text-green font-bold text-md text-right">$36</h1>
    </div>
    <div class="grid gap-1 max-h-72 overflow-y-scroll pb-2">

      <div
        class="order-card w-11/12 mx-auto rounded flex md:grid gap-3 shadow-sm p-2"
      >
        <div class="flex w-full gap-3">
          <div class="Order-Text grid gap-2 w-full">
            <div class="inline-flex justify-between w-full">
              <h1 class="text-gray-600 text-md font-bold">Garantía</h1>
              <h1 class="text-gray-600 text-xs font-bold">663001</h1>
            </div>

            <div
              class="Order-Price inline-flex justify-between w-full items-center"
            >
              <p class="text-gray-500 text-xs">24/3/2024, 12:30</p>
              <h1 class="text-gray-400 text-md font-bold">$70.00</h1>
            </div>
          </div>
        </div>
      </div>

      <div
        class="order-card w-11/12 mx-auto rounded flex md:grid gap-3 shadow-sm p-2"
      >
        <div class="flex w-full gap-3">
          <div class="Order-Text grid gap-2 w-full">
            <div class="inline-flex justify-between w-full">
              <h1 class="text-red-600 text-md font-bold">Devolución de garantía</h1>
              <h1 class="text-gray-600 text-xs font-bold">560021</h1>
            </div>

            <div
              class="Order-Price inline-flex justify-between w-full items-center"
            >
              <p class="text-gray-500 text-xs">20/3/2024, 10:30</p>
              <h1 class="text-red-400 text-md font-bold">$226.00</h1>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
