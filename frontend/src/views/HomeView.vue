<script setup>
import { useStatData } from '../composables/useStatData'
import { useChartData } from '../composables/useChartData'

import SectionHeader from '../components/SectionHeader.vue'
import StatCard from '../components/StatCard.vue'
import LineChart from '../components/LineChart.vue'
import AreaChart from '../components/AreaChart.vue'
import BottomNav from '../components/BottomNav.vue'

const { stats } = useStatData()
const { weeklyActivity, monthlyProgress } = useChartData()

// Icon paths for SectionHeaders
const iconTrophy = 'M5 3v4M19 3v4M5 7h14a2 2 0 01-2 2H7a2 2 0 01-2-2z M8 9v2a4 4 0 108 0V9 M12 21v-6 M8 21h8'
const iconTrend = 'M23 6l-9.5 9.5-5-5L1 18 M23 6h-6 M23 6v6'

// Add map to bind icon paths to stat types locally since the composable returns names
const getIconPath = (type) => {
  const map = {
    calories: 'M17.657 18.657A8 8 0 016.343 7.343S7 9 7.1 10c0-4 3-6 3-6s-1 3.5 1 4.5c2 1 4-1 4-1s-1.5 2.5-1.5 4.5c0 2 1.5 3 1.5 3z',
    workouts: 'M4 8V6a2 2 0 012-2h2 M4 16v2a2 2 0 002 2h2 M16 4h2a2 2 0 012 2v2 M16 20h2a2 2 0 002-2v-2 M9 10h6 M9 14h6 M12 7v10', // dumbbell simplified
    time: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    goals: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z M12 8v4 M12 16h.01' // target/shield simplified
  }
  return map[type] || ''
}
</script>

<template>
  <main class="home-view">
    <!-- Header -->
    <header class="home-header">
      <div>
        <div class="greeting-sup">Hola de nuevo,</div>
        <h1 class="greeting-title">
          Carlos <span>💪</span>
        </h1>
      </div>
      <button class="btn-add" aria-label="Añadir">
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button>
    </header>

    <!-- Resumen de hoy -->
    <section>
      <SectionHeader 
        :iconPath="iconTrophy" 
        iconColor="var(--accent-orange)"
        title="Resumen de hoy" 
      />
      <div class="stats-grid">
        <StatCard 
          v-for="stat in stats" 
          :key="stat.id"
          :iconPath="getIconPath(stat.iconType)"
          :iconBg="stat.iconBg"
          :iconColor="stat.iconColor"
          :label="stat.label"
          :value="stat.value"
          :unit="stat.unit"
          :trend="stat.trend"
        />
      </div>
    </section>

    <!-- Actividad semanal -->
    <section>
      <SectionHeader 
        :iconPath="iconTrend" 
        iconColor="var(--accent-teal)"
        title="Actividad semanal" 
      />
      <LineChart 
        title="Minutos de entrenamiento"
        :data="weeklyActivity.data"
        :labels="weeklyActivity.labels"
        color="var(--accent-teal)"
      />
    </section>

    <!-- Progreso 3 meses -->
    <section>
      <!-- El título es parte del componente AreaChart visualmente, pero la captura muestra un titulo de sección sin icono -->
      <h2 style="font-size: var(--font-size-xl); font-weight: 700; margin-bottom: var(--space-4);">Progreso 3 meses</h2>
      <AreaChart 
        title="Rendimiento general (%)"
        :data="monthlyProgress.data"
        :labels="monthlyProgress.labels"
        color="var(--accent-orange)"
      />
    </section>

  </main>

  <BottomNav />
</template>

<style src="../assets/styles/HomeView.css" scoped></style>
