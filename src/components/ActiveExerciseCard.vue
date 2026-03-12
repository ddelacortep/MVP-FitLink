<script setup>
const props = defineProps({
  exercise: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['add-set', 'remove-exercise', 'update-name', 'toggle-completion', 'update-set'])

const handleNameChange = (e) => {
  emit('update-name', props.exercise.id, e.target.value)
}

const handleToggle = (setId) => {
  emit('toggle-completion', props.exercise.id, setId)
}

const handleInput = (setId, field, value) => {
  emit('update-set', props.exercise.id, setId, { [field]: value })
}
</script>

<template>
  <article class="active-exercise-card">
    <header class="exercise-header">
      <input 
        type="text" 
        class="exercise-name-input" 
        :value="exercise.name" 
        @input="handleNameChange"
        placeholder="Nombre del Ejercicio..."
      />
      <button class="btn-icon" aria-label="Eliminar ejercicio" @click="$emit('remove-exercise', exercise.id)">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        </svg>
      </button>
    </header>

    <div class="sets-grid">
      <!-- Headers -->
      <div class="grid-row grid-header">
        <span>Set</span>
        <span>kg</span>
        <span>Reps</span>
        <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
      </div>

      <!-- Iteration of Sets -->
      <div 
        v-for="(set, index) in exercise.sets" 
        :key="set.id" 
        class="grid-row"
        :class="{ 'is-completed': set.completed }"
      >
        <div class="set-number">{{ index + 1 }}</div>
        
        <input 
          type="number" 
          class="set-input" 
          placeholder="-" 
          :value="set.weight" 
          @input="e => handleInput(set.id, 'weight', e.target.value)"
          :disabled="set.completed"
        />
        
        <input 
          type="number" 
          class="set-input" 
          placeholder="-" 
          :value="set.reps" 
          @input="e => handleInput(set.id, 'reps', e.target.value)"
          :disabled="set.completed"
        />

        <button 
          class="btn-check" 
          :class="{ 'is-completed': set.completed }"
          @click="handleToggle(set.id)"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </button>
      </div>
    </div>

    <!-- Add set action -->
    <button class="btn-add-set" @click="$emit('add-set', exercise.id)">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
      </svg>
      Añadir serie
    </button>

  </article>
</template>

<style src="../assets/styles/ActiveExerciseCard.css" scoped></style>
