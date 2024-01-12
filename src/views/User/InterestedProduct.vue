<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="tertiary">
        <div class="flex items-center mx-auto w-11/12">
          <a :href="'/' + from">
            <img src="@/assets/Arrow.svg" alt="Back" class="w-4 h-4" />
          </a>
          <h2 class="text-center mx-auto">Agregar Productos de interés</h2>
        </div>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <AddProduct />
    </ion-content>
  </ion-page>
</template>

<script allowJs>
import AddProduct from "@/components/InterestedProduct.vue";
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
    AddProduct,
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonIcon,
  },
  data() {
    return {
      from: null,
    };
  },
  created: function() {
    this.from = this.$route.params.from;
  },
};
</script>
