<script setup>
import { computed } from 'vue'

const props = defineProps({
  iconPath: {
    type: String,
    default: ''
  },
  customIcon: {
    type: String,
    default: ''
  },
  iconBg: {
    type: String,
    default: 'var(--accent-orange-bg)'
  },
  iconColor: {
    type: String,
    default: 'var(--accent-orange)'
  },
  label: {
    type: String,
    required: true
  },
  value: {
    type: [String, Number],
    required: true
  },
  unit: {
    type: String,
    default: ''
  },
  trend: {
    type: Object,
    default: null // { direction: 'up' | 'down', percent: '12%', text: 'vs mes anterior' }
  }
})

const trendClass = computed(() => {
  if (!props.trend) return ''
  return props.trend.direction === 'up' ? 'is-up' : 'is-down'
})

const trendArrowPath = computed(() => {
  if (!props.trend) return ''
  return props.trend.direction === 'up' 
    ? 'M12 19V5M5 12l7-7 7 7'  // Arrow up
    : 'M12 5v14M19 12l-7 7-7-7' // Arrow down
})
</script>

<template>
  <article class="stat-card">
    <header class="stat-header">
      <div class="stat-icon-wrapper" :style="{ backgroundColor: iconBg, color: iconColor }">
        <template v-if="customIcon">
          <div v-html="customIcon" style="display: flex; align-items: center; justify-content: center; width: 100%; height: 100%;"></div>
        </template>
        <template v-else>
          <svg 
            class="stat-icon" 
            viewBox="0 0 24 24" 
            fill="none" 
            :stroke="iconColor" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round"
          >
            <path :d="iconPath" />
          </svg>
        </template>
      </div>
      <span class="stat-label">{{ label }}</span>
    </header>

    <div class="stat-body">
      <div class="stat-value-group">
        <span class="stat-value">{{ value }}</span>
        <span v-if="unit" class="stat-unit">{{ unit }}</span>
      </div>

      <div v-if="trend" class="stat-trend" :class="trendClass">
        <svg 
          class="trend-icon" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          stroke-width="2" 
          stroke-linecap="round" 
          stroke-linejoin="round"
        >
          <path :d="trendArrowPath" />
        </svg>
        <span>{{ trend.percent }} {{ trend.text }}</span>
      </div>
    </div>
  </article>
</template>

<style src="../assets/styles/StatCard.css" scoped></style>
