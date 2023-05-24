// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    $schema: undefined,
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-delay-hydration',
        '@nuxtjs/html-validator',
        'nuxt-gtag',
        'nuxt-icon',
        '@pinia/nuxt',
        '@vueuse/nuxt',
    ],
    tailwindcss: {
        // cssPath: '~/assets/css/tailwind.css',
        // configPath: 'tailwind.config',
        exposeConfig: true,
        // exposeLevel: 2,
        injectPosition: 'first',
        viewer: true,
    },
    delayHydration: {
        // enables nuxt-delay-hydration in dev mode for testing
        debug: process.env.NODE_ENV === 'development'
    },
    // webpack: {
    //     extractCSS: true,
    // }
    runtimeConfig:{
        backendServer: process.env.BACKEND_SERVER || 'http://localhost:5000'
    }
})
