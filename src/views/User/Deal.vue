<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <div class="flex items-center mx-auto w-11/12">
          <RouterLink :to="{ name: 'product', params: { name: Producto } }">
            <img src="@/assets/Arrow.svg" alt="Back" class="w-4 h-4" />
          </RouterLink>
          <h2 class="text-center mx-auto">Oferta {{ Producto }}</h2>
        </div>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <Deal :Item="Producto" />
    </ion-content>
  </ion-page>
</template>

<script allowJs>
import Deal from "@/components/Deal.vue";
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
    Deal,
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonIcon,
  },
  data() {
    return {
      Producto: this.$route.params.name,
    };
  },
};
</script>
