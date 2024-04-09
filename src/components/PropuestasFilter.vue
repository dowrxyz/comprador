<template>
  <div class="content w-11/12 mx-auto grid my-5 gap-2 md:w-1/2">
    <div
      class="content-cards grid grid-cols-3 gap-2 items-center justify-center"
    >
      <!--TOP GRID-->
      <RouterLink to="/app/propuestas/Maiz">
        <div
          class="card p-1 w-full h-28 border rounded-md border-gray-300 grid text-center items-center relative"
        >
          <img
            src="@/assets/Products/Corn.svg"
            alt="App Icon"
            class="w-12 h-12 mx-auto"
          />
          <h1 class="text-gray-500 text-sm">Maiz</h1>

          <span
            class="h-6 w-6 bg-red-600 rounded-full p-0.5 absolute grid items-center justify-center top-0 right-0 text-white"
            >3</span
          >
        </div>
      </RouterLink>

      <RouterLink to="/app/propuestas/Cacao">
        <div
          class="card p-1 w-full h-28 border rounded-md border-gray-300 grid text-center items-center relative"
        >
          <img
            src="@/assets/Products/Cacao.svg"
            alt="App Icon"
            class="w-12 h-12 mx-auto"
          />
          <h1 class="text-gray-500 text-sm">Cacao</h1>
        </div>
      </RouterLink>

      <RouterLink to="/app/propuestas/Tomate">
        <div
          class="card p-1 w-full h-28 border rounded-md border-gray-300 grid text-center items-center relative"
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
      <RouterLink to="/app/propuestas/Maracuya">
        <div
          class="card p-1 w-full h-28 border rounded-md border-gray-300 grid text-center items-center relative"
        >
          <img
            src="@/assets/Products/Maracuya.svg"
            alt="App Icon"
            class="w-12 h-12 mx-auto"
          />
          <h1 class="text-gray-500 text-sm">Maracuya</h1>
          <span
            class="h-6 w-6 bg-red-600 rounded-full p-0.5 absolute grid items-center justify-center top-0 right-0 text-white"
            >1</span
          >
        </div>
      </RouterLink>

      <RouterLink to="/app/propuestas/Arroz">
        <div
          class="card p-1 w-full h-28 border rounded-md border-gray-300 grid text-center items-center relative"
        >
          <img
            src="@/assets/Products/Rice.svg"
            alt="App Icon"
            class="w-12 h-12 mx-auto"
          />
          <h1 class="text-gray-500 text-sm">Arroz</h1>
        </div>
      </RouterLink>

      <RouterLink to="/app/propuestas/Polvillo de Arroz">
        <div
          class="card p-1 w-full h-28 border rounded-md border-gray-300 grid text-center items-center relative"
        >
          <img
            src="@/assets/Products/Bag.svg"
            alt="App Icon"
            class="w-12 h-12 mx-auto"
          />
          <h1 class="text-gray-500 text-sm">Polvillo de Arroz</h1>
          <span
            class="h-6 w-6 bg-red-600 rounded-full p-0.5 absolute grid items-center justify-center top-0 right-0 text-white"
            >5</span
          >
        </div>
      </RouterLink>
      <!--MAIN GRID-->
      <Modal size="xl" />
    </div>
  </div>
</template>

<style scoped>
span {
  font-size: 12px;
}
</style>
