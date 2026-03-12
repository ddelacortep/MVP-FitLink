<script setup>
defineProps({
  user: {
    type: Object,
    required: true
  }
})

defineEmits(['toggle-follow'])
</script>

<template>
  <article class="user-card">
    <div class="user-card-info">
      <img :src="user.avatar" :alt="user.name" class="user-avatar" />
      <div class="user-details">
        <h3 class="user-name">{{ user.name }}</h3>
        <span class="user-handle">{{ user.handle }}</span>
        
        <div class="user-stats">
          <span class="stat-item"><strong>{{ user.workouts }}</strong> entrenos</span>
          <span class="stat-item"><strong>{{ user.followers }}</strong> seguidores</span>
        </div>
      </div>
    </div>
    
    <button 
      class="btn-follow" 
      :class="{ 'is-following': user.isFollowing }"
      @click="$emit('toggle-follow', user.id)"
    >
      {{ user.isFollowing ? 'Siguiendo' : 'Seguir' }}
    </button>
  </article>
</template>

<style src="../assets/styles/UserCard.css" scoped></style>
