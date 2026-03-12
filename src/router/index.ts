import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '../views/LandingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingView,
    },
    {
      path: '/app',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/app/buscar',
      name: 'search',
      component: () => import('../views/SearchView.vue'),
    },
    {
      path: '/app/social',
      name: 'social',
      component: () => import('../views/SocialView.vue'),
    },
    {
      path: '/app/recetas',
      name: 'recipes',
      component: () => import('../views/RecipesView.vue'),
    },
    {
      path: '/app/perfil',
      name: 'profile',
      component: () => import('../views/ProfileView.vue'),
    },
    {
      path: '/app/entrenamientos',
      name: 'workouts',
      component: () => import('../views/WorkoutsView.vue'),
    },
    {
      path: '/app/entrenamiento/activo',
      name: 'activeWorkout',
      component: () => import('../views/ActiveWorkoutView.vue'),
    },
    {
      path: '/app/rutina/nueva',
      name: 'createRoutine',
      component: () => import('../views/CreateRoutineView.vue'),
    },
  ],
})

export default router
