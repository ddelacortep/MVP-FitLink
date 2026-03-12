<script setup>
defineProps({
  recipe: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <article class="recipe-card">
    <img :src="recipe.image" :alt="recipe.title" class="recipe-image" />
    <div class="recipe-gradient"></div>
    
    <div class="recipe-content">
      <div class="recipe-header">
        <h3 class="recipe-title">{{ recipe.title }}</h3>
        <span class="recipe-author">por {{ recipe.author }}</span>
      </div>

      <div class="recipe-stats">
        <span class="stat-item">
          <!-- Calorías Icon -->
          <svg class="stat-icon" viewBox="0 0 24 24" fill="none" stroke="var(--accent-orange)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M17.657 18.657A8 8 0 016.343 7.343S7 9 7.1 10c0-4 3-6 3-6s-1 3.5 1 4.5c2 1 4-1 4-1s-1.5 2.5-1.5 4.5c0 2 1.5 3 1.5 3z" />
          </svg>
          {{ recipe.calories }} kcal
        </span>
        
        <span class="stat-item">
          <!-- Reloj Icon -->
          <svg class="stat-icon" viewBox="0 0 24 24" fill="none" stroke="var(--accent-teal)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 6v6l4 2"></path>
          </svg>
          {{ recipe.time }} min
        </span>

        <span class="stat-item">
          <!-- Dificultad Gorro Chef simulado -->
          <svg class="stat-icon" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"></path>
            <line x1="6" y1="17" x2="18" y2="17"></line>
          </svg>
          <span :style="{ color: recipe.difficultyColor }">{{ recipe.difficulty }}</span>
        </span>
      </div>

      <div class="recipe-tags">
        <span v-for="tag in recipe.tags" :key="tag" class="recipe-tag">
          {{ tag }}
        </span>
      </div>
    </div>
  </article>
</template>

<style src="../assets/styles/RecipeCard.css" scoped></style>
