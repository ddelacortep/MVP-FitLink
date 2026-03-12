<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useActiveWorkout } from '../composables/useActiveWorkout'
import ActiveExerciseCard from '../components/ActiveExerciseCard.vue'

const router = useRouter()
const {
  isWorkoutActive,
  activeExercises,
  startWorkout,
  addExercise,
  removeExercise,
  updateExerciseName,
  addSet,
  removeSet,
  toggleSetCompletion,
  updateSetValues,
  finishWorkout
} = useActiveWorkout()

// Cronómetro muy básico simulado
const elapsedSeconds = ref(0)
let timerInterval = null

const formatTime = (totalSeconds) => {
  const h = Math.floor(totalSeconds / 3600)
  const m = Math.floor((totalSeconds % 3600) / 60)
  const s = totalSeconds % 60
  
  if (h > 0) {
    return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
  }
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
}

onMounted(() => {
  // Asegurarnos de que inicie si se llega directamente a esta URL
  if (!isWorkoutActive.value) {
    startWorkout()
  }
  
  timerInterval = setInterval(() => {
    elapsedSeconds.value++
  }, 1000)
})

onUnmounted(() => {
  clearInterval(timerInterval)
})

const handleFinish = () => {
  finishWorkout()
  router.push('/app/entrenamientos')
}

const handleCancel = () => {
  if(confirm('¿Estás seguro de cancelar este entrenamiento? Se perderán los datos.')){
    finishWorkout()
    router.push('/app/entrenamientos')
  }
}
</script>

<template>
  <main class="active-workout-view">
    <!-- Header Fijo (Sustituye a BottomNav en esta vista enfocada) -->
    <header class="workout-header-bar">
      <button class="btn-cancel" @click="handleCancel">
        <svg fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" width="20" height="20">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
        <span>Salir</span>
      </button>

      <h1 class="workout-title-main">Entrenando</h1>
      
      <div class="workout-timer-placeholder">
        {{ formatTime(elapsedSeconds) }}
      </div>
    </header>

    <div class="workout-body">
      <!-- Mapeo Reactivo de Ejercicios -->
      <ActiveExerciseCard 
        v-for="exercise in activeExercises" 
        :key="exercise.id"
        :exercise="exercise"
        @add-set="addSet"
        @remove-exercise="removeExercise"
        @update-name="updateExerciseName"
        @toggle-completion="toggleSetCompletion"
        @update-set="updateSetValues"
      />

      <button class="btn-add-exercise" @click="addExercise">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
        Añadir Ejercicio
      </button>

      <button class="btn-finish-workout" @click="handleFinish">
        Terminar Entrenamiento
      </button>
    </div>
  </main>
</template>

<style src="../assets/styles/ActiveWorkoutView.css" scoped></style>

<style>
/* Ocultar el nav global si estamos en esta ruta, una aproximación si el BottomNav no estuviera condicionado en App.vue. 
   Pero dado que BottomNav se renderiza en las vistas hijas (está puesto dentro de cada View manualmente en nuestro MVP),  
   al no incluir BottomNav.vue en el template de ActiveWorkoutView, logramos el efecto inmersivo automáticamente sin CSS hack. */
</style>
