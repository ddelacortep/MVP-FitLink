import { ref } from 'vue'

export function useActiveWorkout() {
  const isWorkoutActive = ref(false)
  const startTime = ref(null)
  
  // Ejercicios activos en la sesión (empieza vacío)
  const activeExercises = ref([])
  
  // Simulador de IDs
  let nextExerciseId = 1
  let nextSetId = 1

  const startWorkout = () => {
    isWorkoutActive.value = true
    startTime.value = new Date()
    activeExercises.value = []
    addExercise() // Empieza con al menos 1 ejercicio vacío
  }

  const addExercise = () => {
    activeExercises.value.push({
      id: nextExerciseId++,
      name: `Ejercicio ${activeExercises.value.length + 1}`,
      sets: [
        { id: nextSetId++, weight: '', reps: '', completed: false }
      ]
    })
  }

  const removeExercise = (exerciseId) => {
    activeExercises.value = activeExercises.value.filter(e => e.id !== exerciseId)
  }

  const updateExerciseName = (exerciseId, newName) => {
    const exercise = activeExercises.value.find(e => e.id === exerciseId)
    if (exercise) exercise.name = newName
  }

  const addSet = (exerciseId) => {
    const exercise = activeExercises.value.find(e => e.id === exerciseId)
    if (exercise) {
      exercise.sets.push({ id: nextSetId++, weight: '', reps: '', completed: false })
    }
  }

  const removeSet = (exerciseId, setId) => {
    const exercise = activeExercises.value.find(e => e.id === exerciseId)
    if (exercise) {
      exercise.sets = exercise.sets.filter(s => s.id !== setId)
    }
  }

  const toggleSetCompletion = (exerciseId, setId) => {
    const exercise = activeExercises.value.find(e => e.id === exerciseId)
    if (exercise) {
      const set = exercise.sets.find(s => s.id === setId)
      if (set) {
        set.completed = !set.completed
      }
    }
  }

  // Permite actualizar los inputs v-model de series
  const updateSetValues = (exerciseId, setId, objProps) => {
    const exercise = activeExercises.value.find(e => e.id === exerciseId)
    if (exercise) {
      const set = exercise.sets.find(s => s.id === setId)
      if (set) {
        Object.assign(set, objProps)
      }
    }
  }

  const finishWorkout = () => {
    isWorkoutActive.value = false
    startTime.value = null
    activeExercises.value = []
  }

  return {
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
  }
}
