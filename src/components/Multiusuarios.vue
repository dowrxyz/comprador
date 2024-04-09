<template>
  <div class="content w-full mx-auto grid my-5 gap-1">
    <div class="shadow-md h-20 w-full mx-auto grid items-center">
      <div class="w-11/12 mx-auto flex gap-2 items-center justify-between">
        <div class="flex gap-3">
          <h1 class="text-2xl font-bold text-gray-700 text-center w-8">1</h1>

          <div class="mx-auto grid items-center">
            <h1 class="font-bold text-gray-600">Gerencia</h1>
            <p class="text-gray-400">Andrés García</p>
          </div>
        </div>

        <div class="justify-end flex items-center gap-1">
          <RouterLink to="/app/multiusuarios/rol" class="bg-yellow-400 rounded-md p-2 h-8 w-8 grid items-center">
            <img
              src="@/assets/Licitaciones/Magic.svg"
              class="mx-auto"
              alt="Rol edit"
            />
          </RouterLink>
          <RouterLink to="/app/multiusuarios/editar" class="default-bar rounded-md p-2 h-8 w-8 grid items-center">
            <img
              src="@/assets/Licitaciones/Lapiz.svg"
              class="mx-auto"
              alt="Edit"
            />
          </RouterLink>
          <button class="bg-red-400 rounded-md p-2 h-8 w-8 grid items-center">
            <img
              src="@/assets/Licitaciones/Eliminar.svg"
              class="mx-auto"
              alt="Delete"
            />
          </button>
        </div>
      </div>
    </div>
    <div class="shadow-md h-20 w-full mx-auto grid items-center">
      <div class="w-11/12 mx-auto flex gap-2 items-center justify-between">
        <div class="flex gap-3">
          <h1 class="text-2xl font-bold text-gray-700 text-center w-8">2</h1>

          <div class="mx-auto grid items-center justify-start">
            <h1 class="font-bold text-gray-600">Secretaria</h1>
            <p class="text-gray-400">Ana García</p>
          </div>
        </div>

        <div class="justify-end flex items-center gap-1">
          <RouterLink to="/app/multiusuarios/rol" class="bg-yellow-400 rounded-md p-2 h-8 w-8 grid items-center">
            <img
              src="@/assets/Licitaciones/Magic.svg"
              class="mx-auto"
              alt="Rol edit"
            />
          </RouterLink>
          <RouterLink to="/app/multiusuarios/editar" class="default-bar rounded-md p-2 h-8 w-8 grid items-center">
            <img
              src="@/assets/Licitaciones/Lapiz.svg"
              class="mx-auto"
              alt="Edit"
            />
          </RouterLink>
          <button class="bg-red-400 rounded-md p-2 h-8 w-8 grid items-center">
            <img
              src="@/assets/Licitaciones/Eliminar.svg"
              class="mx-auto"
              alt="Delete"
            />
          </button>
        </div>
      </div>
    </div>
    <div class="shadow-md h-20 w-full mx-auto grid items-center">
      <div class="w-11/12 mx-auto flex gap-2 items-center justify-between">
        <div class="flex gap-3">
          <h1 class="text-2xl font-bold text-gray-700 text-center w-8">3</h1>

          <div class="mx-auto grid items-center justify-start">
            <h1 class="font-bold text-gray-600">Comercial</h1>
            <p class="text-gray-400">Pedro García</p>
          </div>
        </div>

        <div class="justify-end flex items-center gap-1">
          <RouterLink to="/app/multiusuarios/rol" class="bg-yellow-400 rounded-md p-2 h-8 w-8 grid items-center">
            <img
              src="@/assets/Licitaciones/Magic.svg"
              class="mx-auto"
              alt="Rol edit"
            />
          </RouterLink>
          <RouterLink to="/app/multiusuarios/editar" class="default-bar rounded-md p-2 h-8 w-8 grid items-center">
            <img
              src="@/assets/Licitaciones/Lapiz.svg"
              class="mx-auto"
              alt="Edit"
            />
          </RouterLink>
          <button class="bg-red-400 rounded-md p-2 h-8 w-8 grid items-center">
            <img
              src="@/assets/Licitaciones/Eliminar.svg"
              class="mx-auto"
              alt="Delete"
            />
          </button>
        </div>
      </div>
    </div>


    <RouterLink to="/app/multiusuarios/crear" class="text-center text-white default-bar w-4/6 h-14 p-2 mx-auto rounded-md grid items-center mt-5 md:w-1/5">Agregar</RouterLink>
  </div>
</template>
