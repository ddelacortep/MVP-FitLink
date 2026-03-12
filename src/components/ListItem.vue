<script setup>
defineProps({
  item: {
    type: Object,
    required: true
  },
  // 'training' o 'friend'
  variant: {
    type: String,
    default: 'training'
  }
})
</script>

<template>
  <div class="list-item">
    <!-- Lado Izquierdo: Icono/Avatar y Textos -->
    <div class="item-left">
      <img 
        v-if="variant === 'friend' && item.image" 
        :src="item.image" 
        :alt="item.name" 
        class="item-avatar"
      />
      
      <div class="item-content">
        <span class="item-title">{{ variant === 'friend' ? item.name : item.title }}</span>
        <span class="item-subtitle">{{ item.subtitle }}</span>
      </div>
    </div>

    <!-- Lado Derecho: Valores y Acciones -->
    <div class="item-right">
      <!-- Entrenamiento: highlight naranja + chevron -->
      <template v-if="variant === 'training'">
        <span class="item-highlight">{{ item.highlight }}</span>
        <svg class="chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </template>

      <!-- Amigo: Badge gris oscuro text-primary -->
      <template v-else-if="variant === 'friend'">
        <div class="item-badge">
          {{ item.badge }}
        </div>
      </template>
    </div>
  </div>
</template>

<style src="../assets/styles/ListItem.css" scoped></style>
