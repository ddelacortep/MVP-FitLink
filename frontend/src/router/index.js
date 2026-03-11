import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SearchView from '../views/SearchView.vue'
import SocialView from '../views/SocialView.vue'
import RecipesView from '../views/RecipesView.vue'
import ProfileView from '../views/ProfileView.vue'
import WorkoutsView from '../views/WorkoutsView.vue'
import ActiveWorkoutView from '../views/ActiveWorkoutView.vue'
import CreateRoutineView from '../views/CreateRoutineView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/buscar',
      name: 'search',
      component: SearchView,
    },
    {
      path: '/social',
      name: 'social',
      component: SocialView,
    },
    {
      path: '/recetas',
      name: 'recipes',
      component: RecipesView,
    },
    {
      path: '/perfil',
      name: 'profile',
      component: ProfileView,
    },
    {
      path: '/entrenamientos',
      name: 'workouts',
      component: WorkoutsView,
    },
    {
      path: '/entrenamiento/activo',
      name: 'activeWorkout',
      component: ActiveWorkoutView,
    },
    {
      path: '/rutina/nueva',
      name: 'createRoutine',
      component: CreateRoutineView,
    },
  ],
})

export default router
