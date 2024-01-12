<template>
  <div class="bg-gray-100 p-4 grid items-center justify-items-center gap-4">
    <img
      src="@/assets/People/Farmer.svg"
      alt="App Icon"
      class="h-24 w-24 mx-auto"
    />

    <div class="grid gap-2 text-center">
      <h1 class="font-bold text-md text-gray-600">Vendedor SA</h1>
      <p class="text-md text-gray-400">Cultivando S.A</p>
    </div>
  </div>
  <div
    class="content w-11/12 mx-auto grid my-5 gap-2 md:w-3/4 bg-gray-100 p-2 rounded-md items-center"
  >
    <div class="content-message grid gap-2 text-left">
      <h1 class="font-bold text-md text-gray-600">Informacion Comercial</h1>
    </div>

    <div
      class="content-cards grid grid-cols-3 gap-2 items-center justify-center"
    >
      <!--TOP GRID-->
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
        <h1 class="text-gray-500 text-xs font-bold">Calificación</h1>
      </div>

      <RouterLink to="/app/tutorials">
        <div
          class="card p-1 w-full h-28 border rounded-md border-gray-300 grid text-center items-center justify-items-center"
        >
          <svg
            fill="#a8cf7b"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="50px"
            height="50px"
            viewBox="0 0 395.71 395.71"
            xml:space="preserve"
          >
            <g>
              <path
                d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738
		c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388
		C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191
		c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"
              />
            </g>
          </svg>
          <div class="grid gap-1">
            <h1 class="text-gray-500 text-sm font-bold">Azuay</h1>

            <h3 class="text-gray-400 text-xs font-bold">Cuenca</h3>
          </div>
        </div>
      </RouterLink>

      <RouterLink to="/app/insumos">
        <div
          class="card p-1 w-full h-28 border rounded-md border-gray-300 grid text-center items-center"
        >
          <span class="text-green-new text-4xl font-bold">8</span>
          <h1 class="text-gray-500 text-xs md:text-md font-bold">Publicaciones</h1>
        </div>
      </RouterLink>
      <!--TOP GRID-->
    </div>

  </div>
</template>
