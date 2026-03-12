<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  data: {
    type: Array, // [45, 60, 30, 75, 50, 90, 40]
    required: true
  },
  labels: {
    type: Array, // ['Lun', 'Mar', ...]
    default: () => []
  },
  color: {
    type: String,
    default: 'var(--accent-teal)'
  },
  showGrid: {
    type: Boolean,
    default: false
  },
  showArea: {
    type: Boolean,
    default: false
  }
})

// Max value for Y scale (100)
const maxVal = 100

// Generate smooth bezier curve path
const pathData = computed(() => {
  if (!props.data || props.data.length === 0) return ''
  
  const width = 100 // Relative SVG width
  const height = 100 // Relative SVG height
  const pts = props.data.length
  
  const stepX = width / (pts - 1)
  
  let d = `M 0,${100 - (props.data[0] / maxVal) * 100} `
  
  for (let i = 1; i < pts; i++) {
    const prevX = (i - 1) * stepX
    const prevY = 100 - (props.data[i - 1] / maxVal) * 100
    const currX = i * stepX
    const currY = 100 - (props.data[i] / maxVal) * 100
    
    // Smooth curve using cubic bezier (control points at 1/3 and 2/3 between points horizontally)
    const cp1x = prevX + (currX - prevX) * 0.4
    const cp2x = currX - (currX - prevX) * 0.4
    
    d += `C ${cp1x},${prevY} ${cp2x},${currY} ${currX},${currY} `
  }
  
  return d
})

// For the filled area under the curve
const areaPathData = computed(() => {
  const d = pathData.value
  if (!d) return ''
  return `${d} L 100,100 L 0,100 Z`
})
</script>

<template>
  <div class="chart-container">
    <header class="chart-header">
      <h3 class="chart-title">{{ title }}</h3>
    </header>

    <div class="chart-wrapper">
      <!-- Y Axis -->
      <div class="y-axis" v-if="showGrid">
        <span class="y-axis-label">100</span>
        <span class="y-axis-label">75</span>
        <span class="y-axis-label">50</span>
        <span class="y-axis-label">25</span>
        <span class="y-axis-label">0</span>
      </div>

      <!-- Chart SVG Area -->
      <div style="position: absolute; left: 32px; right: 0; top: 6px; bottom: 24px;">
        <svg class="chart-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs v-if="showArea">
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" :stop-color="color" stop-opacity="0.3" />
              <stop offset="100%" :stop-color="color" stop-opacity="0.0" />
            </linearGradient>
          </defs>
          
          <!-- Area filled with gradient -->
          <path v-if="showArea" :d="areaPathData" fill="url(#chartGradient)" />
          
          <!-- Line path -->
          <path :d="pathData" fill="none" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>

      <!-- X Axis -->
      <div class="x-axis" v-if="labels && labels.length">
        <span v-for="(label, i) in labels" :key="i" class="x-axis-label">{{ label }}</span>
      </div>
    </div>
  </div>
</template>

<style src="../assets/styles/ChartStyles.css" scoped></style>
