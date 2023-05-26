export default defineEventHandler(async (event) => {

    const config = useRuntimeConfig()
    const { token } = getQuery(event)

    let birthmaps = []
    let error

    const response = await $fetch(`${config.backendServer}/client/v1/birthmap?domain=${config.domain}`, {
        headers : {
            Authorization: `Bearer ${token}`
        }
    })

    birthmaps = response

    return {
        birthmaps,
        error
    }
})
