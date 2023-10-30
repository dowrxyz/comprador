<template>
  <!-- drawer component -->
  <div
    v-if="menuOpen"
    id="drawer-navigation"
    class="fixed top-0 left-0 z-40 w-68 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800"
    tabindex="-1"
    aria-labelledby="drawer-navigation-label"
  >
    <h5
      id="drawer-navigation-label"
      class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
    >
      AGROEC
    </h5>
    <button
      type="button"
      @click="closeMenu"
      data-drawer-hide="drawer-navigation"
      aria-controls="drawer-navigation"
      class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
    >
      <svg
        aria-hidden="true"
        class="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
      <span class="sr-only">Close menu</span>
    </button>
    <div class="py-4 overflow-y-auto">
      <ul class="space-y-2 font-medium">
        <li>
          <RouterLink
            to="/profile"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#a2afbe"
            >
              <g><rect fill="none" height="24" width="24" /></g>
              <g>
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z"
                />
              </g>
            </svg>
            <span class="ml-3">Mi Perfil</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/orders"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            ><svg
              version="1.1"
              id="_x32_"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              xml:space="preserve"
              height="24px"
              width="24px"
              fill="#a2afbe"
            >
              <g>
                <path
                  class="st0"
                  d="M511.735,411.733l-64.819-288.538c-4.356-19.391-17.332-35.718-35.238-44.346l-72.443-34.884l-83.231,213.436
		l-83.24-213.436l-72.442,34.884c-17.906,8.628-30.882,24.955-35.238,44.346L0.265,411.733c-1.309,5.842,2.356,11.633,8.189,12.959
		l53.134,11.996c5.766,1.3,11.507-2.262,12.917-8.003l47.665-195.183l14.335,95.6l-25.64,119.668
		c-0.785,3.672-0.025,7.497,2.127,10.578c2.136,3.073,5.454,5.133,9.169,5.665l117.11,17.036l16.732-46.474l16.724,46.474
		l117.11-17.036c3.707-0.532,7.032-2.592,9.169-5.665c2.152-3.081,2.912-6.906,2.127-10.578l-25.638-119.668l14.335-95.6
		l47.664,195.183c1.401,5.741,7.151,9.304,12.917,8.003l53.135-11.996C509.38,423.366,513.044,417.575,511.735,411.733z
		 M256.004,394.418c-5.598,0-10.131-4.542-10.131-10.131c0-5.597,4.533-10.131,10.131-10.131c5.589,0,10.122,4.534,10.122,10.131
		C266.126,389.876,261.593,394.418,256.004,394.418z M256.004,325.91c-5.598,0-10.131-4.534-10.131-10.131
		c0-5.589,4.533-10.122,10.131-10.122c5.589,0,10.122,4.533,10.122,10.122C266.126,321.377,261.593,325.91,256.004,325.91z"
                />
                <polygon
                  class="st0"
                  points="270.348,65.535 273.53,53.075 267.874,29.952 243.156,29.952 237.491,53.075 240.682,65.535 	"
                />
                <polygon
                  class="st0"
                  points="275.861,175.343 271.943,83.408 240.057,83.408 236.14,175.343 256.004,227.111 	"
                />
              </g>
            </svg>
            <span class="flex-1 ml-3 whitespace-nowrap">Mis Órdenes</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/app/licitaciones"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#a2afbe"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
              />
            </svg>

            <span class="flex-1 ml-3 whitespace-nowrap">Mis Licitaciones</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/app/terms"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#a2afbe"
            >
              <g>
                <rect fill="none" height="24" width="24" />
                <path
                  d="M12,1L3,5v6c0,5.55,3.84,10.74,9,12c5.16-1.26,9-6.45,9-12V5L12,1L12,1z M11,7h2v2h-2V7z M11,11h2v6h-2V11z"
                />
              </g>
            </svg>
            <span class="flex-1 ml-3 whitespace-nowrap"
              >Términos y Condiciones</span
            >
          </RouterLink>
        </li>
        <li>
          <a
            href="/signin"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              fill="#a2afbe"
            >
              <path
                d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
              />
            </svg>
            <span class="flex-1 ml-3 whitespace-nowrap">Cerrar Sesion</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    menuOpen: Boolean,
  },
  methods: {
    closeMenu() {
      // Emit a custom event to request the parent to close the menu
      this.$emit("close-menu-request");
    },
  },
};
</script>
