import { ref } from 'vue'

export function useStatData() {
  const stats = ref([
    {
      id: 1,
      iconType: 'calories', // mapped to SVG locally
      iconBg: 'var(--accent-orange-bg)',
      iconColor: 'var(--accent-orange)',
      label: 'Calorías',
      value: '1847',
      unit: 'kcal',
      trend: {
        direction: 'up',
        percent: '12%',
        text: 'vs mes anterior'
      }
    },
    {
      id: 2,
      iconType: 'workouts',
      iconBg: 'var(--accent-teal-bg)',
      iconColor: 'var(--accent-teal)',
      label: 'Entrenos',
      value: '1',
      unit: 'de 2',
      trend: null
    },
    {
      id: 3,
      iconType: 'time',
      iconBg: 'rgba(255, 255, 255, 0.05)',
      iconColor: 'var(--text-secondary)',
      label: 'Tiempo activo',
      value: '67',
      unit: 'min',
      trend: {
        direction: 'up',
        percent: '8%',
        text: 'vs mes anterior'
      }
    },
    {
      id: 4,
      iconType: 'goals',
      iconBg: 'rgba(255, 255, 255, 0.05)',
      iconColor: 'var(--text-secondary)',
      label: 'Objetivos',
      value: '3/5',
      unit: '',
      trend: {
        direction: 'down',
        percent: '5%',
        text: 'vs mes anterior'
      }
    }
  ])

  return { stats }
}
