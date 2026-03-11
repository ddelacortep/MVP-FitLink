<script setup>
defineProps({
  user: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="profile-header-card">
    <div class="profile-info-row">
      <div class="avatar-container">
        <img :src="user.image" alt="Profile" class="avatar-image" />
        <div class="edit-badge">
          <svg class="edit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
          </svg>
        </div>
      </div>
      
      <div class="user-details">
        <h2 class="user-name">{{ user.name }}</h2>
        <span class="user-handle">{{ user.handle }}</span>
        <div class="user-tags">
          <span v-for="tag in user.tags" :key="tag" class="user-tag">{{ tag }}</span>
        </div>
      </div>
    </div>

    <div class="profile-stats-row">
      <div class="profile-stat-item">
        <span class="profile-stat-value">{{ user.stats.workouts }}</span>
        <span class="profile-stat-label">Entrenos</span>
      </div>
      <div class="profile-stat-item">
        <span class="profile-stat-value white">{{ user.stats.followers }}</span>
        <span class="profile-stat-label">Seguidores</span>
      </div>
      <div class="profile-stat-item">
        <span class="profile-stat-value white">{{ user.stats.following }}</span>
        <span class="profile-stat-label">Siguiendo</span>
      </div>
    </div>
  </div>
</template>

<style src="../assets/styles/ProfileHeader.css" scoped></style>
