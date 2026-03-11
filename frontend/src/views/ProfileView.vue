<script setup>
import { useProfileData } from '../composables/useProfileData'

import ProfileHeader from '../components/ProfileHeader.vue'
import SectionHeader from '../components/SectionHeader.vue'
import StatCard from '../components/StatCard.vue'
import LineChart from '../components/LineChart.vue'
import ListItem from '../components/ListItem.vue'
import BottomNav from '../components/BottomNav.vue'

const { user, userStats, strengthProgressData, recentWorkouts, friendsComparison } = useProfileData()

// Iconos SVG para las secciones del perfil
const trophyIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-orange)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 4h10/><path d="M17 4v8a5 5 0 0 1-10 0V4"/><path d="M4 9h3"/><path d="M17 9h3"/></svg>`
const chartIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-teal)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`
const usersIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`

// SVG mapping para StatCards
const statIcons = {
  fire: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.657 18.657A8 8 0 016.343 7.343S7 9 7.1 10c0-4 3-6 3-6s-1 3.5 1 4.5c2 1 4-1 4-1s-1.5 2.5-1.5 4.5c0 2 1.5 3 1.5 3z"/></svg>',
  dumbbell: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6.5 6.5 11 11"/><path d="m21 21-1-1"/><path d="m3 3 1 1"/><path d="m18 22 4-4"/><path d="m2 6 4-4"/><path d="m3 10 7-7"/><path d="m14 21 7-7"/></svg>',
  clock: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
  calendar: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>'
}

</script>

<template>
  <main class="profile-view">
    <!-- Global Header -->
    <header class="profile-header-global">
      <h1 class="profile-title">Perfil</h1>
      <button class="btn-settings" aria-label="Ajustes">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      </button>
    </header>

    <!-- Profile Info Card -->
    <ProfileHeader :user="user" />

    <!-- Estadísticas Grid -->
    <section class="section-spacing">
      <SectionHeader title="Tus estadísticas" :svgIcon="trophyIcon" />
      <div class="stats-grid">
        <StatCard 
          v-for="stat in userStats" 
          :key="stat.id" 
          :label="stat.title"
          :value="stat.value"
          :unit="stat.unit"
          :trend="stat.trend ? {
            direction: stat.trend.positive ? 'up' : 'down',
            percent: stat.trend.value.split(' ')[0],
            text: stat.trend.value.split(' ').slice(1).join(' ')
          } : null"
          :customIcon="statIcons[stat.icon]"
          :iconColor="stat.color"
          :iconBg="'rgba(255, 255, 255, 0.05)'"
        />
      </div>
    </section>

    <!-- Gráfico 3 meses modificados para vista perfil -->
    <section class="section-spacing">
      <SectionHeader title="Progreso 3 meses" :svgIcon="chartIcon" />
      <div class="chart-wrapper">
        <h3 class="chart-title-local">Fuerza (% de mejora)</h3>
        <!-- Linechart modificado via props de acuerdo al screenshot (con grid para fechas, y area para estilo) -->
        <LineChart 
          :data="strengthProgressData.map(d => d.value)" 
          :labels="strengthProgressData.map(d => d.label)"
          color="var(--accent-teal)" 
          :showGrid="true"
          :showArea="true"
        />
      </div>
    </section>

    <!-- Últimos entrenos -->
    <section class="section-spacing">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-4);">
        <h3 style="font-size: var(--font-size-xl); font-weight: 700; color: var(--text-primary);">Últimos entrenos</h3>
        <a href="#" class="list-header-link">Ver todos</a>
      </div>
      
      <div class="list-container">
        <ListItem 
          v-for="workout in recentWorkouts" 
          :key="workout.id"
          :item="workout"
          variant="training"
        />
      </div>
    </section>

    <!-- Compara con amigos -->
    <section class="section-spacing">
      <SectionHeader title="Compara con amigos" :svgIcon="usersIcon" />
      <div class="list-container">
        <ListItem 
          v-for="friend in friendsComparison" 
          :key="friend.id"
          :item="friend"
          variant="friend"
        />
      </div>
    </section>

  </main>
  
  <BottomNav />
</template>

<style src="../assets/styles/ProfileView.css" scoped></style>
