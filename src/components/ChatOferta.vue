<template>
  <div
    v-if="!details"
    class="content w-11/12 mx-auto grid mb-5 gap-4 min-h-full"
  >
    <div
      class="mt-2 mx-auto message-wrap md:w-full overflow-y-scroll max-h-[28rem]"
    >
      <div class="messages grid gap-3 p-2 md:w-full">
        <div
          class="w-2/3 mx-auto grid items-center text-center bg-gray-100 rounded-lg md:w-1/3"
        >
          <span class="p-2 text-uppercase text-gray-500 font-bold"
            >12 de diciembre de 2024</span
          >
        </div>
        <div class="message-incoming flex gap-2 items-center">
          <img
            src="@/assets/People/Factory.svg"
            alt="Incoming Message Profile Icon"
            class="h-16 w-16"
          />
          <div class="relative w-full">
            <div class="message-content incoming-chat rounded-md p-2 w-full">
              <p class="text-sm text-gray-800 w-11/12">
                Me intereso, te ofrezco $17.50, puesto en mi planta.
              </p>
            </div>
            <span
              class="text-gray-700 text-sm absolute right-1 top-8 md:top-4 hour-text"
              >13:25 PM</span
            >
          </div>
          <button class="h-auto w-auto">
            <img
              src="../assets/reply.svg"
              alt="Reply Message"
              class="h-8 w-8"
            />
          </button>
        </div>
        <div class="message-outgoing flex gap-2 items-center">
          <button class="h-auto w-auto">
            <img
              src="../assets/replyleft.svg"
              alt="Reply Message"
              class="h-8 w-8"
            />
          </button>
          <div class="relative w-full">
            <div class="message-content outgoing-chat rounded-md p-2 w-full">
              <p class="text-sm text-gray-800 w-11/12">
                Acepto donde esta ubicado, envieme su ubicacion.
              </p>
            </div>
            <span
              class="text-gray-700 text-sm absolute right-2 top-8 md:top-4 hour-text"
              >16:13 PM</span
            >
          </div>
          <img
            src="@/assets/People/Aso.svg"
            alt="Outgoing Message Profile Icon"
            class="h-16 w-16"
          />
        </div>
        <div class="message-outgoing flex gap-2 items-center">
          <button class="h-auto w-auto">
            <img
              src="../assets/replyleft.svg"
              alt="Reply Message"
              class="h-8 w-8"
            />
          </button>
          <div class="relative w-full">
            <div class="message-content outgoing-chat rounded-md p-2 w-full">
              <p class="text-sm text-gray-800 w-11/12">
                Acepto donde esta ubicado, envieme su ubicacion.
              </p>
            </div>
            <span
              class="text-gray-700 text-sm absolute right-2 top-8 md:top-4 hour-text"
              >17:13 PM</span
            >
          </div>
          <img
            src="@/assets/People/Aso.svg"
            alt="Outgoing Message Profile Icon"
            class="h-16 w-16"
          />
        </div>
        <div class="message-outgoing flex gap-2 items-center">
          <button class="h-auto w-auto">
            <img
              src="../assets/replyleft.svg"
              alt="Reply Message"
              class="h-8 w-8"
            />
          </button>
          <div class="relative w-full">
            <div class="message-content outgoing-chat rounded-md p-2 w-full">
              <p class="text-sm text-gray-800 w-11/12">
                Acepto donde esta ubicado, envieme su ubicacion.
              </p>
            </div>
            <span
              class="text-gray-700 text-sm absolute right-2 top-8 md:top-4 hour-text"
              >18:53 PM</span
            >
          </div>
          <img
            src="@/assets/People/Aso.svg"
            alt="Outgoing Message Profile Icon"
            class="h-16 w-16"
          />
        </div>
        <div class="message-outgoing flex gap-2 items-center">
          <button class="h-auto w-auto">
            <img
              src="../assets/replyleft.svg"
              alt="Reply Message"
              class="h-8 w-8"
            />
          </button>
          <div class="relative w-full">
            <div class="message-content outgoing-chat rounded-md p-2 w-full">
              <p class="text-sm text-gray-800 w-11/12">
                Acepto donde esta ubicado, envieme su ubicacion.
              </p>
            </div>
            <span
              class="text-gray-700 text-sm absolute right-2 top-8 md:top-4 hour-text"
              >19:13 PM</span
            >
          </div>
          <img
            src="@/assets/People/Aso.svg"
            alt="Outgoing Message Profile Icon"
            class="h-16 w-16"
          />
        </div>
        <div
          class="w-2/3 mx-auto grid items-center text-center bg-gray-100 rounded-lg md:w-1/3"
        >
          <span class="p-2 text-uppercase text-gray-500 font-bold"
            >15 de diciembre de 2024</span
          >
        </div>
        <div class="message-outgoing flex gap-2 items-center">
          <button class="h-auto w-auto">
            <img
              src="../assets/replyleft.svg"
              alt="Reply Message"
              class="h-8 w-8"
            />
          </button>
          <div class="relative w-full">
            <div class="message-content outgoing-chat rounded-md p-2 w-full">
              <p class="text-sm text-gray-800 w-11/12">
                Acepto donde esta ubicado, envieme su ubicacion.
              </p>
            </div>
            <span
              class="text-gray-700 text-sm absolute right-2 top-8 md:top-4 hour-text"
              >02:43 AM</span
            >
          </div>
          <img
            src="@/assets/People/Aso.svg"
            alt="Outgoing Message Profile Icon"
            class="h-16 w-16"
          />
        </div>
      </div>
    </div>

    <div class="grid gap-3 items-center md:w-3/4 mx-auto">
      <div class="flex justify-between mx-auto w-full gap-3 h-full items-end">
        <button
          class="bg-red-400 px-2 py-1 w-1/2 h-8 rounded-md shadow-md color-white text-xs"
          @click="manageRechazoModal"
        >
          Rechazar
        </button>
        <button
          v-on:click="showDealDetails"
          class="default-bar px-2 w-3/4 py-1 h-8 rounded-md shadow-md color-white text-xs"
        >
          Condiciones
        </button>
        <button
          v-if="!offerSaw"
          @click="showCondicionesMessage"
          class="bg-gray-400 px-2 w-full py-1 h-8 rounded-md shadow-md color-white text-xs"
        >
          Aceptar oferta
        </button>
        <button
          v-if="offerSaw"
          @click="showModal"
          class="default-bar px-2 w-full py-1 h-8 rounded-md shadow-md color-white text-xs"
        >
          Aceptar oferta
        </button>
      </div>

      <div
        class="w-full mx-auto grid items-center justify-center my-2"
        v-if="condicionesMessage && !offerSaw"
      >
        <span class="font-bold text-gray-700 text-sm text-center"
          >ATENCION</span
        >
        <p class="text-gray-600 text-sm text-center">
          Recuerda que solo podrás aceptar la oferta cuando visites las
          condiciones y cuando el vendedor confirme el acuerdo
        </p>
      </div>

      <div class="message-form self-center relative">
        <input
          type="text"
          v-model="messageInput"
          class="bg-gray-200 rounded-md w-full h-12 p-3 text-gray-500"
          placeholder="Responder"
        />
        <button class="absolute right-2 top-4" @click="sendMessage">
          <img src="@/assets/Send.svg" alt="Send Message" class="h-4 w-4" />
        </button>
      </div>

      <p
        class="text-xs text-gray-500 font-bold my-2 text-center w-11/12 mx-auto"
      >
        Bajo contrato está prohibido compartir información personal.
      </p>
    </div>

    <button
      class="dark-bar h-14 mx-auto p-3 text-center text-white font-bold rounded-md"
      @click="manageEntregasModal"
    >
      Cantidad de entregas totales: 3
    </button>
    <!--Navbar Inside chat-->
  </div>

  <div v-if="details" class="content w-min-screen mx-auto grid my-3 gap-3">
    <div class="grid w-full gap-3 md:w-3/4 mx-auto">
      <div class="mx-auto md:grid md:grid-cols-2 w-11/12 md:w-3/4 gap-2">
        <p class="text-gray-700 text-sm mx-auto col-span-2">
          Puedes confirmar los datos o indicar detalles para recibir tu compra.
        </p>

        <h3 class="text-gray-700 text-sm mt-3 col-span-2">
          Producto:
          <span class="text-gray-600 font-bold">{{
            this.$route.params.name
          }}</span>
        </h3>

        <div class="grid gap-1 mx-auto mt-3 col-span-2 w-full">
          <label for="precio" class="text-gray-700">Precio</label>
          <input
            type="number"
            id="precio"
            placeholder="Precio"
            class="bg-gray-50 border p-2 rounded-md text-gray-600"
          />
          <select
            name="unidadPrecio"
            class="w-full mx-auto bg-gray-50 border rounded-md p-2 text-gray-600"
          >
            <option selected class="text-gray-600">QQ</option>
            <option class="text-gray-600">KG</option>
          </select>
        </div>

        <div class="grid gap-2 mt-2 md:grid-cols-2 col-span-2">
          <div class="grid gap-1 w-full">
            <label for="cantidad" class="text-gray-700">Cantidad</label>
            <div class="inline-flex gap-1">
              <input
                type="number"
                id="cantidad"
                placeholder="Cantidad"
                class="bg-gray-50 border p-2 rounded-md text-gray-600"
              />
              <select
                name="unidad"
                class="w-full bg-gray-50 border rounded-md p-2 text-gray-600"
              >
                <option selected class="text-gray-600">QQ</option>
                <option class="text-gray-600">KG</option>
              </select>
            </div>
          </div>
          <div class="grid gap-1 w-full">
            <label for="cantidadEntrega" class="text-gray-700 text-sm"
              >Número de entregas</label
            >
            <div class="inline-flex justify-between gap-2">
              <input
                type="text"
                id="cantidadEntrega"
                v-model="cantidadEntrega"
                placeholder="Cantidad"
                class="bg-gray-50 border p-2 rounded-md text-gray-600 w-full"
              />
              <select
                name="unidadEntrega"
                v-model="unidadEntrega"
                class="w-full bg-gray-50 border rounded-md p-2 text-gray-600"
              >
                <option selected class="text-gray-600" value="QQ">QQ</option>
                <option class="text-gray-600" value="KG">KG</option>
              </select>
              <button
                @click="saveEntrega"
                class="default-bar text-white font-bold grid items-center h-12 p-2 rounded-md"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div class="grid my-2" v-if="entregas.length > 0">
          <h1 class="text-gray-600 mb-3 font-bold">Entregas</h1>

          <p
            class="text-gray-500 flex gap-3 items-center"
            v-for="item in entregas"
            :key="item.nombre"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="18"
              fill="#a2afbe"
              viewBox="0 -960 960 960"
              width="18"
            >
              <path
                d="m560-120-57-57 144-143H200v-480h80v400h367L503-544l56-57 241 241-240 240Z"
              />
            </svg>
            {{ item.cantidad }} {{ item.unidad }}

            <button type="button" v-on:click="deleteEntrega(item)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                fill="#E87C61"
              >
                <path
                  d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
                />
              </svg>
            </button>
          </p>
        </div>

        <div class="grid gap-1 mx-auto mt-3 col-span-2 w-full">
          <label for="fechaEntrega" class="text-gray-700 text-sm"
            >Fecha de entrega</label
          >
          <input
            type="date"
            id="fechaEntrega"
            class="bg-gray-50 border p-2 rounded-md text-gray-600"
          />
        </div>
        <div class="grid gap-1 mx-auto mt-3 col-span-2 w-full">
          <label for="horaEntrega" class="text-gray-700 text-sm"
            >Hora de entrega</label
          >
          <input
            type="time"
            id="horaEntrega"
            class="bg-gray-50 border p-2 rounded-md text-gray-600"
          />
        </div>

        <div class="grid gap-1 mx-auto mt-3 col-span-2 w-full">
          <label for="" class="text-gray-700 text-sm font-bold"
            >Matriz y puntos de recepción</label
          >
          <label for="nombreMatriz" class="text-gray-500">Nombre Matriz</label>
          <input
            type="text"
            id="nombreMatriz"
            placeholder="Nombre"
            class="bg-gray-50 border p-2 rounded-md text-gray-600 w-full"
          />
          <label for="direccionMatriz" class="text-gray-500">Dirección</label>
          <input
            type="text"
            id="direccionMatriz"
            placeholder="Direccion"
            class="bg-gray-50 border p-2 rounded-md text-gray-600 w-full"
          />
          <label for="ubicacionMatriz" class="text-gray-500">Ubicación</label>
          <div class="inline-flex justify-between gap-2">
            <input
              type="text"
              id="ubicacionMatriz"
              placeholder="Ubicacion"
              class="bg-gray-50 border p-2 rounded-md text-gray-600 w-full"
            />
            <button
              class="default-bar text-white font-bold grid items-center h-full p-2 rounded-md"
            >
              <img src="@/assets/Status/LocationPin.svg" alt="Pin Ubication" />
            </button>
          </div>
          <label for="puntos" class="text-gray-700 text-sm"
            >Puntos de recepción</label
          >
          <div class="inline-flex justify-between gap-2">
            <input
              type="text"
              id="nombrePunto"
              v-model="nombrePunto"
              placeholder="Nombre"
              class="bg-gray-50 border p-2 rounded-md text-gray-600 w-full"
            />
            <input
              type="text"
              id="direccionPunto"
              v-model="direccionPunto"
              placeholder="Dirección"
              class="bg-gray-50 border p-2 rounded-md text-gray-600 w-full"
            />
            <input
              type="text"
              id="ubicacionPunto"
              v-model="ubicacionPunto"
              placeholder="Ubicación"
              class="bg-gray-50 border p-2 rounded-md text-gray-600 w-full"
            />
            <button
              @click="savePunto"
              class="default-bar text-white font-bold grid items-center h-12 p-2 rounded-md"
            >
              +
            </button>
          </div>

          <div class="grid mb-2" v-if="puntosRecepcion.length > 0">
            <h1 class="text-gray-600 mb-3 font-bold">Puntos de recepción</h1>

            <p
              class="text-gray-500 flex gap-3 items-center"
              v-for="item in puntosRecepcion"
              :key="item.nombre"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="18"
                fill="#a2afbe"
                viewBox="0 -960 960 960"
                width="18"
              >
                <path
                  d="m560-120-57-57 144-143H200v-480h80v400h367L503-544l56-57 241 241-240 240Z"
                />
              </svg>
              {{ item.nombre }}

              <button type="button" v-on:click="deletePunto(item)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                  fill="#E87C61"
                >
                  <path
                    d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
                  />
                </svg>
              </button>
            </p>
          </div>

          <label for="puntosPerfil" class="text-gray-700 text-sm"
            >Puntos del perfil</label
          >
          <select
            name="puntosPerfil"
            v-model="puntoFromPerfil"
            @change="addPuntoFromPerfil"
            class="w-full mx-auto bg-gray-50 border rounded-md p-2 text-gray-600"
          >
            <option selected class="text-gray-600" value="PuntoPerfil">
              Punto 1
            </option>
            <option class="text-gray-600" value="Punto2">Punto 2</option>
          </select>
          <div class="grid grid-cols-2 gap-2">
            <button
              class="default-bar text-white font-bold grid items-center h-12 p-2 rounded-md"
            >
              Cargar del perfil
            </button>

            <button
              class="default-bar text-white font-bold grid items-center h-12 p-2 rounded-md"
            >
              Guardar puntos
            </button>
          </div>
        </div>

        <div class="grid gap-1 mx-auto mt-3 col-span-2 w-full">
          <label for="parametros" class="text-gray-700 text-sm"
            >Confirmar principales parámetros de calidad</label
          >
          <input
            type="text"
            id="parametros"
            class="bg-gray-50 border p-2 rounded-md text-gray-600"
          />
        </div>

        <div class="grid gap-1 mx-auto col-span-2 w-full mt-3">
          <label for="recepcion" class="text-gray-700 text-sm"
            >Politicas de recepción</label
          >
          <textarea
            type="text"
            rows="5"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum orci ligula. Proin eget lorem justo. Donec sodales urna vel imperdiet accumsan. Ut dignissim ipsum et condimentum placerat. Aenean porttitor tellus purus, a feugiat nibh faucibus et. Praesent quam tellus, rutrum at vehicula quis, condimentum nec tellus. Mauris quis aliquet orci. Nulla condimentum dapibus metus, vel faucibus mauris dignissim ut.

