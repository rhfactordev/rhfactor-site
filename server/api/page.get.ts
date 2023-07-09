export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const { page } = getQuery(event)

    const response = await $fetch(`${config.backendServer}/client/v1/page?domain=${config.domain}&page=${page}`, {
        headers: {
            "Content-Type": "application/json",
        },
    })
    return response
})
