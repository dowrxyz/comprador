<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="tertiary">
        <div class="flex items-center mx-auto w-11/12 pt-3">
          <RouterLink to="/app/home">
            <img src="@/assets/Arrow.svg" alt="Back" class="w-4 h-4" />
          </RouterLink>
          <h2 class="text-center mx-auto">Mis Licitaciones</h2>
        </div>
        <div class="mx-auto w-full text-center mt-3 grid grid-cols-2 justify-center gap-2">
          <a v-if="status" class="text-sm text-gray-50 border-bottom-2 border-gray-50 p-3">
            Abiertas
          </a>
          <a v-if="status" class="text-sm text-gray-50 p-3" @click="changeStatus">
            Cerradas
          </a>
          <a v-if="!status" class="text-sm text-gray-50 p-3" @click="changeStatus">
            Abiertas
          </a>
          <a v-if="!status" class="text-sm text-gray-50 border-bottom-2 border-gray-50 p-3">
            Cerradas
          </a>
        </div>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <MisLicitaciones :status="status"/>
    </ion-content>
    <BottomBar />
  </ion-page>
</template>

<script allowJs>
import BottomBar from "@/components/Bottom.vue";
import MisLicitaciones from "@/components/MisLicitaciones.vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonIcon
} from "@ionic/vue";

export default {
  components: {
    MisLicitaciones,
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    BottomBar,
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
