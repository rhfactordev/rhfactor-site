export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const response = await $fetch(`${config.backendServer}/client/v1/site?domain=${config.domain}`, {
        headers: {
            "Content-Type": "application/json",
        },
    })
    return response
})
