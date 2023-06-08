export default defineEventHandler(async (event) => {

    const config = useRuntimeConfig()
    const { id } = getQuery(event)

    let order = {}


    const response = await $fetch(`${config.backendServer}/client/v1/order/${id}/public?domain=${config.domain}`, {
        // headers : {
        //     Authorization: `Bearer ${token}`
        // }
    })

    order = response

    return order
})
