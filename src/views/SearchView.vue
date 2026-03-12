<script setup>
import { ref, computed } from 'vue'
import { useUsersData } from '../composables/useUsersData'

import SearchInput from '../components/SearchInput.vue'
import UserCard from '../components/UserCard.vue'
import BottomNav from '../components/BottomNav.vue'

const { suggestedUsers, toggleFollow } = useUsersData()

const searchQuery = ref('')

// Filter logic (even though the image just shows "Sugeridos para ti")
// This is a nice to have since we added a search input
const filteredUsers = computed(() => {
  if (!searchQuery.value) return suggestedUsers.value
  
  const query = searchQuery.value.toLowerCase()
  return suggestedUsers.value.filter(user => 
    user.name.toLowerCase().includes(query) || 
    user.handle.toLowerCase().includes(query)
  )
})
</script>

<template>
  <main class="search-view">
    <header class="search-header">
      <h1 class="search-title">Buscar</h1>
    </header>

    <SearchInput 
      v-model="searchQuery" 
    />

    <section class="suggested-section">
      <h2 class="section-title">
        {{ searchQuery ? 'Resultados' : 'Sugeridos para ti' }}
      </h2>
      
      <div class="users-list">
        <UserCard 
          v-for="user in filteredUsers" 
          :key="user.id" 
          :user="user"
          @toggle-follow="toggleFollow"
        />
        
        <p v-if="filteredUsers.length === 0" style="color: var(--text-secondary); text-align: center; margin-top: var(--space-4);">
          No se encontraron usuarios
        </p>
      </div>
    </section>
  </main>

  <BottomNav />
</template>

<style src="../assets/styles/SearchView.css" scoped></style>
