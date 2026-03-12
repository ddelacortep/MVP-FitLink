import { ref } from 'vue'

export function useGroupsData() {
  const groups = ref([
    {
      id: 1,
      name: 'CrossFit Team',
      icon: '🏋️‍♂️', // Usamos emojis para simplificar sin imágenes externas
      bgColor: 'var(--bg-card-hover)',
      lastMessage: 'Carlos: Nos vemos en el box a las 7',
      time: '10:32',
      members: 12,
      unread: 5
    },
    {
      id: 2,
      name: 'Runners Madrid',
      icon: '🏃',
      bgColor: 'var(--bg-card-hover)',
      lastMessage: 'Laura: Ruta nueva el domingo por la Casa de C...',
      time: '09:15',
      members: 28,
      unread: 3
    },
    {
      id: 3,
      name: 'PowerLifting Club',
      icon: '💪',
      bgColor: 'var(--bg-card-hover)',
      lastMessage: 'Alex: Nuevo PR en sentadilla 180kg!',
      time: 'Ayer',
      members: 8,
      unread: 0
    },
    {
      id: 4,
      name: 'Nutrición & Recetas',
      icon: '🥗',
      bgColor: 'var(--bg-card-hover)',
      lastMessage: 'Diego: Probé la receta de avena proteica, brutal',
      time: 'Ayer',
      members: 45,
      unread: 12
    },
    {
      id: 5,
      name: 'Yoga & Movilidad',
      icon: '🧘',
      bgColor: 'var(--bg-card-hover)',
      lastMessage: 'María: Clase de estiramientos a las 19h',
      time: 'Lun',
      members: 15,
      unread: 0
    }
  ])

  // Lógica para crear un nuevo grupo
  const addGroup = (groupData) => {
    const newGroup = {
      id: Date.now(),
      name: groupData.name,
      icon: '🆕', // Icono por defecto
      bgColor: 'var(--bg-card-hover)', // En una app real vendría de la foto subida
      lastMessage: groupData.description || 'Grupo creado recientemente', // Usamos la descripción como mock del último mensaje initial
      time: 'Ahora',
      members: 1,
      unread: 0
    }
    
    // Inyectar al principio de la lista
    groups.value.unshift(newGroup)
  }

  return {
    groups,
    addGroup
  }
}
