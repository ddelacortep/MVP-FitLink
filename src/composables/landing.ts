import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

export function useLanding() {
    const router = useRouter();
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
                    let userName = '';
                    if (payload && payload.data) {
                        const nameField = payload.data.find((field: any) => field.type === 'INPUT_TEXT');
                        if (nameField && nameField.value) {
                            userName = nameField.value;
                        }
                    }

                    setTimeout(() => {
                        // @ts-ignore
                        window.Tally.closePopup('VLlBpv');
                        router.push({
                            path: '/app',
                            query: userName ? { name: encodeURIComponent(userName) } : undefined
                        });
                    }, 500);
                }
            });
        } else {
            // Fallback: abrir Tally en nueva pestaña si hay bloqueadores
            window.open('https://tally.so/r/VLlBpv', '_blank');
        }
    };

    // Listeners de scroll
    onMounted(() => window.addEventListener('scroll', handleScroll));
    onUnmounted(() => window.removeEventListener('scroll', handleScroll));

    return {
        isMenuOpen,
        isScrolled,
        currentYear,
        isVideoPlaying,
        toggleMenu,
        openTally,
        playVideo
    };
}
