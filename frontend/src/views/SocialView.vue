<script setup>
import { ref, computed } from 'vue'
import { useGroupsData } from '../composables/useGroupsData'

import SearchInput from '../components/SearchInput.vue'
import GroupCard from '../components/GroupCard.vue'
import CreateGroupModal from '../components/CreateGroupModal.vue'
import BottomNav from '../components/BottomNav.vue'

const { groups, addGroup } = useGroupsData()

const searchQuery = ref('')
const isModalOpen = ref(false)

// Búsqueda en tiempo real
const filteredGroups = computed(() => {
  if (!searchQuery.value) return groups.value
  
  const query = searchQuery.value.toLowerCase()
  return groups.value.filter(group => 
    group.name.toLowerCase().includes(query) || 
    group.lastMessage.toLowerCase().includes(query)
  )
})

const handleCreateGroup = (groupData) => {
  addGroup(groupData)
  isModalOpen.value = false
}
</script>

<template>
  <main class="social-view">
    <header class="social-header">
      <h1 class="social-title">Grupos</h1>
      <button class="btn-create" @click="isModalOpen = true">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
        Crear grupo
      </button>
    </header>

    <div class="search-container">
      <SearchInput 
        v-model="searchQuery" 
        placeholder="Buscar grupos..."
      />
    </div>

    <section class="groups-list">
      <TransitionGroup name="list">
        <GroupCard 
          v-for="group in filteredGroups" 
          :key="group.id" 
          :group="group"
        />
      </TransitionGroup>
      
      <p v-if="filteredGroups.length === 0" style="color: var(--text-secondary); text-align: center; margin-top: var(--space-4);">
        No se encontraron grupos
      </p>
    </section>
  </main>

  <BottomNav />

  <!-- Modal para crear grupo -->
  <Transition name="fade">
    <CreateGroupModal 
      v-if="isModalOpen" 
      @close="isModalOpen = false"
      @create="handleCreateGroup"
    />
  </Transition>
</template>

<style src="../assets/styles/SocialView.css" scoped></style>
<style>
/* Estilos globales para la transición del modal */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
