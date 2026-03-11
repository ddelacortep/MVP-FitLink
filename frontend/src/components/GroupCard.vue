<script setup>
defineProps({
  group: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <article class="group-card">
    <div class="group-avatar-wrapper">
      <!-- Represented visually as icons due to missing source images but respects layout -->
      <div class="group-avatar" :style="{ backgroundColor: group.bgColor }">
        {{ group.icon }}
      </div>
      <div v-if="group.unread > 0" class="unread-badge">
        {{ group.unread }}
      </div>
    </div>

    <div class="group-content">
      <div class="group-header">
        <h3 class="group-name">{{ group.name }}</h3>
        <div class="group-meta">
          <span class="members-count">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            {{ group.members }}
          </span>
          <span class="group-time">{{ group.time }}</span>
        </div>
      </div>
      <p class="group-last-message">{{ group.lastMessage }}</p>
    </div>
  </article>
</template>

<style src="../assets/styles/GroupCard.css" scoped></style>
