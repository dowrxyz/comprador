<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="tertiary">
        <div class="flex items-center mx-auto w-11/12">
          <RouterLink to="#" v-if="backToDetails" @click="goBack">
            <img src="@/assets/Arrow.svg" alt="Back" class="w-4 h-4" />
          </RouterLink>
          <RouterLink to="/app/insumos">
            <img src="@/assets/Arrow.svg" alt="Back" class="w-4 h-4" v-if="!backToDetails" />
          </RouterLink>
          <h2 class="text-center mx-auto">Detalles</h2>
        </div>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" >
      <InsumosInfo @back-to-details="changeDetailsState"/>
    </ion-content>
    <BottomBar />
  </ion-page>
</template>

<script allowJs>
import Event from '../../libs/event.js';
import BottomBar from "@/components/Bottom.vue";
import InsumosInfo from "@/components/InsumoInfo.vue";
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
    InsumosInfo,
    BottomBar,
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonIcon,
  },
  data() {
    return {
      backToDetails: false,
    };
  },
  methods: {
    goBack() {
      // Emitir evento para volver atrás o cerrar detalles según sea necesario
      if (this.backToDetails) {
        Event.emit('back-to-details');
      } 
    },
    changeDetailsState() {
      this.backToDetails = !this.backToDetails;
    },
  }
};
</script>
