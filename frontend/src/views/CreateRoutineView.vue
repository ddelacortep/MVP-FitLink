<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useWorkoutsData } from '../composables/useWorkoutsData'

const router = useRouter()
const { addRoutine, canCreateRoutine } = useWorkoutsData()

// Redirigir si el usuario somehow llegó a esta URL manually pero el limitador no lo permite
if (!canCreateRoutine.value) {
  router.push('/entrenamientos')
}

const title = ref('')

const exercises = ref([
  // Array inicial con 1 ejercicio y su primera serie preparatoria
  { 
    id: Date.now(), 
    name: '', 
    setsArray: [ { reps: '' } ] 
  }
])

const canSave = computed(() => {
  return title.value.trim() !== '' && 
         exercises.value.length > 0 && 
         exercises.value.every(e => e.name.trim() !== '' && e.setsArray.length > 0 && e.setsArray.every(s => s.reps.trim() !== ''))
})

const addExerciseBlock = () => {
  exercises.value.push({
    id: Date.now() + Math.random(),
    name: '',
    setsArray: [ { reps: '' } ]
  })
}

const addSetToExercise = (exerciseId) => {
  const exercise = exercises.value.find(e => e.id === exerciseId)
  if (exercise) {
    exercise.setsArray.push({ reps: '' })
  }
}

const removeSetFromExercise = (exerciseId, setIndex) => {
  const exercise = exercises.value.find(e => e.id === exerciseId)
  if (exercise) {
    exercise.setsArray.splice(setIndex, 1)
  }
}

const removeExerciseBlock = (id) => {
  exercises.value = exercises.value.filter(e => e.id !== id)
}

const handleSave = () => {
  if (!canSave.value) return
  
  const success = addRoutine({
    title: title.value,
    exercises: exercises.value.map(e => ({
      name: e.name,
      sets: e.setsArray.length,
      // Como UX mock para el summary del RoutineCard, asumimos la repetición del primer set o un rango
      reps: e.setsArray[0].reps || '10'
    }))
  })

  if(success) {
    router.push('/entrenamientos')
  }
}

const handleCancel = () => {
  router.push('/entrenamientos')
}
</script>

<template>
  <main class="create-routine-view">
    <header class="create-header">
      <button class="btn-cancel" @click="handleCancel">
        <svg fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" width="20" height="20">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
        <span>Atrás</span>
      </button>

      <h1 class="create-title">Nueva Rutina</h1>
      <div style="width: 50px"></div> <!-- Spacer visible trick para centrar el titulo -->
    </header>

    <input 
      type="text" 
      class="input-routine-title" 
      v-model="title" 
      placeholder="Título de la rutina..."
    />

    <div class="builder-list">
      <article v-for="(block, index) in exercises" :key="block.id" class="builder-card">
        <header class="builder-header">
          <input 
            type="text" 
            class="builder-exercise-name" 
            v-model="block.name" 
            :placeholder="`Ejercicio ${index + 1} (ej: Dominadas)`"
          />
          <button class="btn-remove-block" aria-label="Borrar ejercicio" @click="removeExerciseBlock(block.id)" v-if="exercises.length > 1">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </header>

        <div class="sets-builder-grid">
          <div class="set-row header" v-if="block.setsArray.length > 0">
            <span class="set-col-title">Serie</span>
            <span class="set-col-title">Reps Estimadas</span>
            <span class="set-col-title"></span>
          </div>

          <div v-for="(set, setIndex) in block.setsArray" :key="setIndex" class="set-row">
            <div class="set-number-tag">{{ setIndex + 1 }}</div>
            <input type="text" class="set-rep-input" v-model="set.reps" placeholder="ej: 10-12" />
            <button class="btn-remove-set" aria-label="Borrar serie" @click="removeSetFromExercise(block.id, setIndex)" v-if="block.setsArray.length > 1">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
            <div v-else style="width: 24px;"></div>
          </div>
        </div>

        <button class="btn-add-set-link" @click="addSetToExercise(block.id)">
          + Añadir serie
        </button>
      </article>
    </div>

    <button class="btn-add-block" @click="addExerciseBlock">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
      </svg>
      Añadir Ejercicio
    </button>

    <button 
      class="btn-save-routine" 
      :disabled="!canSave"
      @click="handleSave"
    >
      Guardar Rutina
    </button>
  </main>
</template>

<style src="../assets/styles/CreateRoutineView.css" scoped></style>
