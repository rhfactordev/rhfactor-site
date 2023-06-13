export default defineNuxtPlugin(async (nuxtApp) => {
    const response = await $fetch(`/api/site`)
    nuxtApp.site = response
})
