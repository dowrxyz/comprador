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
          <div class="">
            <label for="ruc" class="text-gray-600 font-bold w-5/6 mx-auto"
              >RUC</label
            >
            <input
              type="number"
              name="ruc"
              class="text-gray-400 w-full mx-auto bg-transparent border border-2 border-gray-300 rounded-[16px] px-3 py-3 rounded-md"
              placeholder="Tu cedula"
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
              placeholder="Tu correo"
            />
          </div>
          <div class="">
            <label for="clave" class="text-gray-600 font-bold w-5/6 mx-auto"
              >Clave</label
            >
            <input
              type="password"
              id="clave"
              class="text-gray-400 w-full mx-auto bg-transparent border border-2 border-gray-300 rounded-[16px] px-3 py-3 rounded-md"
              placeholder="Contraseña"
            />
          </div>
          <div class="">
            <label for="comp" class="text-gray-600 font-bold w-5/6 mx-auto"
              >Compañía</label
            >
            <input
              type="text"
              id="comp"
              class="text-gray-400 w-full mx-auto bg-transparent border border-2 border-gray-300 rounded-[16px] px-3 py-3 rounded-md"
              placeholder="Nombre de Compañía"
            />
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

              <div class="absolute right-3 top-11">
                <img
                  src="@/assets/Search.svg"
                  alt="Your ubication"
                  class="h-5 w-5"
                />
              </div>
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

              <div class="absolute right-3 top-11">
                <img
                  src="@/assets/Search.svg"
                  alt="Your ubication"
                  class="h-5 w-5"
                />
              </div>
            </div>
          </div>
          <div class="">
            <label for="dic" class="text-gray-600 font-bold w-5/6 mx-auto"
              >Direccion</label
            >
            <input
              type="text"
              id="dic"
              class="text-gray-400 w-full mx-auto bg-transparent border border-2 border-gray-300 rounded-[16px] px-3 py-3 rounded-md"
              placeholder="Tu direccion"
            />
          </div>
          <div class="">
            <label for="dic" class="text-gray-600 font-bold w-5/6 mx-auto"
              >Ubicacion</label
            >
            <input
              type="text"
              id="dic"
              class="text-gray-400 w-full mx-auto bg-transparent border border-2 border-gray-300 rounded-[16px] px-3 py-3 rounded-md"
              placeholder="GPS"
            />
          </div>

          <Contact num="1"/>
          <Contact num="2"/>
          <Contact num="3"/>



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
                <option selected>Asóciacion Agricola</option>
                <option>Agricultor</option>
                <option>Comerciante</option>
              </select>

              <div class="absolute right-3 top-11">
                <img
                  src="@/assets/Search.svg"
                  alt="Type of your business"
                  class="h-5 w-5"
                />
              </div>
            </div>
          </div>

          <div class="col-span-2 grid">
            <label for="eco" class="text-gray-600 font-bold w-full mx-auto"
              >Productos de Interes</label
            >
            <RouterLink to="/app/add/product/interested" class="text-gray-400 w-full mx-auto bg-transparent border border-2 border-gray-300 px-3 py-3 rounded-md">Agregar productos</RouterLink>
          </div> 
      
          <div class="">
            <label for="eco" class="text-gray-600 font-bold w-5/6 mx-auto"
              >Actividad Económica</label
            >
            <input
              type="text"
              id="eco"
              class="text-gray-400 w-full mx-auto bg-transparent border border-2 border-gray-300 rounded-[16px] px-3 py-3 rounded-md"
              placeholder="Tu actividad"
            />
          </div>

          
          <div class="">
            <label for="ctm" class="text-gray-600 font-bold w-5/6 mx-auto"
              >Consumo Mes TM</label
            >
            <input
              type="number"
              name="ctm"
              class="text-gray-400 w-full mx-auto bg-transparent border border-2 border-gray-300 rounded-[16px] px-3 py-3 rounded-md"
            />
          </div>
          
          <div class="">
            <label for="ca" class="text-gray-600 font-bold w-5/6 mx-auto"
              >Consumo Anual</label
            >
            <input
              type="number"
              name="ca"
              class="text-gray-400 w-full mx-auto bg-transparent border border-2 border-gray-300 rounded-[16px] px-3 py-3 rounded-md"
            />
          </div>

          <div class="">
            <label for="pmes" class="text-gray-600 font-bold w-5/6 mx-auto"
              >Presupuesto por Mes</label
            >
            <input
              type="number"
              name="pmes"
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

      <CModal alignment="center" :visible="visible">
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
import { CModal, CModalBody } from "@coreui/vue";
export default {
  components: {
    CModal,
    Contact,
    CModalBody,
  },
  data() {
    return {
      visible: false,
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
  },
};
</script>


<style scoped>
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: '';
}
</style>