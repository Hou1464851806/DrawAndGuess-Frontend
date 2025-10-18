import { createRouter, createWebHistory } from 'vue-router'

import BeginView from '@/views/BeginView.vue'
import RoomsView from '@/views/RoomsView.vue'
import LibraryView from '@/views/LibraryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Begin',
      component: BeginView,
    },
    {
      path: '/rooms',
      name: 'Rooms',
      component: RoomsView,
    },
    {
      path: '/library',
      name: 'Library',
      component: LibraryView,
    },
  ],
})

export default router
