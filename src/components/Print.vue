<template>
    <div class="content w-full mx-auto grid my-5 gap-2">
      <form class="grid gap-1 w-11/12 mx-auto">
        <div class="mx-auto grid relative w-full">
            <div class="relative">
              <label
                for="identificador"
                class="text-gray-600 font-bold w-5/6 mx-auto"
                >Seleccionar Orden</label
              >
              <select
                id="identificador"
                class="w-full mx-auto bg-transparent border-2 border-gray-300 px-3 py-3 rounded-md text-gray-600"
              >
                <option selected value="b82skam290010lsu">Orden #345</option>
                <option value="b82skam290010lsu">Orden #346</option>
                <option value="b82skam290010lsu">Orden #347</option>
              </select>
            </div>
          </div>

          
        <button class="dark-bar p-2 h-14 w-full mx-auto text-center text-white rounded mt-3">Generar Orden</button>
      </form>

    </div>

  </template>
  