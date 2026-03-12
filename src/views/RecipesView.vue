<script setup>
import { ref, computed } from 'vue'
import { useRecipesData } from '../composables/useRecipesData'

import SearchInput from '../components/SearchInput.vue'
import FilterChips from '../components/FilterChips.vue'
import RecipeCard from '../components/RecipeCard.vue'
import BottomNav from '../components/BottomNav.vue'

const { 
  mealCategories, 
  goalCategories, 
  activeMeal, 
  activeGoal, 
  recipes, 
  setMealFilter, 
  setGoalFilter 
} = useRecipesData()

const searchQuery = ref('')

const filteredRecipes = computed(() => {
  if (!searchQuery.value) return recipes.value
  
  const query = searchQuery.value.toLowerCase()
  return recipes.value.filter(recipe => 
    recipe.title.toLowerCase().includes(query) || 
    recipe.author.toLowerCase().includes(query)
  )
})
</script>

<template>
  <main class="recipes-view">
    <header class="recipes-header">
      <h1 class="recipes-title">Recetario</h1>
      <button class="btn-create">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
        Nueva
      </button>
    </header>

    <div class="search-row">
      <SearchInput 
        v-model="searchQuery" 
        placeholder="Buscar recetas..."
      />
      <button class="btn-filter" aria-label="Ajustes de filtro">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
        </svg>
      </button>
    </div>

    <!-- Filtros apilados verticalmente, escrolleables horizontalmente -->
    <section class="filters-section">
      <!-- Tipos de comida: Usa la paleta Teal -->
      <FilterChips 
        :items="mealCategories"
        :activeItem="activeMeal"
        colorVariant="teal"
        @select="setMealFilter"
      />

      <!-- Objetivos: Usa la paleta Naranja -->
      <div class="filter-group">
        <div class="filter-label">
          <svg class="filter-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="12" r="6"></circle>
            <circle cx="12" cy="12" r="2"></circle>
          </svg>
          Objetivo
        </div>
        <FilterChips 
          :items="goalCategories"
          :activeItem="activeGoal"
          colorVariant="orange"
          @select="setGoalFilter"
        />
      </div>
    </section>

    <!-- Lista de recetas -->
    <section class="recipes-list">
      <RecipeCard 
        v-for="recipe in filteredRecipes" 
        :key="recipe.id" 
        :recipe="recipe"
      />
      
      <p v-if="filteredRecipes.length === 0" style="color: var(--text-secondary); text-align: center; margin-top: var(--space-4);">
        No se encontraron recetas
      </p>
    </section>
  </main>

  <BottomNav />
</template>

<style src="../assets/styles/RecipesView.css" scoped></style>
