// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-delay-hydration',
        '@nuxtjs/html-validator',
        'nuxt-gtag',
        'nuxt-icon',
        '@pinia/nuxt',
        '@vueuse/nuxt',
        'nuxt-simple-sitemap',
        'nuxt-simple-robots',
        'nuxt-schema-org',
        'nuxt-link-checker',
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
        backendServer: process.env.BACKEND_SERVER || 'http://localhost:5000',
        domain: process.env.SITE_DOMAIN || 'localhost',
        public: {
            siteUrl: `https://${process.env.SITE_DOMAIN}` || 'https://localhost:8080',
            siteName: process.env.SITE_TITLE || 'Dev Site',
            language: 'pt=BR',
            trailingSlash: true,
        }
    },
    extends: [
        'nuxt-seo-kit'
    ],
    linkChecker: {
        failOn404: true,
    },
    unhead: {
        ogTitleTemplate: `%s | ${process.env.SITE_TITLE}`,
    },
    hooks: {
    }
})
