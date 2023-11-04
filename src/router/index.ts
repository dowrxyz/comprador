import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/signin'
  },
  {
    path: '/signin',
    component: () => import('@/views/Session/login.vue')
  },
  {
    path: '/signup',
    component: () => import('@/views/Session/register.vue')
  },
  {
    path: '/password',
    component: () => import('@/views/Session/password.vue')
  },
  {
    path: '/chat/deal/:name',
    name: 'chatDeals',
    component: () => import('@/views/User/Deal.vue')
  },
  {
    path: '/licitacion/:name',
    component: () => import('@/views/User/LicitacionRecibida.vue')
  },
  {
    path: '/chat/licitacion/:name',
    component: () => import('@/views/User/ChatLicitacion.vue')
  },
  {
    path: '/orders',
    component: () => import('@/views/User/Orders.vue')
  },
  {
    path: '/profile',
    component: () => import('@/views/User/Profile.vue')
  },
  {
    path: '/status',
    component: () => import('@/views/User/OrderStatus.vue')
  },
      {
        path: '/app/home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: '/app/insumos',
        component: () => import('@/views/User/Insumos.vue')
      },
      {
        path: '/app/tutorials',
        component: () => import('@/views/User/Tutorials.vue')
      },
      {
        path: '/app/market',
        component: () => import('@/views/User/MarketDeals.vue')
      },
      {
        path: '/app/product/:name',
        name: 'product',
        component: () => import('@/views/User/Product.vue')
      },
      {
        path: '/app/add/product/',
        component: () => import('@/views/User/AddProduct.vue')
      },
      {
        path: '/app/dashboard',
        component: () => import('@/views/User/Dashboard.vue')
      },
      {
        path: '/app/multiusuarios',
        component: () => import('@/views/User/Multi.vue')
      },
      {
        path: '/app/multiusuarios/crear',
        component: () => import('@/views/User/Multicrear.vue')
      },
      {
        path: '/app/multiusuarios/editar',
        component: () => import('@/views/User/Multieditar.vue')
      },
      {
        path: '/app/manage/:name',
        component: () => import('@/views/User/Manage.vue')
      },
      {
        path: '/app/licitar',
        component: () => import('@/views/User/Licitaciones.vue')
      },
      {
        path: '/app/licitar/:name',
        component: () => import('@/views/User/Licitar.vue')
      },
      {
        path: '/app/licitacion/editar/:name',
        component: () => import('@/views/User/LicitacionEditar.vue')
      },
      {
        path: '/app/add/product/interested',
        component: () => import('@/views/User/InterestedProduct.vue')
      },
      {
        path: '/app/licitaciones',
        component: () => import('@/views/User/MisLicitaciones.vue')
      },
      {
        path: '/app/notifications',
        component: () => import('@/views/User/Notifications.vue')
      }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
