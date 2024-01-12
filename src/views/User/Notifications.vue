<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="tertiary">
        <div class="flex items-center mx-auto w-11/12">
          <RouterLink to="/app/home">
            <img src="@/assets/Arrow.svg" alt="Back" class="w-4 h-4" />
          </RouterLink>
          <h2 class="text-center mx-auto">Notificaciones</h2>
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
} from "@ionic/vue";

export default {
  components: {
    Notifications,
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonIcon,
  },
};
</script>
