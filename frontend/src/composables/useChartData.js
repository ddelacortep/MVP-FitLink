import { ref } from 'vue'

export function useChartData() {
  const weeklyActivity = ref({
    labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
    data: [45, 60, 30, 75, 50, 90, 40] // Minutes of training points matching the curve
  })

  const monthlyProgress = ref({
    labels: ['Nov', 'Dic', 'Ene', 'Feb'],
    data: [65, 75, 85, 95] // General performance percentage points matching straight slope
  })

  return {
    weeklyActivity,
    monthlyProgress
  }
}
