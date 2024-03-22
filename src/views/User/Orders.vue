<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="tertiary">
        <div class="grid grid-cols-3 items-center mx-auto w-11/12 mt-4">
          <RouterLink to="/app/home">
            <img src="@/assets/Arrow.svg" alt="Back" class="w-4 h-4" />
          </RouterLink>
          <h2 class="text-center">Ordenes</h2>
        </div>
        <div class="mx-auto w-full text-center mt-3 grid grid-cols-2 justify-center gap-2">
          <a v-if="status" class="text-sm text-gray-50 border-bottom-2 border-gray-50 p-3">
            Activas
          </a>
          <a v-if="status" class="text-sm text-gray-50 p-3" @click="changeStatus">
            Historial
          </a>
          <a v-if="!status" class="text-sm text-gray-50 p-3" @click="changeStatus">
            Activas
          </a>
          <a v-if="!status" class="text-sm text-gray-50 border-bottom-2 border-gray-50 p-3">
            Historial
          </a>
        </div>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <Orders />
    </ion-content>
  </ion-page>
</template>

<script allowJs>
import Orders from "@/components/Orders.vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonIcon,
} from "@ionic/vue";

export default {
  components: {
    Orders,
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonIcon,
  },
  data(){
    return{
      status: true
    }
  },
  methods:{
    changeStatus(){
      this.status = !this.status
    }
  }
};
</script>
