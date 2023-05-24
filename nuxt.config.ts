// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-delay-hydration',
        '@nuxtjs/html-validator',
        'nuxt-gtag',
        'nuxt-icon'
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
})
