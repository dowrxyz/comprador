<template>
  <div class="content w-11/12 mx-auto grid my-5 gap-2 md:w-1/2">
    <div
      class="content-cards grid grid-cols-3 gap-2 items-center justify-center"
    >
      <!--TOP GRID-->
      <RouterLink to="/app/product/Maiz">
        <div
          class="card p-1 w-full h-28 border rounded-md border-gray-300 grid text-center items-center"
        >
          <img
            src="@/assets/Products/Corn.svg"
            alt="App Icon"
            class="w-12 h-12 mx-auto"
          />
          <h1 class="text-gray-500 text-sm">Maiz</h1>
        </div>
      </RouterLink>

      <RouterLink to="/app/product/Cacao">
        <div
          class="card p-1 w-full h-28 border rounded-md border-gray-300 grid text-center items-center"
        >
          <img
            src="@/assets/Products/Cacao.svg"
            alt="App Icon"
            class="w-12 h-12 mx-auto"
          />
          <h1 class="text-gray-500 text-sm">Cacao</h1>
        </div>
      </RouterLink>

      <RouterLink to="/app/product/Tomate">
        <div
          class="card p-1 w-full h-28 border rounded-md border-gray-300 grid text-center items-center"
        >
          <img
            src="@/assets/Products/Tomato.svg"
            alt="App Icon"
            class="w-12 h-12 mx-auto"
          />
          <h1 class="text-gray-500 text-sm">Tomate</h1>
        </div>
      </RouterLink>
      <!--TOP GRID-->

      <!--MAIN GRID-->
      <RouterLink to="/app/product/Maracuya">
        <div
          class="card p-1 w-full h-28 border rounded-md border-gray-300 grid text-center items-center"
        >
          <img
            src="@/assets/Products/Maracuya.svg"
            alt="App Icon"
            class="w-12 h-12 mx-auto"
          />
          <h1 class="text-gray-500 text-sm">Maracuya</h1>
        </div>
      </RouterLink>

      <RouterLink to="/app/product/Arroz">
        <div
          class="card p-1 w-full h-28 border rounded-md border-gray-300 grid text-center items-center"
        >
          <img
            src="@/assets/Products/Rice.svg"
            alt="App Icon"
            class="w-12 h-12 mx-auto"
          />
          <h1 class="text-gray-500 text-sm">Arroz</h1>
        </div>
      </RouterLink>

      <RouterLink to="/app/product/Polvillo De Arroz">
        <div
          class="card p-1 w-full h-28 border rounded-md border-gray-300 grid text-center items-center"
        >
          <img
            src="@/assets/Products/Bag.svg"
            alt="App Icon"
            class="w-12 h-12 mx-auto"
          />
          <h1 class="text-gray-500 text-sm">Polvillo de Arroz</h1>
        </div>
      </RouterLink>
      <!--MAIN GRID-->
    </div>

    <div class="flex gap-3">
      <RouterLink
        to="/app/add/product"
        class="p-2 default-bar mx-auto my-6 rounded text-center"
      >
        Agregar productos
      </RouterLink>
      <RouterLink
        to="/app/licitar"
        class="p-2 dark-bar mx-auto my-6 rounded text-center"
      >
        Enviar una licitación
      </RouterLink>
    </div>
  </div>
</template>
