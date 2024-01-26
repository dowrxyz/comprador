<template>
    <ion-page>
      <ion-header>
        <ion-toolbar color="tertiary">
          <div class="flex items-center mx-auto w-11/12">
            <RouterLink to="/chat/licitacion/Maiz" v-if="this.$route.params.from == 1">
              <img src="@/assets/Arrow.svg" alt="Back" class="w-4 h-4" />
            </RouterLink>
            <RouterLink to="/producto/Maiz" v-if="this.$route.params.from == 2">
              <img src="@/assets/Arrow.svg" alt="Back" class="w-4 h-4" />
            </RouterLink>
            <RouterLink to="/licitacion/Maiz" v-if="this.$route.params.from == 3">
              <img src="@/assets/Arrow.svg" alt="Back" class="w-4 h-4" />
            </RouterLink>
            <h2 class="text-center mx-auto">Perfil Vendedor</h2>
          </div>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <PerfilVendedor/>
      </ion-content>
    </ion-page>
  </template>
  
  <script allowJs>
  import PerfilVendedor from "@/components/PerfilVendedor.vue";
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
      PerfilVendedor,
      IonPage,
      IonHeader,
      IonToolbar,
      IonTitle,
      IonContent,
      IonIcon,
    }
  };
  </script>
  