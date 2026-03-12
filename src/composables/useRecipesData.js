import { ref } from 'vue'

export function useRecipesData() {
  const mealCategories = ref(['Todas', 'Desayuno', 'Almuerzo', 'Cena', 'Snack'])
  const goalCategories = ref(['Todos', 'Déficit calórico', 'Masa muscular', 'Keto', 'Alto en proteína'])

  const activeMeal = ref('Todas')
  const activeGoal = ref('Todos')

  const recipes = ref([
    {
      id: 1,
      title: 'Bowl de Quinoa con Pollo',
      author: 'María García',
      calories: 450,
      time: 25,
      difficulty: 'Fácil',
      difficultyColor: 'var(--accent-teal)', // verde de la paleta
      tags: ['Alto en proteína', 'Low carb'],
      // Usamos unsplash para una imagen realista de bowl de comida saludable
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Ensalada Power Verde',
      author: 'Alex Rodríguez',
      calories: 280,
      time: 15,
      difficulty: 'Fácil',
      difficultyColor: 'var(--accent-teal)',
      tags: ['Vegano', 'Detox'],
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Pancakes de Avena',
      author: 'Laura Martínez',
      calories: 350,
      time: 20,
      difficulty: 'Media',
      difficultyColor: 'var(--accent-orange)',
      tags: ['Desayuno', 'Sin azúcar'],
      image: 'https://images.unsplash.com/photo-1528207776546-384cb1119b95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ])

  // Lógica de filtrado mockeada basada en estado (aunque en MVP no cambia por los datos)
  const setMealFilter = (meal) => {
    activeMeal.value = meal
  }

  const setGoalFilter = (goal) => {
    activeGoal.value = goal
  }

  return {
    mealCategories,
    goalCategories,
    activeMeal,
    activeGoal,
    recipes,
    setMealFilter,
    setGoalFilter
  }
}
