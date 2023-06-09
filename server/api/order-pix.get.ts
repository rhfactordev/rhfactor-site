export default defineEventHandler(async (event) => {

    const config = useRuntimeConfig()
    const { id } = getQuery(event)

    const response = await $fetch(`${config.backendServer}/client/v1/order/${id}/pix?domain=${config.domain}`, {
        // headers : {
        //     Authorization: `Bearer ${token}`
        // }
    })

    return response
})
