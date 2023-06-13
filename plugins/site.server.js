export default defineNuxtPlugin(async (nuxtApp) => {
    const response = await $fetch(`${process.env.BACKEND_SERVER}/client/v1/site?domain=${process.env.SITE_DOMAIN}`, {
        headers: {
            "Content-Type": "application/json",
        },
    })
    nuxtApp.site = response
})
