export default defineEventHandler(async (event) => {

    const config = useRuntimeConfig()
    const { orderId, paymentId } = getQuery(event)

    let order = {}

    const response = await $fetch(`${config.backendServer}/client/v1/order/${orderId}/payment/${paymentId}/verify?domain=${config.domain}`, {
        // headers : {
        //     Authorization: `Bearer ${token}`
        // }
    })

    order = response

    return order
})
