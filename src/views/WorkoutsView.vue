<script setup>
import { useRouter } from 'vue-router'
import { useWorkoutsData } from '../composables/useWorkoutsData'

import RoutineCard from '../components/RoutineCard.vue'
import BottomNav from '../components/BottomNav.vue'

const router = useRouter()
const { routines, canCreateRoutine } = useWorkoutsData()

const createNewRoutine = () => {
  if(canCreateRoutine.value) {
    router.push('/app/rutina/nueva')
  } else {
    alert('Has alcanzado el límite de 4 rutinas. Borra o modifica una existente para continuar.')
  }
}
</script>

<template>
  <main class="workouts-view">
    <header class="workouts-header">
      <h1 class="workouts-title">Entrenamiento</h1>
    </header>

    <button class="btn-start-global" @click="router.push('/app/entrenamiento/activo')">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="5 3 19 12 5 21 5 3"></polygon>
      </svg>
      Empezar nuevo entrenamiento
    </button>

    <section class="routines-section">
      <h2 class="section-title">Rutinas</h2>
      
      <div class="actions-row">
        <button 
          class="btn-new-routine" 
          :class="{ 'is-disabled': !canCreateRoutine }"
          @click="createNewRoutine"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          Nueva rutina
        </button>
        <button class="btn-search-routine">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          Buscar
        </button>
      </div>

      <!-- Native HTML5 details/summary used for accessible accordion behavior -->
      <details class="routines-details" open>
        <summary class="routines-summary">
          Mis rutinas
          <svg class="summary-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </summary>
        
        <div class="routines-list">
          <RoutineCard 
            v-for="routine in routines" 
            :key="routine.id" 
            :routine="routine" 
          />
        </div>
      </details>
    </section>

  </main>
  
  <BottomNav />
</template>

<style src="../assets/styles/WorkoutsView.css" scoped></style>
