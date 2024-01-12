<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="tertiary">
        <div class="grid grid-cols-3 items-center mx-auto w-11/12">
          <RouterLink to="/app/home">
            <img src="@/assets/Arrow.svg" alt="Back" class="w-4 h-4" />
          </RouterLink>
          <h2 class="text-center">Tutoriales</h2>
        </div>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <Tutorials />
    </ion-content>
    <BottomBar/>
  </ion-page>
</template>

<script allowJs>
import Tutorials from "@/components/Tutorials.vue";
import BottomBar from '@/components/Bottom.vue';
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
    Tutorials,
    BottomBar,
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonIcon,
  },
};
</script>
