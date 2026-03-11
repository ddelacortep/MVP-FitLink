import { ref } from 'vue'

export function useProfileData() {
  const user = ref({
    name: 'Carlos Mendoza',
    handle: '@carlos_power',
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    tags: ['CrossFit', 'Powerlifting'],
    stats: {
      workouts: 234,
      followers: '1.2k',
      following: 89
    }
  })

  // Estadísticas del grid 2x2
  const userStats = ref([
    {
      id: 1,
      title: 'Cal. esta semana',
      value: '8,450',
      unit: '',
      trend: {
        value: '15% vs mes anterior',
        positive: true
      },
      icon: 'fire', // identificador para renderear el SVG correcto
      color: 'var(--accent-orange)'
    },
    {
      id: 2,
      title: 'Peso máximo',
      value: '120',
      unit: 'kg',
      trend: {
        value: '5% vs mes anterior',
        positive: true
      },
      icon: 'dumbbell',
      color: 'var(--accent-teal)'
    },
    {
      id: 3,
      title: 'Tiempo total',
      value: '32h',
      unit: '',
      trend: null,
      icon: 'clock',
      color: 'var(--text-secondary)'
    },
    {
      id: 4,
      title: 'Racha actual',
      value: '12',
      unit: 'días',
      trend: null,
      icon: 'calendar',
      color: 'var(--text-secondary)'
    }
  ])

  // Datos para el gráfico del perfil (color teal, sin gradiente bajo si pasamos un flag)
  const strengthProgressData = ref([
    { label: 'Nov', value: 60 },
    { label: 'Dic', value: 70 },
    { label: 'Ene', value: 85 },
    { label: 'Feb', value: 100 }
  ])

  // Últimos entrenos (ListItem variante training)
  const recentWorkouts = ref([
    {
      id: 1,
      title: 'Pecho y Tríceps',
      subtitle: 'Hoy • 65 min',
      highlight: '420 kcal'
    },
    {
      id: 2,
      title: 'Pierna',
      subtitle: 'Ayer • 75 min',
      highlight: '550 kcal'
    },
    {
      id: 3,
      title: 'Espalda y Bíceps',
      subtitle: 'Lun • 60 min',
      highlight: '380 kcal'
    }
  ])

  // Comparación con amigos (ListItem variante friend)
  const friendsComparison = ref([
    {
      id: 1,
      name: 'María',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      subtitle: 'vs. tú',
      badge: '15% más entrenos' // En MVP estático
    },
    {
      id: 2,
      name: 'Alex',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      subtitle: 'vs. tú',
      badge: '10% menos calorías'
    }
  ])

  return {
    user,
    userStats,
    strengthProgressData,
    recentWorkouts,
    friendsComparison
  }
}
