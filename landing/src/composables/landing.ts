import { ref, onMounted, onUnmounted } from 'vue';

export function useLanding() {
    // Estado general
    const appUrl = ref("https://fitness-friend-social.lovable.app");
    const isMenuOpen = ref(false);
    const isScrolled = ref(false);
    const currentYear = ref(new Date().getFullYear());
    const isVideoPlaying = ref(false);

    // Métodos UI
    const toggleMenu = () => isMenuOpen.value = !isMenuOpen.value;
    const handleScroll = () => isScrolled.value = window.scrollY > 20;
    const playVideo = () => {
        isVideoPlaying.value = true;
        setTimeout(() => {
            const videoElement = document.getElementById('demo-video-container');
            if (videoElement) {
                videoElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 50);
    };

    // Lógica de Tally Popup
    const openTally = () => {
        // @ts-ignore
        if (typeof window.Tally !== 'undefined') {
            // @ts-ignore
            window.Tally.openPopup('VLlBpv', {
                layout: 'modal',
                width: 500,
                overlay: true,
                onSubmit: (payload: any) => {
                    // Extraer el nombre de la respuesta del formulario
                    // Asumiendo que el campo de nombre será un input de texto, intentamos encontrarlo
                    // por el id del campo si es conocido, o tomamos el primer valor de texto.
                    let userName = '';
                    if (payload && payload.data) {
                        // Buscar en las respuestas, asumiendo que el nombre es la primera pregunta de texto
                        const nameField = payload.data.find((field: any) => field.type === 'INPUT_TEXT');
                        if (nameField && nameField.value) {
                            userName = nameField.value;
                        }
                    }
                    
                    // Solo para asegurar un string
                    const nameParam = userName ? `?name=${encodeURIComponent(userName)}` : '';
                    
                    // Cerrar el popup y abrir la app
                    setTimeout(() => {
                        // @ts-ignore
                        window.Tally.closePopup('VLlBpv');
                        window.open(`http://localhost:5173/${nameParam}`, '_blank');
                    }, 500);
                }
            });
        } else {
            // Fallback por si el usuario tiene bloqueadores de scripts (Abre en nueva pestaña)
            window.open('https://tally.so/r/VLlBpv', '_blank');
        }
    };

    // Listeners de scroll
    onMounted(() => window.addEventListener('scroll', handleScroll));
    onUnmounted(() => window.removeEventListener('scroll', handleScroll));

    return {
        appUrl,
        isMenuOpen,
        isScrolled,
        currentYear,
        isVideoPlaying,
        toggleMenu,
        openTally,
        playVideo
    };
}
