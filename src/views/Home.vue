<template>
  <ion-page>
    <Sidebar :menuOpen="menuOpen" @toggle="updateMenuOpen" @close-menu-request="closeMenu" />
    <ion-header>
      <ion-toolbar>
        <div class="grid grid-cols-2 items-center mx-auto w-11/12">
          <div class="flex items-center gap-3">
            <img src="@/assets/Menu.svg" alt="Notifications" class="h-8 w-8" @click="toggleMenu">
            <img src="@/assets/AgroIcon.svg" alt="Agro Icon" class="w-16 h-16 text-end">
          </div>

          <RouterLink to="/app/notifications" class="justify-self-end text-end">
          <img src="@/assets/Notifications.svg" alt="Notifications" class="h-8 w-8">
          </RouterLink>
        </div>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <Home/>
    </ion-content>
    <BottomBar/>
  </ion-page>
</template>

<script allowJs>
import Home from '@/components/Home.vue';
import BottomBar from '@/components/Bottom.vue';
import Sidebar from '@/components/Sidebar.vue'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon } from '@ionic/vue';

export default {
  components: {
    Home,
    BottomBar,
    Sidebar,
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonIcon
  },
  data() {
    return {
      menuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    updateMenuOpen() {
      this.menuOpen = this.menuOpen ? false : true;
    },
    closeMenu() {
      // Close the menu by setting menuOpen to false
      this.menuOpen = false;
    }
  }

}
</script>
