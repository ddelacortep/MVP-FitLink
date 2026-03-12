<script setup>
defineProps({
  items: {
    type: Array, // ['Todas', 'Desayuno', ...]
    required: true
  },
  activeItem: {
    type: String,
    required: true
  },
  colorVariant: {
    type: String,
    default: 'teal', // 'teal' | 'orange'
    validator: (val) => ['teal', 'orange'].includes(val)
  }
})

defineEmits(['select'])
</script>

<template>
  <div class="filter-chips-container">
    <button 
      v-for="item in items" 
      :key="item"
      class="chip-btn"
      :class="[colorVariant, { 'is-active': activeItem === item }]"
      @click="$emit('select', item)"
    >
      {{ item }}
    </button>
  </div>
</template>

<style src="../assets/styles/FilterChips.css" scoped></style>