Aliquam pretium libero in quam gravida, sed ornare eros efficitur. Nam vitae mattis est. Vivamus ornare metus eu neque auctor hendrerit. Sed tincidunt nisi et porta imperdiet. Donec sagittis turpis felis, et imperdiet neque viverra at. Duis nisl purus, congue sed lacus sit amet, pellentesque ullamcorper mauris. Quisque laoreet, odio eu pretium euismod, tortor nisi scelerisque orci, a malesuada augue diam in dolor. Cras nec sagittis sem, vel imperdiet tellus. Proin gravida quis nisi vitae fringilla. Cras feugiat sapien mi, vel mattis augue hendrerit non. Morbi efficitur at leo vel scelerisque. Duis turpis ligula, ultrices in mollis et, faucibus non neque. Nunc sed nisl in arcu vulputate vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus eleifend laoreet. Donec aliquet placerat vulputate."
            cols="20"
            id="recepcion"
            class="bg-gray-50 border p-2 rounded-md text-gray-600"
          ></textarea>
          <button class="text-gray-700 font-bold" @click="managePoliticas">
            Ver todo
          </button>
        </div>

        <div class="grid gap-1 mx-auto mt-3 col-span-2 w-full">
          <label for="modoPago" class="text-gray-700">Modo de pago</label>
          <select
            name="modoPago"
            v-model="paymentMethod"
            class="w-full mx-auto bg-gray-50 border rounded-md p-2 text-gray-600"
          >
            <option selected class="text-gray-600" value="0" disabled>
              Modo de pago
            </option>
            <option class="text-gray-600" value="1">Modo Garantía</option>
            <option class="text-gray-600" value="2">Pago en sitio</option>
            <option class="text-gray-600" value="3">Pago a credito</option>
          </select>
        </div>

        <div
          class="grid gap-1 mx-auto mt-3 col-span-2 w-full"
          v-if="paymentMethod == 1"
        >
          <label for="garantiaInicial" class="text-gray-700"
            >Porcentaje inicial</label
          >
          <input
            type="number"
            v-model="percentageInitial"
            id="garantiaInicial"
            @change="managePercetangeInitial"
            class="bg-gray-50 border p-2 rounded-md text-gray-600"
          />
        </div>

        <div
          class="grid gap-1 mx-auto mt-3 col-span-2 w-full"
          v-if="paymentMethod == 1"
        >
          <label for="garantiaFinal" class="text-gray-700"
            >Porcentaje final</label
          >
          <input
            type="number"
            v-model="percentageFinal"
            id="garantiaFinal"
            @change="managePercetangeFinal"
            class="bg-gray-50 border p-2 rounded-md text-gray-600"
          />
        </div>

        <div
          class="inline-flex justify-between mx-auto mt-3 col-span-2 w-11/12"
        >
          <label for="domicilio" class="text-gray-700 text-sm"
            >Precio es puesto en domicilio del cliente</label
          >
          <input type="checkbox" id="domicilio" />
        </div>
      </div>

      <div class="mx-auto w-full overflow-x-scroll md:w-5/6" v-if="false">
        <table class="text-gray-500">
          <thead>
            <tr>
              <th class="text-sm">Imp-Hum</th>
              <th>1%</th>
              <th>2%</th>
              <th>3%</th>
              <th>4%</th>
              <th>5%</th>
              <th>6%</th>
              <th>7%</th>
              <th>8%</th>
              <th>9%</th>
              <th>10%</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  type="number"
                  value="13.0"
                  class="bg-transparent w-11/12"
                />
              </td>
              <td>
                <input
                  type="number"
                  value="15.6"
                  class="bg-transparent w-11/12"
                />
              </td>
              <td>
                <input
                  type="number"
                  value="15.3"
                  class="bg-transparent w-11/12"
                />
              </td>
              <td>
                <input
                  type="number"
                  value="15.2"
                  class="bg-transparent w-11/12"
                />
              </td>
              <td>
                <input
                  type="number"
                  value="15.0"
                  class="bg-transparent w-11/12"
                />
              </td>
              <td>
                <input
                  type="number"
                  value="14.8"
                  class="bg-transparent w-11/12"
                />
              </td>
              <td>
                <input
                  type="number"
                  value="14.6"
                  class="bg-transparent w-11/12"
                />
              </td>
              <td>
                <input
                  type="number"
                  value="14.4"
                  class="bg-transparent w-11/12"
                />
              </td>
              <td>
                <input
                  type="number"
                  value="14.2"
                  class="bg-transparent w-11/12"
                />
              </td>
              <td>
                <input
                  type="number"
                  value="14.1"
                  class="bg-transparent w-11/12"
                />
              </td>
              <td>
                <input
                  type="number"
                  value="13.9"
                  class="bg-transparent w-11/12"
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="number"
                  value="13.0"
                  class="bg-transparent w-11/12"
                />
              </td>
              <td>
                <input
                  type="number"
                  value="15.6"
                  class="bg-transparent w-11/12"
                />
              </td>
              <td>
                <input
                  type="number"
                  value="15.3"
                  class="bg-transparent w-11/12"
                />
              </td>
              <td>
                <input
                  type="number"
                  value="15.2"
                  class="bg-transparent w-11/12"
                />
              </td>
              <td>
                <input
                  type="number"
                  value="15.0"
                  class="bg-transparent w-11/12"
                />
              </td>
              <td>
                <input
                  type="number"
                  value="14.8"
                  class="bg-transparent w-11/12"
                />
              </td>
              <td>
                <input
                  type="number"
                  value="14.6"
                  class="bg-transparent w-11/12"
                />
              </td>
              <td>
                <input
                  type="number"
                  value="14.4"
                  class="bg-transparent w-11/12"
                />
              </td>
              <td>
                <input
                  type="number"
                  value="14.2"
                  class="bg-transparent w-11/12"
                />
              </td>
              <td>
                <input
                  type="number"
                  value="14.1"
                  class="bg-transparent w-11/12"
                />
              </td>
              <td>
                <input
                  type="number"
                  value="13.9"
                  class="bg-transparent w-11/12"
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="number"
                  value="13.0"
                  class="bg-transparent w-11/12"
                />
              </td>
              <td>
                <input
                  type="number"
                  value="15.6"
                  class="bg-transparent w-11/12"
                />
              </td>
              <td>
                <input
                  type="number"
                  value="15.3"
                  class="bg-transparent w-11/12"
                />
              </td>
              <td>
                <input
                  type="number"
                  value="15.2"
                  class="bg-transparent w-11/12"
                />
              </td>
              <td>
                <input
                  type="number"
                  value="15.0"
                  class="bg-transparent w-11/12"
                />
              </td>
              <td>
                <input
                  type="number"
                  value="14.8"
                  class="bg-transparent w-11/12"
                />
              </td>
              <td>
                <input
                  type="number"
                  value="14.6"
                  class="bg-transparent w-11/12"
                />
              </td>
              <td>
                <input
                  type="number"
                  value="14.4"
                  class="bg-transparent w-11/12"
                />
              </td>
              <td>
                <input
                  type="number"
                  value="14.2"
                  class="bg-transparent w-11/12"
                />
              </td>
              <td>
                <input
                  type="number"
                  value="14.1"
                  class="bg-transparent w-11/12"
                />
              </td>
              <td>
                <input
                  type="number"
                  value="13.9"
                  class="bg-transparent w-11/12"
                />
              </td>
            </tr>
            <!-- Agrega más filas según sea necesario -->
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <CModal alignment="center" :visible="visible" @close="closeModal">
    <CModalBody>
      <div class="grid w-full gap-3 pb-3">
        <img
          src="@/assets/Nav/X.svg"
          alt="Close alert"
          @click="closeModal"
          class="justify-self-end"
        />
        <h2 class="text-center text-xl font-bold text-gray-500 w-3/4 mx-auto">
          Has confirmado está oferta
        </h2>
        <div class="mx-auto text-center">
          <p class="text-gray-700 text-sm w-3/4 mx-auto">
            Agradecemos el presente acuerdo, Agroec respaldará todo el proceso.
          </p>
          <div class="mt-2 w-11/12 mx-auto">
            <li class="text-gray-700 text-sm">
              Enviaremos tu confirmación al vendedor, el cual debe también
              aceptar para cerrar la negociación.
            </li>
          </div>
        </div>
      </div>
    </CModalBody>
  </CModal>

  <CModal
    alignment="center"
    :visible="rechazoModal"
    @close="manageRechazoModal"
  >
    <CModalBody>
      <div class="grid w-full gap-3 pb-3">
        <img
          src="@/assets/Nav/X.svg"
          alt="Close alert"
          @click="manageRechazoModal"
          class="justify-self-end"
        />
        <h2 class="text-center text-xl font-bold text-gray-500 w-5/6 mx-auto">
          Reconfirmación de Rechazo
        </h2>
        <div class="mx-auto text-center">
          <p class="text-gray-700 text-sm w-full mx-auto">
            ¿Estas seguro de querer rechazar la oferta?
          </p>
        </div>

        <button
          class="h-12 w-2/3 bg-red-400 rounded-md text-white text-center mx-auto"
          @click="manageRechazoModal"
        >
          Confirmar
        </button>
      </div>
    </CModalBody>
  </CModal>

  <CModal
    alignment="center"
    :visible="entregasModal"
    @close="manageEntregasModal"
  >
    <CModalBody>
      <div class="grid w-full gap-3 pb-3">
        <img
          src="@/assets/Nav/X.svg"
          alt="Close alert"
          @click="manageEntregasModal"
          class="justify-self-end"
        />
        <h2 class="text-center text-xl font-bold text-gray-500 w-5/6 mx-auto">
          Entregas totales
        </h2>
        <div class="mx-auto">
          <ion-segment value="buttons">
            <ion-segment-button
              value="true"
              @click="manageEntregasSelect"
              class="tabs button border-gray-300 text-gray-600"
            >
              <ion-label>Cumplidas</ion-label>
            </ion-segment-button>
            <ion-segment-button
              value="false"
              @click="manageEntregasSelect"
              class="tabs button border-gray-300 text-gray-600"
            >
              <ion-label>Falta Recibir</ion-label>
            </ion-segment-button>
          </ion-segment>
        </div>
        <div class="grid" v-if="entregasSelect">
          <RouterLink to="/status">
            <div class="order-card flex md:grid md:grid-cols-2 gap-3 p-2">
              <div class="flex w-full gap-3">
                <div class="Order grid items-center text-center">
                  <img
                    src="@/assets/Products/Corn.svg"
                    alt="Orden Icon"
                    class="h-16 w-16 mx-auto"
                  />
                </div>

                <div class="Order-Text text-left">
                  <h1 class="text-gray-600 text-sm font-bold">Orden #345</h1>
                  <h1 class="text-gray-600 text-xs font-bold">
                    Maiz Duro Amarillo
                  </h1>
                  <p class="text-gray-500 text-xs">Cant: 200qq</p>
                  <p class="text-gray-500 text-xs">24/12/2023</p>
                </div>
              </div>

              <div class="Order-Price text-right grid mt-2 justify-end">
                <h1 class="text-yellow-400 text-md font-bold">$17.50</h1>
                <h1 class="text-yellow-400 text-md font-bold">QQ</h1>
                <p class="text-lime text-xs font-bold">Entregada</p>
              </div>
            </div>
          </RouterLink>
        </div>
        <div class="grid" v-if="!entregasSelect">
          <RouterLink to="/status">
            <div class="order-card flex md:grid md:grid-cols-2 gap-3 p-2">
              <div class="flex w-full gap-3">
                <div class="Order grid items-center text-center">
                  <img
                    src="@/assets/Products/Corn.svg"
                    alt="Orden Icon"
                    class="h-16 w-16 mx-auto"
                  />
                </div>

                <div class="Order-Text text-left">
                  <h1 class="text-gray-600 text-sm font-bold">Orden #347</h1>
                  <h1 class="text-gray-600 text-xs font-bold">
                    Maiz Duro Amarillo
                  </h1>
                  <p class="text-gray-500 text-xs">Cant: 200qq</p>
                  <p class="text-gray-500 text-xs">24/12/2023</p>
                </div>
              </div>

              <div class="Order-Price text-right grid mt-2 justify-end">
                <h1 class="text-yellow-400 text-md font-bold">$17.50</h1>
                <h1 class="text-yellow-400 text-md font-bold">QQ</h1>
                <p class="text-red-400 text-xs font-bold">Pendiente</p>
              </div>
            </div>
          </RouterLink>
          <RouterLink to="/status">
            <div class="order-card flex md:grid md:grid-cols-2 gap-3 p-2">
              <div class="flex w-full gap-3">
                <div class="Order grid items-center text-center">
                  <img
                    src="@/assets/Products/Corn.svg"
                    alt="Orden Icon"
                    class="h-16 w-16 mx-auto"
                  />
                </div>

                <div class="Order-Text text-left">
                  <h1 class="text-gray-600 text-sm font-bold">Orden #346</h1>
                  <h1 class="text-gray-600 text-xs font-bold">
                    Maiz Duro Amarillo
                  </h1>
                  <p class="text-gray-500 text-xs">Cant: 200qq</p>
                  <p class="text-gray-500 text-xs">24/12/2023</p>
                </div>
              </div>

              <div class="Order-Price text-right grid mt-2 justify-end">
                <h1 class="text-yellow-400 text-md font-bold">$17.50</h1>
                <h1 class="text-yellow-400 text-md font-bold">QQ</h1>
                <p class="text-red-400 text-xs font-bold">Pendiente</p>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </CModalBody>
  </CModal>

  <CModal alignment="center" :visible="politicasModal" @close="managePoliticas">
    <CModalBody>
      <div class="grid w-full gap-3 pb-3">
        <img
          src="@/assets/Nav/X.svg"
          alt="Close alert"
          @click="managePoliticas"
          class="justify-self-end"
        />
        <h2 class="text-center text-xl font-bold text-gray-500 w-3/4 mx-auto">
          Tus politicas
        </h2>
        <div class="mx-auto text-left max-h-52 overflow-y-scroll">
          <p class="text-gray-700 text-sm w-3/4 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            vestibulum orci ligula. Proin eget lorem justo. Donec sodales urna
            vel imperdiet accumsan. Ut dignissim ipsum et condimentum placerat.
            Aenean porttitor tellus purus, a feugiat nibh faucibus et. Praesent
            quam tellus, rutrum at vehicula quis, condimentum nec tellus. Mauris
            quis aliquet orci. Nulla condimentum dapibus metus, vel faucibus
            mauris dignissim ut. Aliquam pretium libero in quam gravida, sed
            ornare eros efficitur. Nam vitae mattis est. Vivamus ornare metus eu
            neque auctor hendrerit. Sed tincidunt nisi et porta imperdiet. Donec
            sagittis turpis felis, et imperdiet neque viverra at. Duis nisl
            purus, congue sed lacus sit amet, pellentesque ullamcorper mauris.
            Quisque laoreet, odio eu pretium euismod, tortor nisi scelerisque
            orci, a malesuada augue diam in dolor. Cras nec sagittis sem, vel
            imperdiet tellus. Proin gravida quis nisi vitae fringilla. Cras
            feugiat sapien mi, vel mattis augue hendrerit non. Morbi efficitur
            at leo vel scelerisque. Duis turpis ligula, ultrices in mollis et,
            faucibus non neque. Nunc sed nisl in arcu vulputate vestibulum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus
            eleifend laoreet. Donec aliquet placerat vulputate.
          </p>
        </div>
      </div>
    </CModalBody>
  </CModal>

  <CModal alignment="center" :visible="errorChat" @close="closeChatModal">
    <CModalBody>
      <div class="grid w-full gap-3 pb-3">
        <img
          src="@/assets/Nav/X.svg"
          alt="Close alert"
          @click="closeChatModal"
          class="justify-self-end"
        />
        <h2 class="text-center text-xl font-bold text-gray-500 w-3/4 mx-auto">
          Error
        </h2>
        <div class="mx-auto text-center">
          <p class="text-gray-700 text-sm w-3/4 mx-auto">
            No es posible ingresar numeros o correos en el chat.
          </p>
        </div>
      </div>
    </CModalBody>
  </CModal>
