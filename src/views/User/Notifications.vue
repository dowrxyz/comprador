<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="tertiary">
        <div class="flex items-center mx-auto w-11/12 pt-3">
          <RouterLink to="/app/home">
            <img src="@/assets/Arrow.svg" alt="Back" class="w-4 h-4" />
          </RouterLink>
          <h2 class="text-center mx-auto">Notificaciones</h2>
        </div>
        <div
          class="mx-auto w-full text-center mt-3 mr-3 inline-flex justify-center gap-1"
        >
          <ion-segment value="buttons" class="tabs">
            <ion-segment-button value="all" class="buttonmain">
              <ion-label>Todos</ion-label>
            </ion-segment-button>
            <ion-segment-button value="maiz" class="button">
              <ion-label>Maiz</ion-label>
            </ion-segment-button>
            <ion-segment-button value="cacao" class="button">
              <ion-label>Cacao</ion-label>
            </ion-segment-button>
            <ion-segment-button value="tomate" class="button">
              <ion-label>Tomate</ion-label>
            </ion-segment-button>
            <ion-segment-button value="maracuya" class="button">
              <ion-label>Maracuya</ion-label>
            </ion-segment-button>
            <ion-segment-button value="arroz" class="button">
              <ion-label>Arroz</ion-label>
            </ion-segment-button>
            <ion-segment-button value="polvillo" class="button">
              <ion-label>Pólvillo</ion-label>
            </ion-segment-button>
          </ion-segment>
        </div>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <Notifications />
    </ion-content>
  </ion-page>
</template>

<script allowJs>
import Notifications from "@/components/Notifications.vue";
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
    Notifications,
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
};
</script>

<style scoped>
.buttonmain {
  width: 20%;
  font-size: 10px;
  padding: 2px;
  margin-left: 260px;
}
.button {
  width: 20%;
  font-size: 10px;
  padding: 2px;
}

.tabs {
  overflow-x: scroll;
}

@media (min-width: 768px) {
  .tabs {
    width: 50%;
    overflow: hidden;
  }
  .button {
    width: 100%;
    font-size: 10px;
    padding: 2px;
  }

  .buttonmain {
    width: 100%;
    font-size: 10px;
    padding: 2px;
    margin-left: 0px;
  }
}
</style>
