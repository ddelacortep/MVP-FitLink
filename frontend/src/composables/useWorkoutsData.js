import { ref, computed } from 'vue'

export function useWorkoutsData() {
  const routines = ref([
    {
      id: 1,
      title: 'Día 1: Empuje (Pecho, Hombro, Tríceps)',
      duration: '60 min',
      exercises: [
        { name: 'Press de Banca Plano', sets: 4, reps: 10 },
        { name: 'Press Inclinado con Mancuernas', sets: 3, reps: 12 },
        { name: 'Elevaciones Laterales', sets: 4, reps: 15 },
        { name: 'Extensión de Tríceps Polea', sets: 3, reps: 12 },
        { name: 'Fondos en Paralelas', sets: 3, reps: 'Fallo' }
      ]
    },
    {
      id: 2,
      title: 'Día 2: Tirón (Espalda, Bíceps)',
      duration: '55 min',
      exercises: [
        { name: 'Dominadas', sets: 4, reps: 'Fallo' },
        { name: 'Remo con Barra', sets: 4, reps: 10 },
        { name: 'Jalón al Pecho', sets: 3, reps: 12 },
        { name: 'Curl de Bíceps con Barra', sets: 3, reps: 12 }
      ]
    },
    {
      id: 3,
      title: 'Full Body HIIT',
      duration: '30 min',
      exercises: [
        { name: 'Burpees', sets: 4, reps: 20 },
        { name: 'Kettlebell Swings', sets: 4, reps: 20 },
        { name: 'Box Jumps', sets: 4, reps: 15 }
      ]
    }
  ])

  // Lógica derivada
  const canCreateRoutine = computed(() => routines.value.length < 4)

  const addRoutine = (newRoutineContext) => {
    if (!canCreateRoutine.value) return false

    const newId = routines.value.length > 0 ? Math.max(...routines.value.map(r => r.id)) + 1 : 1
    
    // Calculo muy estúpido para el mock MVP de la duración: 3 mins por ejercicio aprox
    const estDuration = `${newRoutineContext.exercises.length * 3 + 10} min`

    const newRoutine = {
      id: newId,
      title: newRoutineContext.title,
      duration: estDuration,
      exercises: newRoutineContext.exercises
    }

    routines.value.push(newRoutine)
    return true
  }

  return {
    routines,
    canCreateRoutine,
    addRoutine
  }
}
