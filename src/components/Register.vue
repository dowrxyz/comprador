<template>
  <ion-page>
    <ion-content>
      <ion-header>
        <ion-toolbar color="primary">
          <div class="grid grid-cols-3 items-center mx-auto w-11/12">
            <a href="/signin">
              <img src="@/assets/Arrow.svg" alt="Back" class="w-4 h-4" />
            </a>
            <h2 class="text-center">Registro</h2>
          </div>
        </ion-toolbar>
      </ion-header>

      <div class="logIn">
        <img
          src="@/assets/AgroIcon.svg"
          alt="App Icon"
          class="icon-app mx-auto my-4"
        />

        <form
          class="mx-auto items-center gap-3 w-11/12 my-5 md:w-1/2 justify-center grid md:grid-cols-2"
        >
          <div class="col-span-2">
            <label for="comp" class="text-gray-600 font-bold w-5/6 mx-auto"
              >Nombre de la Compañía</label
            >
            <input
              type="text"
              id="comp"
              class="text-gray-400 w-full mx-auto bg-transparent border border-2 border-gray-300 rounded-[16px] px-3 py-3 rounded-md"
              placeholder="Nombre de la Compañía"
            />
          </div>
          <div class="col-span-2">
            <label for="ruc" class="text-gray-600 font-bold w-5/6 mx-auto"
              >RUC</label
            >
            <input
              type="number"
              name="ruc"
              class="text-gray-400 w-full mx-auto bg-transparent border border-2 border-gray-300 rounded-[16px] px-3 py-3 rounded-md"
              placeholder="RUC"
            />
          </div>
          <div class="">
            <label for="correo" class="text-gray-600 font-bold w-5/6 mx-auto"
              >Correo</label
            >
            <input
              type="text"
              id="correo"
              class="text-gray-400 w-full mx-auto bg-transparent border border-2 border-gray-300 rounded-[16px] px-3 py-3 rounded-md"
              placeholder="Correo"
            />
          </div>
          <div class="relative">
            <label for="clave" class="text-gray-600 font-bold w-5/6 mx-auto"
              >Clave</label
            >
            <input v-if="visiblePassword"
              type="password"
              id="clave"
              v-model="password"
              class="text-gray-400 w-full mx-auto bg-transparent border border-2 border-gray-300 rounded-[16px] px-3 py-3 rounded-md"
              placeholder="Clave"
            />
            
            <input v-else
              type="text"
              id="clave"
              v-model="password"
              class="text-gray-400 w-full mx-auto bg-transparent border border-2 border-gray-300 rounded-[16px] px-3 py-3 rounded-md"
              placeholder="Clave"
            />
            <button @click="changeVisibility" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" class="absolute bottom-4 mb-0.5 right-2" fill="#a2afbe" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg>
            </button>
          </div>

          <div class="mx-auto grid relative w-full">
            <div class="relative">
              <label
                for="provincia"
                class="text-gray-600 font-bold w-5/6 mx-auto"
                >Provincia</label
              >
              <select
                id="provincia"
                class="w-full mx-auto bg-transparent border border-2 border-gray-300 rounded-[16px] px-3 py-3 rounded-md text-gray-600"
              >
                <option selected>Jaramijó</option>
                <option>Pedro Carbo</option>
                <option>Milagro</option>
              </select>
            </div>
          </div>

          <div class="mx-auto grid relative w-full">
            <div class="relative">
              <label
                for="canton"
                class="text-gray-600 font-bold w-5/6 mx-auto"
                >Cantón</label
              >
              <select
                id="canton"
                class="w-full mx-auto bg-transparent border border-2 border-gray-300 rounded-[16px] px-3 py-3 rounded-md text-gray-600"
              >
                <option selected>Jaramijó</option>
                <option>Pedro Carbo</option>
                <option>Milagro</option>
              </select>
            </div>
          </div>
          <div class="">
            <label for="dic" class="text-gray-600 font-bold w-5/6 mx-auto"
              >Dirección</label
            >
            <input
              type="text"
              id="dic"
              class="text-gray-400 w-full mx-auto bg-transparent border border-2 border-gray-300 rounded-[16px] px-3 py-3 rounded-md"
              placeholder="Dirección"
            />
          </div>
          <div class="">
            <label for="dic" class="text-gray-600 font-bold w-5/6 mx-auto"
              >Ubicación</label
            >
            <input
              type="text"
              id="dic"
              class="text-gray-400 w-full mx-auto bg-transparent border border-2 border-gray-300 rounded-[16px] px-3 py-3 rounded-md"
              placeholder="Ubicación"
            />
          </div>
          <div class="col-span-2">
            <label for="telf" class="text-gray-600 font-bold w-5/6 mx-auto"
              >Teléfono</label
            >
            <input
              type="text"
              id="telf"
              class="text-gray-400 w-full mx-auto bg-transparent border border-2 border-gray-300 rounded-[16px] px-3 py-3 rounded-md"
              placeholder="Teléfono"
            />
          </div>

          <Contact num="1"/>
          <Contact num="2"/>
          <Contact num="3"/>


          <div class="col-span-2">
            <label for="eco" class="text-gray-600 font-bold w-5/6 mx-auto"
              >Actividad Económica</label
            >
            <input
              type="text"
              id="eco"
              class="text-gray-400 w-full mx-auto bg-transparent border border-2 border-gray-300 rounded-[16px] px-3 py-3 rounded-md"
              placeholder="Actividad Económica"
            />
          </div>

          <div class="mx-auto grid relative w-full col-span-2">
            <div class="relative">
              <label
                for="negocio"
                class="text-gray-600 font-bold w-5/6 mx-auto"
                >Tipo de Negocio</label
              >
              <select
                id="negocio"
                class="w-full mx-auto bg-transparent border border-2 border-gray-300 rounded-[16px] px-3 py-3 rounded-md text-gray-600"
              >
                <option selected>Agricultor</option>
                <option>Comerciante</option>
                <option>Asociación de Agricultor</option>
              </select>
            </div>
          </div>
          

          <div class="col-span-2 grid relative">
            <label for="eco" class="text-gray-600 font-bold w-full mx-auto"
              >Productos de Interés</label
            >
            <RouterLink to="/app/add/product/interested" class="text-gray-400 w-full mx-auto bg-transparent border border-2 border-gray-300 px-3 py-3 rounded-md">Agregar productos</RouterLink>
            <svg xmlns="http://www.w3.org/2000/svg" class="absolute bottom-4 mb-0.5 right-2" fill="#a2afbe" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
          </div> 

          <div class="grid" v-if="getProducts().length > 0">
            <h1 class="text-gray-600 mb-3 font-bold">Productos Agregados</h1>
            
            <p class="text-gray-500 flex gap-3 items-center" v-for="item in getProducts()" :key="item.id">
              <svg xmlns="http://www.w3.org/2000/svg" height="18" fill="#a2afbe" viewBox="0 -960 960 960" width="18"><path d="m560-120-57-57 144-143H200v-480h80v400h367L503-544l56-57 241 241-240 240Z"/></svg>
              {{ item.nombre }}
              
                <button type="button" v-on:click="deleteProduct(item.id)">
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
      
          <div class="col-span-2">
            <label for="ctm" class="text-gray-600 font-bold w-5/6 mx-auto"
              >Consumo Mes TM</label
            >
            <input
              type="number"
              name="ctm"
              placeholder="Consumo Mes TM"
              class="text-gray-400 w-full mx-auto bg-transparent border border-2 border-gray-300 rounded-[16px] px-3 py-3 rounded-md"
            />
          </div>
          
          <div class="col-span-2">
            <label for="ca" class="text-gray-600 font-bold w-5/6 mx-auto"
              >Consumo Anual</label
            >
            <input
              type="number"
              name="ca"
              placeholder="Consumo Anual"
              class="text-gray-400 w-full mx-auto bg-transparent border border-2 border-gray-300 rounded-[16px] px-3 py-3 rounded-md"
            />
          </div>

          <div class="col-span-2">
            <label for="pmes" class="text-gray-600 font-bold w-5/6 mx-auto"
              >Presupuesto por Mes</label
            >
            <input
              type="number"
              name="pmes"
              placeholder="Presupuesto por Mes"
              class="text-gray-400 w-full mx-auto bg-transparent border border-2 border-gray-300 rounded-[16px] px-3 py-3 rounded-md"
            />
          </div>


          <button
            class="py-3 px-5 default-bar mx-auto mt-3 w-2/3 rounded font-bold col-span-2"
            @click="showModal"
            type="button"
          >
            Enviar
          </button>
        </form>
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
            <h2
              class="text-center text-xl font-bold text-gray-500 w-5/6 mx-auto text-center"
            >
              Agradecemos su registro
            </h2>
            <div class="mx-auto text-center">
              <p class="text-gray-400 text-sm w-3/4 mx-auto">
                Agroec analizará su perfil. Se hará llegar un correo electrónico
                para notificar disponibilidad de acceso a la Aplicación.
              </p>
            </div>
          </div>
        </CModalBody>
      </CModal>
    </ion-content>
  </ion-page>
</template>

<script allowJs>
import Contact from "@/components/Contacto.vue";
import { mapGetters, mapActions } from 'vuex';
import { CModal, CModalBody } from "@coreui/vue";
export default {
  components: {
    CModal,
    Contact,
    CModalBody,
  },
  computed: {
    ...mapGetters(['getProducts']),
    ...mapGetters(['deleteProduct']),
  },
  data() {
    return {
      visible: false,
      visiblePassword: true,
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    closeModal() {
      // Close the menu by setting menuOpen to false
      this.visible = false;
    },
    changeVisibility () {
      this.visiblePassword = !this.visiblePassword;
    }
  },
};
</script>
