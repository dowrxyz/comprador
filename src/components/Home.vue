<template>
  <div class="content w-11/12 mx-auto grid my-5 gap-2 md:w-3/4">
    <div class="content-message grid gap-2 text-left">
      <h1 class="font-bold text-md text-gray-600">Hola, Santiago</h1>
      <p class="text-md text-gray-400">Bienvenido a Agroec</p>
    </div>

    <div
      class="content-cards grid grid-cols-3 gap-2 items-center justify-center"
    >
      <!--TOP GRID-->
      <RouterLink to="/app/market">
        <div
          class="card p-1 w-full h-28 border rounded-md border-gray-300 grid text-center items-center"
        >
          <img
            src="@/assets/AgroIcon.svg"
            alt="App Icon"
            class="w-12 h-12 mx-auto"
          />
          <h1 class="text-gray-500 text-sm font-bold">Tu comercio</h1>
        </div>
      </RouterLink>

      <RouterLink to="/app/tutorials">
        <div
          class="card p-1 w-full h-28 border rounded-md border-gray-300 grid text-center items-center"
        >
          <img
            src="@/assets/Tutoriales.svg"
            alt="App Icon"
            class="w-12 h-12 mx-auto"
          />
          <h1 class="text-gray-500 text-sm font-bold">Tutoriales</h1>
        </div>
      </RouterLink>

      <RouterLink to="/app/insumos">
        <div
          class="card p-1 w-full h-28 border rounded-md border-gray-300 grid text-center items-center"
        >
          <img
            src="@/assets/Insumos.svg"
            alt="App Icon"
            class="w-12 h-12 mx-auto"
          />
          <h1 class="text-gray-500 text-sm font-bold">Insumos</h1>
        </div>
      </RouterLink>
      <!--TOP GRID-->

      <!--MIDDLE GRID-->
      <RouterLink to="/app/home">
        <div
          class="card p-1 w-full h-28 border rounded-md border-gray-300 grid text-center items-center"
        >
          <span class="text-gray-500 text-4xl">5</span>
          <h1 class="text-gray-500 text-xs font-bold">Ordenes por recibir</h1>
        </div>
      </RouterLink>

      <RouterLink to="/app/home">
        <div
          class="card p-1 w-full h-28 border rounded-md border-gray-300 grid text-center items-center"
        >
          <span class="text-gray-500 text-4xl">8</span>
          <h1 class="text-gray-500 text-xs font-bold">Ordenes Recibidas</h1>
        </div>
      </RouterLink>

      <RouterLink to="/app/home">
        <div
          class="card p-1 w-full h-28 border rounded-md border-gray-300 grid text-center items-center"
        >
          <span class="text-gray-500 text-4xl">7</span>
          <h1 class="text-gray-500 text-xs font-bold">Ofertas Recibidas</h1>
        </div>
      </RouterLink>
      <!--MIDDLE GRID-->

      <!--BOTTOM GRID-->
      <div
        class="card p-1 w-full h-28 border rounded-md border-gray-300 grid text-center items-center"
      >
        <div class="flex justify-center">
          <img src="@/assets/Star.svg" alt="Calificacion" class="h-4 w-4" />
          <img src="@/assets/Star.svg" alt="Calificacion" class="h-4 w-4" />
          <img src="@/assets/Star.svg" alt="Calificacion" class="h-4 w-4" />
          <img src="@/assets/Star.svg" alt="Calificacion" class="h-4 w-4" />
          <img src="@/assets/Star.svg" alt="Calificacion" class="h-4 w-4" />
        </div>
        <h1 class="text-gray-500 text-xs font-bold">Tu Calificación</h1>
      </div>

      <RouterLink to="/app/home">
        <div
          class="card w-full h-28 border rounded-md border-gray-300 grid text-center items-center"
        >
          <span class="text-gray-500 text-4xl">8</span>
          <p class="text-gray-500 text-xs font-bold">Negociaciones Abiertas</p>
        </div>
      </RouterLink>

      <RouterLink to="/app/home">
        <div
          class="card w-full h-28 border rounded-md border-gray-300 grid text-center items-center"
        >
          <span class="text-gray-500 text-4xl">7</span>
          <h1 class="text-gray-500 text-xs font-bold">
            Licitaciones de producto
          </h1>
        </div>
      </RouterLink>
      <!--BOTTOM GRID-->
    </div>

    <RouterLink
      to="/app/dashboard"
      class="text-center py-3 px-1 default-bar mx-auto my-6 w-5/6 rounded md:w-1/4"
    >
      Gestión por producto
    </RouterLink>
  </div>
</template>