</template>

<script allowJs>
import Event from "../libs/event.js";
import { CModal, CModalBody } from "@coreui/vue";

import { IonIcon, IonSegment, IonLabel, IonSegmentButton } from "@ionic/vue";
export default {
  components: {
    CModal,
    CModalBody,
    IonSegment,
    IonLabel,
    IonSegmentButton,
    IonIcon,
  },
  props: {
    Item: String,
  },
  data() {
    return {
      details: false,
      puntoFromPerfil: "",
      offerSaw: false,
      visible: false,
      errorChat: false,
      messageInput: "",
      parametros: false,
      castigos: false,
      paramSelected: false,
      param: "",
      minmax: "",
      paymentMethod: 0,
      isActive: true,
      borders: true,
      rechazoModal: false,
      condicionesMessage: false,
      datos: false,
      percentageFinal: 0,
      percentageInitial: 0,
      politicasModal: false,
      nombrePunto: "",
      ubicacionPunto: "",
      direccionPunto: "",
      puntosRecepcion: [],
      unidadEntrega: "",
      cantidadEntrega: 0,
      entregas: [],
      entregasModal: false,
      entregasSelect: true,
    };
  },
  created() {
    Event.on("back-to-details", () => {
      this.closeDetails();
    });
  },
  methods: {
    manageEntregasSelect() {
      this.entregasSelect = !this.entregasSelect;
    },
    manageEntregasModal() {
      this.entregasModal = !this.entregasModal;
    },
    saveEntrega() {
      if (this.cantidadEntrega != "" && this.unidadEntrega != "") {
        this.entregas.push({
          cantidad: this.cantidadEntrega,
          unidad: this.unidadEntrega,
        });
      }
    },
    deleteEntrega(x) {
      this.entregas = this.entregas.filter((y) => y != x);
    },
    addPuntoFromPerfil() {
      this.nombrePunto = "Punto desde Perfil";
      this.ubicacionPunto = "Direcc";
      this.direccionPunto = "Ubic";
      this.savePunto();
    },
    savePunto() {
      if (
        this.nombrePunto != "" &&
        this.ubicacionPunto != "" &&
        this.direccionPunto != ""
      ) {
        this.puntosRecepcion.push({
          nombre: this.nombrePunto,
          ubicacion: this.ubicacionPunto,
          direccion: this.direccionPunto,
        });
      }
    },
    deletePunto(x) {
      this.puntosRecepcion = this.puntosRecepcion.filter((y) => y != x);
    },
    closeModalDatos() {
      this.datos = false;
    },
    openModalDatos() {
      this.datos = true;
    },
    managePoliticas() {
      this.politicasModal = !this.politicasModal;
    },
    manageRechazoModal() {
      this.rechazoModal = !this.rechazoModal;
    },
    showCondicionesMessage() {
      this.condicionesMessage = !this.condicionesMessage;
    },
    setProduct(product) {
      this.param = product;
      this.paramSelected = false;
      this.borders = true;
    },
    checkParam() {
      this.paramSelected = true;
      if (this.param != "") {
        this.borders = false;
      } else {
        this.borders = true;
      }
    },
    sendProduct() {
      if (this.param == "") return;
      this.visible = true;
    },
    sendMessage() {
      // Check if message contains emails or numbers

      const expresion = /\w+@\w+\.+[a-z]/;

      if (this.messageInput === "") {
        return;
      } else if (expresion.test(this.messageInput)) {
        this.errorChat = true;
        return;
      } else if (this.messageInput.match(/\d+/g)) {
        this.errorChat = true;
        return;
      } else {
        this.messageInput = "";
      }
    },
    showDealDetails() {
      this.details = !this.details ? true : false;
      this.$emit("back-to-details");
      this.offerSaw = true;
    },
    closeDetails() {
      this.details = this.details ? false : true;
      this.$emit("back-to-details");
    },
    showModal() {
      this.datos = false;
      this.visible = true;
    },
    closeChatModal() {
      this.errorChat = false;
    },
    closeModal() {
      // Close the menu by setting menuOpen to false
      this.visible = false;
    },
    managePercetangeFinal(e) {
      if (e.target.value > 100) {
        this.percentageFinal = 100;
        return (this.percentageInitial = 0);
      }
      const valueFinal = 100 - e.target.value;
      return (this.percentageInitial = valueFinal);
    },
    managePercetangeInitial(e) {
      if (e.target.value > 100) {
        this.percentageInitial = 100;
        return (this.percentageFinal = 0);
      }
      const valueFinal = 100 - e.target.value;
      return (this.percentageFinal = valueFinal);
    },
  },
};
</script>

<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: center;
}

th {
  background-color: #f2f2f2;
  text-align: left;
}
z .message-wrap {
  height: 50vh;
}

/* ===== Scrollbar CSS ===== */

.button {
  width: 100%;
  font-size: 12px;
}

/* Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: #b4b1b1 #ffffff;
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 8px;
}

*::-webkit-scrollbar-track {
  background: #ffffff;
}

*::-webkit-scrollbar-thumb {
  background-color: #b4b1b1;
  border-radius: 10px;
  border: 3px solid #ffffff;
}
.h-modaldatos {
  height: 75vh;
}

@media (min-width: 768px) {
  .h-modaldatos {
    height: 65vh;
  }
}

#domicilio {
  accent-color: #a3e635;
}

.hour-text {
  opacity: 0.8;
}
</style>
