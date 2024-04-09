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
        <div 
          class="mx-auto w-full text-center gap-1">
          <ion-segment value="buttons" class="tabs">
            <ion-segment-button value="1" class="button" @click="selectStatus(1)">
              <ion-label>Abiertas</ion-label>
            </ion-segment-button>
            <ion-segment-button value="2" class="button" @click="selectStatus(2)">
              <ion-label>Cerradas</ion-label>
            </ion-segment-button>
            <ion-segment-button value="3" class="button" @click="selectStatus(3)">
              <ion-label>Caducadas</ion-label>
            </ion-segment-button>
            <ion-segment-button value="4" class="button" @click="selectStatus(4)">
              <ion-label>Cumplidas</ion-label>
            </ion-segment-button>
          </ion-segment>
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
import MisLicitaciones from "@/components/MisLicitaciones.vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonIcon,
  IonSegment,
  IonLabel,
  IonSegmentButton,
} from "@ionic/vue";

export default {
  components: {
    MisLicitaciones,
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonSegment,
    IonLabel,
    IonSegmentButton,
    IonContent,
    IonIcon,
  },
  data(){
    return{
      status: 1
    }
  },
  methods:{
    selectStatus(x){
      this.status = x;
    }
  }
};
</script>


<style scoped>
.button {
  width: 100%;
  font-size: 10px;
}
</style>
