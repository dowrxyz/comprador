<template>
  <div class="content w-11/12 mx-auto grid my-5 gap-2 md:w-1/2">
    <div
      class="content-cards grid grid-cols-3 gap-2 items-center justify-center"
    >
      <!--TOP GRID-->
      <RouterLink to="/app/tutorials">
        <div
          class="card p-1 w-full h-28 border rounded-md border-gray-300 grid text-center items-center"
        >
          <img
            src="@/assets/Defensive.svg"
            alt="App Icon"
            class="w-12 h-12 mx-auto"
          />
          <h1 class="text-gray-500 text-sm">Química</h1>
        </div>
      </RouterLink>

      <RouterLink to="/app/tutorials">
        <div
          class="card p-1 w-full h-28 border rounded-md border-gray-300 grid text-center items-center"
        >
          <img
            src="@/assets/Insumos.svg"
            alt="App Icon"
            class="w-12 h-12 mx-auto"
          />
          <h1 class="text-gray-500 text-sm">Fertilidad</h1>
        </div>
      </RouterLink>

      <RouterLink to="/app/tutorials">
        <div
          class="card p-1 w-full h-28 border rounded-md border-gray-300 grid text-center items-center"
        >
          <img
            src="@/assets/people/Aso.svg"
            alt="App Icon"
            class="w-12 h-12 mx-auto"
          />
          <h1 class="text-gray-500 text-sm">Gestión</h1>
        </div>
      </RouterLink>
      <!--TOP GRID-->
    </div>
  </div>
</template>
