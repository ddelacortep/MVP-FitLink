<script setup>
import { ref } from 'vue'

const emit = defineEmits(['close', 'create'])

const groupName = ref('')
const groupDescription = ref('')

const handleCreate = () => {
  if (!groupName.value.trim()) return
  
  emit('create', {
    name: groupName.value,
    description: groupDescription.value
  })
  
  groupName.value = ''
  groupDescription.value = ''
}
</script>

<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-content">
      <header class="modal-header">
        <h2 class="modal-title">Crear nuevo grupo</h2>
      </header>
      
      <div class="modal-body">
        <div class="photo-upload">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="17 8 12 3 7 8"></polyline>
            <line x1="12" y1="3" x2="12" y2="15"></line>
          </svg>
          <span>Seleccionar foto de perfil del grupo</span>
        </div>
        
        <div class="form-group">
          <label class="form-label" for="groupName">Nombre del grupo *</label>
          <input 
            id="groupName"
            v-model="groupName"
            type="text" 
            class="form-input" 
            placeholder="Ej. Crossfit Team"
            @keyup.enter="handleCreate"
          >
        </div>
        
        <div class="form-group">
          <label class="form-label" for="groupDesc">Descripción</label>
          <textarea 
            id="groupDesc"
            v-model="groupDescription"
            class="form-textarea" 
            placeholder="¿De qué trata este grupo?"
          ></textarea>
        </div>
      </div>
      
      <footer class="modal-footer">
        <button class="btn btn-cancel" @click="$emit('close')">Cancelar</button>
        <button 
          class="btn btn-submit" 
          :disabled="!groupName.trim()"
          @click="handleCreate"
        >
          Crear
        </button>
      </footer>
    </div>
  </div>
</template>

<style src="../assets/styles/CreateGroupModal.css" scoped></style>
