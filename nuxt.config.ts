// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-delay-hydration',
        '@nuxtjs/html-validator',
        'nuxt-gtag',
    ],
    tailwindcss: {
        // cssPath: '~/assets/css/tailwind.css',
        // configPath: 'tailwind.config',
        exposeConfig: true,
        // exposeLevel: 2,
        injectPosition: 'first',
        viewer: true,
    },
    nitro: {
        prerender: {
            ignore: ['/minha-conta']
        }
    },
    delayHydration: {
        // enables nuxt-delay-hydration in dev mode for testing
        debug: process.env.NODE_ENV === 'development'
    },
})
