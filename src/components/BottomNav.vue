<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const tabs = [
  {
    id: 'home',
    path: '/app',
    label: 'Inicio',
    icon: 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z M9 22V12h6v10'
  },
  {
    id: 'search',
    path: '/app/buscar',
    label: 'Buscar',
    icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
  },
  {
    id: 'workouts',
    path: '/app/entrenamientos',
    label: 'Rutinas',
    icon: 'M6.5 6.5l11 11 M21 21l-1-1 M3 3l1 1 M18 22l4-4 M2 6l4-4 M3 10l7-7 M14 21l7-7'
  },
  {
    id: 'social',
    path: '/app/social',
    label: 'Social',
    icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
  },
  {
    id: 'recipes',
    path: '/app/recetas',
    label: 'Recetas',
    icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
  },
  {
    id: 'profile',
    path: '/app/perfil',
    label: 'Perfil',
    icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
  }
]

const isActive = (tabPath) => {
  if (tabPath === '/app' && route.path === '/app') return true
  if (tabPath !== '/app' && route.path.startsWith(tabPath)) return true
  return false
}

const navigate = (path) => {
  router.push(path)
}
</script>

<template>
  <nav class="bottom-nav">
    <button
      v-for="tab in tabs"
      :key="tab.id"
      class="nav-item"
      :class="{ 'is-active': isActive(tab.path) }"
      @click="navigate(tab.path)"
    >
      <div class="nav-icon-wrapper">
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path :d="tab.icon" />
        </svg>
      </div>
      <span class="nav-label">{{ tab.label }}</span>
    </button>
  </nav>
</template>

<style src="../assets/styles/BottomNav.css" scoped></style>
