<template>
    <div>
        <!-- Navegación -->
        <nav
            :class="['fixed w-full z-40 transition-all duration-300', isScrolled ? 'bg-cyber-dark/80 backdrop-blur-lg border-b border-slate-800 py-3' : 'bg-transparent py-5']">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center">
                    <!-- Logo -->
                    <div class="flex items-center gap-2">
                        <div
                            class="w-10 h-10 bg-cyber-neon text-black rounded-xl flex items-center justify-center transform -rotate-6">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                        </div>
                        <span class="font-bold text-xl tracking-tight text-white">FitnessFriend</span>
                    </div>

                    <!-- Desktop Nav -->
                    <div
                        class="hidden md:flex items-center gap-8 bg-cyber-card/50 backdrop-blur-md px-8 py-3 rounded-full border border-slate-800 shadow-sm">
                        <a href="#filosofia"
                            class="text-sm font-semibold text-slate-300 hover:text-cyber-neon transition-colors">Filosofía</a>
                        <a href="#ecosistema"
                            class="text-sm font-semibold text-slate-300 hover:text-cyber-neon transition-colors">Ecosistema</a>
                        <a href="#video"
                            class="text-sm font-semibold text-slate-300 hover:text-cyber-neon transition-colors">Presentación</a>
                    </div>

                    <!-- CTA & Mobile Toggle -->
                    <div class="flex items-center gap-4">
                        <button @click="openTally"
                            class="hidden md:inline-flex bg-cyber-neon hover:bg-[#00e593] text-black px-6 py-2.5 rounded-full font-bold text-sm transition-all transform hover:scale-105 shadow-[0_8px_20px_-6px_rgba(0,255,163,0.4)]">
                            Probar App
                        </button>
                        <button @click="toggleMenu" class="md:hidden text-cyber-neon p-2 focus:outline-none">
                            <svg v-if="!isMenuOpen" class="w-7 h-7" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                            <svg v-else class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Mobile Menu -->
            <transition name="fade">
                <div v-if="isMenuOpen"
                    class="md:hidden absolute top-full left-0 w-full bg-cyber-card border-b border-slate-800 shadow-2xl">
                    <div class="flex flex-col px-4 pt-2 pb-6 space-y-3">
                        <a @click="isMenuOpen = false" href="#filosofia"
                            class="px-4 py-3 text-base font-semibold text-slate-200 hover:bg-slate-800/50 rounded-xl">Filosofía</a>
                        <a @click="isMenuOpen = false" href="#ecosistema"
                            class="px-4 py-3 text-base font-semibold text-slate-200 hover:bg-slate-800/50 rounded-xl">Ecosistema</a>
                        <button @click="openTally"
                            class="mt-4 bg-cyber-neon text-black px-4 py-4 rounded-xl font-bold text-center shadow-md w-full">
                            Probar App
                        </button>
                    </div>
                </div>
            </transition>
        </nav>

        <!-- Hero Section -->
        <section class="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            <div class="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-cyber-neon/10 rounded-full blur-3xl"></div>
            <div class="absolute bottom-0 left-0 -ml-20 w-72 h-72 bg-cyber-purple/10 rounded-full blur-3xl"></div>

            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="text-center max-w-4xl mx-auto">
                    <div
                        class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyber-card border border-slate-800 shadow-sm mb-8 text-sm font-bold text-white">
                        <span class="flex h-2 w-2 relative">
                            <span
                                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-neon opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-2 w-2 bg-cyber-neon"></span>
                        </span>
                        La evolución social del fitness
                    </div>

                    <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-white leading-[1.1]">
                        El esfuerzo es personal. <br />
                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyber-neon to-emerald-400">
                            La victoria es compartida.
                        </span>
                    </h1>

                    <p class="mt-6 text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
                        No es solo una app de rutinas. Es un ecosistema diseñado para hackear tu motivación conectándote
                        con quienes sudan a tu lado.
                    </p>

                    <div class="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button @click="openTally"
                            class="w-full sm:w-auto flex items-center justify-center gap-2 bg-cyber-neon hover:bg-[#00e593] text-black px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-[0_8px_30px_-6px_rgba(0,255,163,0.4)]">
                            Probar App
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </button>
                        <button @click="playVideo"
                            class="w-full sm:w-auto flex items-center justify-center gap-3 bg-cyber-card hover:bg-slate-800 text-white border border-slate-700 px-8 py-4 rounded-full text-lg font-bold transition-all shadow-sm">
                            <svg class="w-5 h-5 text-cyber-neon" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                            Ver cómo funciona
                        </button>
                    </div>
                </div>

                <!-- Preview App Image Mockup -->
                <div id="demo-video-container" class="mt-20 relative max-w-5xl mx-auto animate-float">
                    <div
                        class="aspect-[16/9] bg-cyber-card rounded-3xl shadow-2xl border border-slate-800 overflow-hidden flex flex-col">
                        <div class="h-8 bg-slate-900 border-b border-slate-800 flex items-center px-4 gap-2">
                            <div class="w-3 h-3 rounded-full bg-slate-700"></div>
                            <div class="w-3 h-3 rounded-full bg-slate-700"></div>
                            <div class="w-3 h-3 rounded-full bg-slate-700"></div>
                        </div>
                        <div class="flex-1 bg-cyber-dark relative overflow-hidden flex items-center justify-center p-0">
                            <template v-if="!isVideoPlaying">
                                <div class="w-full max-w-3xl grid grid-cols-3 gap-6 opacity-60 p-8">
                                    <div class="col-span-2 space-y-6">
                                        <div class="h-32 bg-cyber-card rounded-2xl shadow-sm border border-slate-800">
                                        </div>
                                        <div class="h-64 bg-cyber-card rounded-2xl shadow-sm border border-slate-800">
                                        </div>
                                    </div>
                                    <div class="space-y-6">
                                        <div class="h-48 bg-cyber-card rounded-2xl shadow-sm border border-slate-800">
                                        </div>
                                        <div class="h-48 bg-cyber-neon/10 rounded-2xl border border-cyber-neon/20">
                                        </div>
                                    </div>
                                </div>
                                <button @click="playVideo"
                                    class="absolute inset-0 flex items-center justify-center group cursor-pointer bg-black/40 backdrop-blur-[2px]">
                                    <div
                                        class="w-24 h-24 bg-cyber-neon rounded-full shadow-[0_0_40px_rgba(0,255,163,0.5)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <svg class="w-10 h-10 text-black ml-2" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </button>
                            </template>
                            <template v-else>
                                <iframe src="https://drive.google.com/file/d/1iju3AxcBUiGJWfzzglq40QJsShPlAGnM/preview"
                                    class="absolute inset-0 w-full h-full border-0" allow="autoplay"
                                    allowfullscreen></iframe>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Final -->
        <section class="py-24 bg-cyber-card border-t border-slate-800 relative">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 class="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">¿Listo para dejar de
                    entrenar
                    solo?</h2>
                <p class="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                    Únete a la plataforma hoy. La inscripción toma menos de un minuto. Tus resultados durarán toda la
                    vida.
                </p>
                <button @click="openTally"
                    class="inline-flex items-center justify-center gap-2 bg-cyber-neon hover:bg-[#00e593] text-black px-10 py-5 rounded-full text-xl font-bold transition-all transform hover:scale-105 shadow-[0_8px_30px_rgba(0,255,163,0.3)]">
                    Probar App
                </button>
            </div>
        </section>

        <!-- Footer -->
        <footer class="bg-cyber-dark py-12 border-t border-slate-800">
            <div
                class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div class="flex items-center gap-2">
                    <div
                        class="w-8 h-8 bg-cyber-neon text-black rounded-lg flex items-center justify-center transform -rotate-6">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                    </div>
                    <span class="font-bold text-xl text-white">FitnessFriend</span>
                </div>
                <p class="text-slate-500 font-medium text-sm">
                    © {{ currentYear }} Fitness Friend Social. Todos los derechos reservados.
                </p>
                <div class="flex gap-6">
                    <button @click="openTally"
                        class="text-slate-500 hover:text-cyber-neon font-medium transition-colors">Iniciar
                        Sesión</button>
                    <a href="#"
                        class="text-slate-500 hover:text-cyber-neon font-medium transition-colors">Privacidad</a>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup lang="ts">
import { useLanding } from '@/composables/landing';

const {
    isMenuOpen,
    isScrolled,
    currentYear,
    isVideoPlaying,
    toggleMenu,
    openTally,
    playVideo
} = useLanding();
</script>
