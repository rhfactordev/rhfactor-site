import {throws} from "assert";

export default defineEventHandler(async (event) => {

    const config = useRuntimeConfig()
    const { token } = getQuery(event)

    let orders = []
    let error

    const response = await $fetch(`${config.backendServer}/client/v1/order?domain=${config.domain}`, {
        headers : {
            Authorization: `Bearer ${token}`
        }
    })

    orders = response

    return {
        orders,
        error
    }
})
