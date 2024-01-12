<template>
  <ion-page>
    <ion-content>
      <header class="new-default h-12 w-full grid items-center justify-center">
        <h1>Entrar</h1>
      </header>

      <div class="logIn">
        <img
          src="@/assets/AgroIcon.svg"
          alt="App Icon"
          class="icon-app mx-auto my-4"
        />

        <form class="mx-auto grid items-center gap-3 w-full md:w-1/3">
          <input
            type="email"
            class="text-gray-400 w-5/6 mx-auto bg-transparent border border-2 border-gray-300 rounded-[16px] px-3 py-3 rounded-md"
            placeholder="Correo"
          />
          <input
            type="password"
            class="text-gray-400 w-5/6 mx-auto bg-transparent border border-2 border-gray-300 rounded-[15px] px-3 py-3 rounded-md"
            placeholder="Contraseña"
          />
          <RouterLink to="/app/home" class="py-3 px-5 default-bar mx-auto mt-3 w-2/3 rounded text-center">
            Entrar
          </RouterLink>
          
          <a href="/password" class="mx-auto default-color font-bold mt-2 mb-6">Recuperar Clave</a>
        </form>

      </div>

      <footer class="flex gap-5 mx-auto justify-center items-center mb-3">
        <p class="text-center text-sm text-gray-600">¿Eres nuevo en Agroec?</p>
        <a href="/signup" class="default-color font-bold">Registrarme</a>
      </footer>
    </ion-content>
  </ion-page>
</template>