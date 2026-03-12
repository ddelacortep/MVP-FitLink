<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  routine: {
    type: Object,
    required: true
  }
})

// Max exercises to show before collapsing
const MAX_VISIBLE = 3

const visibleExercises = computed(() => {
  return props.routine.exercises.slice(0, MAX_VISIBLE)
})

const hiddenCount = computed(() => {
  return Math.max(0, props.routine.exercises.length - MAX_VISIBLE)
})

const router = useRouter()
const startRoutine = () => {
  // Aquí podríamos en un futuro cargar la rutina específica en useActiveWorkout()
  // por ahora simplemente navegamos a la vista
  router.push('/entrenamiento/activo')
}
</script>

<template>
  <article class="routine-card">
    <header class="routine-header">
      <div class="routine-title-container">
        <h3 class="routine-title">{{ routine.title }}</h3>
        <span class="routine-duration">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 6v6l4 2"></path>
          </svg>
          {{ routine.duration }}
        </span>
      </div>
    </header>

    <div class="exercise-list">
      <div v-for="(exercise, index) in visibleExercises" :key="index" class="exercise-item">
        <span class="exercise-name">• {{ exercise.name }}</span>
        <span class="exercise-sets">{{ exercise.sets }}x{{ exercise.reps }}</span>
      </div>
      
      <div v-if="hiddenCount > 0" class="more-exercises">
        + {{ hiddenCount }} ejercicios más...
      </div>
    </div>

    <button class="btn-start-routine" @click="startRoutine">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="5 3 19 12 5 21 5 3"></polygon>
      </svg>
      Empezar Rutina
    </button>
  </article>
</template>

<style src="../assets/styles/RoutineCard.css" scoped></style>
