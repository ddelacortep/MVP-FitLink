import { ref } from 'vue'

export function useUsersData() {
  const suggestedUsers = ref([
    {
      id: 1,
      name: 'María García',
      handle: '@maria_fit',
      workouts: '234',
      followers: '1520',
      avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d', // Placeholder simulating dummy photo
      isFollowing: false
    },
    {
      id: 2,
      name: 'Alex Rodríguez',
      handle: '@alex_strong',
      workouts: '456',
      followers: '3200',
      avatar: 'https://i.pravatar.cc/150?u=a04258a2462d826712d', 
      isFollowing: true
    },
    {
      id: 3,
      name: 'Laura Martínez',
      handle: '@laura_runner',
      workouts: '189',
      followers: '890',
      avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704e',
      isFollowing: false
    },
    {
      id: 4,
      name: 'Diego Torres',
      handle: '@diego_crossfit',
      workouts: '567',
      followers: '4100',
      avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
      isFollowing: false
    }
  ])

  const toggleFollow = (userId) => {
    const user = suggestedUsers.value.find(u => u.id === userId)
    if (user) {
      user.isFollowing = !user.isFollowing
    }
  }

  return {
    suggestedUsers,
    toggleFollow
  }
}
