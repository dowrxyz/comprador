<template>
  <div class="content w-full mx-auto grid my-5 gap-2">
    <div
      class="border-2 w-11/12 mx-auto rounded grid items-center relative h-12 text-gray-500 md:w-1/3"
    >
      <input
        placeholder="Filtrar por ID"
        class="text-left text-sm md:text-md bg-transparent h-full p-2"
      />
      <div class="absolute right-1 top-2.5">
        <img
          src="@/assets/Search.svg"
          alt="Search by Comerciante"
          class="h-6 w-6"
        />
      </div>
    </div>

    <div class="grid gap-1" v-if="status == 4">
      <div>
        <div class="order-card flex md:grid md:grid-cols-2 gap-3 shadow-md p-2">
          <RouterLink to="/licitacion/Maiz" class="flex w-full gap-3">
            <div class="Order grid items-center text-center">
              <img
                src="@/assets/Products/Corn.svg"
                alt="Orden Icon"
                class="h-16 w-16 mx-auto"
              />
            </div>

            <div class="Order-Text text-left">
              <h1 class="text-gray-600 text-xs font-bold">
                ID #360 - <span class="default-color">Cumplida</span>
              </h1>
              <h1 class="text-gray-600 text-sm font-bold">Maiz Duro Amarillo</h1>
              <p class="text-gray-500 text-xs">Cant: 200qq</p>
              <p class="text-gray-500 text-xs">En sacos: 100 libras</p>
              <h1 class="text-yellow-400 text-xs font-bold mt-1">$17.50</h1>
              <h1 class="text-yellow-400 text-xs font-bold">QQ</h1>
              <h1 class="second-color text-xs font-bold">Prom: $250</h1>
              <h1 class="third-color text-xs font-bold">
                Cant. Negociada: 300
              </h1>
            </div>
          </RouterLink>

          <div
            class="Order-Price text-right mt-2 justify-end flex items-center gap-1 grid-cols-2"
          >
            <RouterLink
              class="default-bar rounded-md p-2 h-8 w-8 grid items-center"
              to="/app/licitacion/editar/Maíz"
              ><img
                src="@/assets/Licitaciones/Lapiz.svg"
                class="mx-auto"
                alt="Edit"
            /></RouterLink>
            <button
              class="bg-red-500 rounded-md p-2 h-8 w-8 grid items-center"
              @click="openDeleteModal"
            >
              <img
                src="@/assets/Licitaciones/Eliminar.svg"
                class="mx-auto"
                alt="Delete"
              />
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="grid gap-1" v-if="status == 3">
      <div>
        <div class="order-card flex md:grid md:grid-cols-2 gap-3 shadow-md p-2">
          <RouterLink to="/licitacion/Maiz" class="flex w-full gap-3">
            <div class="Order grid items-center text-center">
              <img
                src="@/assets/Products/Corn.svg"
                alt="Orden Icon"
                class="h-16 w-16 mx-auto"
              />
            </div>

            <div class="Order-Text text-left">
              <h1 class="text-gray-600 text-xs font-bold">
                ID #372 - <span class="text-red-400">Vencida</span>
              </h1>
              <h1 class="text-gray-600 text-sm font-bold">Maiz Duro Amarillo</h1>
              <p class="text-gray-500 text-xs">Cant: 200qq</p>
              <p class="text-gray-500 text-xs">En sacos: 100 libras</p>
              <h1 class="text-yellow-400 text-xs font-bold mt-1">$17.50</h1>
              <h1 class="text-yellow-400 text-xs font-bold">QQ</h1>
            </div>
          </RouterLink>

          <div
            class="Order-Price text-right mt-2 justify-end flex items-center gap-1 grid-cols-2"
          >
            <RouterLink
              class="default-bar rounded-md p-2 h-8 w-8 grid items-center"
              to="/app/licitacion/editar/Cacao"
              ><img
                src="@/assets/Licitaciones/Lapiz.svg"
                class="mx-auto"
                alt="Edit"
            /></RouterLink>
            <button
              class="bg-red-500 rounded-md p-2 h-8 w-8 grid items-center"
              @click="openDeleteModal"
            >
              <img
                src="@/assets/Licitaciones/Eliminar.svg"
                class="mx-auto"
                alt="Delete"
              />
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="grid gap-1" v-if="status == 2">
      <div>
        <div class="order-card flex md:grid md:grid-cols-2 gap-3 shadow-md p-2">
          <RouterLink to="/licitacion/Maiz" class="flex w-full gap-3">
            <div class="Order grid items-center text-center">
              <img
                src="@/assets/Products/Corn.svg"
                alt="Orden Icon"
                class="h-16 w-16 mx-auto"
              />
            </div>

            <div class="Order-Text text-left">
              <h1 class="text-gray-600 text-xs font-bold">
                ID #371 - <span class="text-red-600">Cerrada</span>
              </h1>
              <h1 class="text-gray-600 text-sm font-bold">
                Maiz Duro Amarillo
              </h1>
              <p class="text-gray-500 text-xs">Cant: 200qq</p>
              <p class="text-gray-500 text-xs">En sacos: 100 libras</p>
              <h1 class="text-yellow-400 text-xs font-bold mt-1">$17.50</h1>
              <h1 class="text-yellow-400 text-xs font-bold">QQ</h1>
            </div>
          </RouterLink>

          <div
            class="Order-Price text-right mt-2 justify-end flex items-center gap-1 grid-cols-2"
          >
            <RouterLink
              class="default-bar rounded-md p-2 h-8 w-8 grid items-center"
              to="/app/licitacion/editar/Maíz"
              ><img
                src="@/assets/Licitaciones/Lapiz.svg"
                class="mx-auto"
                alt="Edit"
            /></RouterLink>
            <button
              class="bg-red-500 rounded-md p-2 h-8 w-8 grid items-center"
              @click="openDeleteModal"
            >
              <img
                src="@/assets/Licitaciones/Eliminar.svg"
                class="mx-auto"
                alt="Delete"
              />
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="grid gap-1" v-if="status == 1">
      <div>
        <div class="order-card flex md:grid md:grid-cols-2 gap-3 shadow-md p-2">
          <RouterLink to="/licitacion/Maiz" class="flex w-full gap-3">
            <div class="Order grid items-center text-center">
              <img
                src="@/assets/Products/Corn.svg"
                alt="Orden Icon"
                class="h-16 w-16 mx-auto"
              />
            </div>

            <div class="Order-Text text-left">
              <h1 class="text-gray-600 text-xs font-bold">
                ID #373 - <span class="second-color">Abierta</span>
              </h1>
              <h1 class="text-gray-600 text-sm font-bold">
                Maiz Duro Amarillo
              </h1>
              <p class="text-gray-500 text-xs">Cant: 200qq</p>
              <p class="text-gray-500 text-xs">En sacos: 100 libras</p>
              <h1 class="text-yellow-400 text-xs font-bold mt-1">$17.50</h1>
              <h1 class="text-yellow-400 text-xs font-bold">QQ</h1>
            </div>
          </RouterLink>

          <div
            class="Order-Price text-right mt-2 justify-end flex items-center gap-1 grid-cols-2"
          >
            <RouterLink
              class="default-bar rounded-md p-2 h-8 w-8 grid items-center"
              to="/app/licitacion/editar/Maíz"
              ><img
                src="@/assets/Licitaciones/Lapiz.svg"
                class="mx-auto"
                alt="Edit"
            /></RouterLink>
            <button
              class="bg-red-700 rounded-md p-2 h-8 w-8 grid items-center"
              @click="closeLicitacionModal"
            >
              <img
                src="@/assets/Sidebar/CloseLicitacion.svg"
                class="mx-auto"
                alt="Delete"
              />
            </button>
            <button
              class="bg-red-500 rounded-md p-2 h-8 w-8 grid items-center"
              @click="openDeleteModal"
            >
              <img
                src="@/assets/Licitaciones/Eliminar.svg"
                class="mx-auto"
                alt="Delete"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <CModal
    alignment="center"
    :visible="closeLicitacion"
    @close="closeLicitacionModal"
  >
    <CModalBody>
      <div class="grid w-full gap-3 pb-3">
        <img
          src="@/assets/Nav/X.svg"
          alt="Close alert"
          @click="closeLicitacionModal"
          class="justify-self-end"
        />
        <h2
          class="text-center text-xl font-bold text-gray-500 w-3/4 mx-auto text-center"
        >
          Cerrar Licitación
        </h2>
        <div class="mx-auto text-center">
          <p class="text-gray-400 text-sm w-full mx-auto">
            No estará publicada su licitación
          </p>

          <button
            class="p-2 h-12 mx-auto w-3/4 bg-red-500 mt-3 text-white text-center rounded"
          >
            Confirmar
          </button>
        </div>
      </div>
    </CModalBody>
  </CModal>

  <CModal alignment="center" :visible="deleteModal" @close="closeDeleteModal">
    <CModalBody>
      <div class="grid w-full gap-3 pb-3">
        <img
          src="@/assets/Nav/X.svg"
          alt="Close alert"
          @click="closeDeleteModal"
          class="justify-self-end"
        />
        <h2
          class="text-center text-xl font-bold text-gray-500 w-3/4 mx-auto text-center"
        >
          Confirmación
        </h2>
        <div class="mx-auto text-center">
          <p class="text-gray-400 text-sm w-full mx-auto">
            ¿Deseas eliminar esta licitacion?
          </p>

          <button
            class="p-2 h-12 mx-auto w-3/4 bg-red-500 mt-3 text-white text-center rounded"
          >
            Eliminar
          </button>
        </div>
      </div>
    </CModalBody>
  </CModal>
</template>

<script>
import { CModal, CModalBody } from "@coreui/vue";
export default {
  props: {
    status: Number,
  },
  components: {
    CModal,
    CModalBody,
  },
  data() {
    return {
      deleteModal: false,
      closeLicitacion: false,
    };
  },
  methods: {
    closeDeleteModal() {
      this.deleteModal = false;
    },
    openDeleteModal() {
      this.deleteModal = true;
    },
    closeLicitacionModal() {
      this.closeLicitacion = !this.closeLicitacion;
    },
  },
};
</script>
