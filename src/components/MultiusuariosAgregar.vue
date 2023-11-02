<template>
  
        <div class="logIn">
          <img
            src="@/assets/AgroIcon.svg"
            alt="App Icon"
            class="icon-app mx-auto my-4"
          />
  
          <form class="mx-auto grid items-center gap-3 w-full md:w-1/3">
            <label for="name" class="text-gray-500 font-bold w-5/6 mx-auto">Nombre</label>
            <input
              type="text"
              id="name"
              class="text-gray-400 w-5/6 mx-auto bg-transparent border border-2 border-gray-300 rounded-[16px] px-3 py-3 rounded-md"
              placeholder="Ingresa el nombre"
            />
            <label for="correo" class="text-gray-500 font-bold w-5/6 mx-auto">Correo</label>
            <input
              type="text"
              id="correo"
              class="text-gray-400 w-5/6 mx-auto bg-transparent border border-2 border-gray-300 rounded-[16px] px-3 py-3 rounded-md"
              placeholder="Introduce el correo"
            />
            <label for="clave" class="text-gray-500 font-bold w-5/6 mx-auto">Clave</label>
            <input
              id="clave"
              type="password"
              class="text-gray-400 w-5/6 mx-auto bg-transparent border border-2 border-gray-300 rounded-[15px] px-3 py-3 rounded-md"
              placeholder="Clave de seguridad"
            />


            <div class="mx-auto grid relative w-5/6">
            <div class="relative">
              <label
                for="depa"
                class="text-gray-500 font-bold w-5/6 mx-auto"
                >Departamento</label
              >
              <select
                id="depa"
                class="w-full mx-auto bg-transparent border border-2 border-gray-300 rounded-[16px] px-3 py-3 rounded-md text-gray-600"
              >
                <option selected>Gerencia</option>
                <option>Secretaria</option>
                <option>Comercial</option>
              </select>
            </div>
          </div>

            <button class="py-3 px-5 mb-3 default-bar mx-auto mt-3 w-2/3 rounded text-center">
              Guardar
            </button>
            
          </form>
  
        </div>
  

  </template>