<script setup>
defineProps({
  iconPath: {
    type: String,
    required: true
  },
  iconColor: {
    type: String,
    default: 'var(--accent-orange)' // Trofeo naranja por defecto
  },
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="section-header">
    <svg 
      class="section-icon" 
      viewBox="0 0 24 24" 
      fill="none" 
      :stroke="iconColor" 
      stroke-width="2" 
      stroke-linecap="round" 
      stroke-linejoin="round"
    >
      <path :d="iconPath" />
    </svg>
    <h2 class="section-title">{{ title }}</h2>
  </div>
</template>

<style src="../assets/styles/SectionHeader.css" scoped></style>
