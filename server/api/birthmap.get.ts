export default defineEventHandler(async (event) => {

    const config = useRuntimeConfig()
    const { token, birthmapId } = getQuery(event)

    if( birthmapId == null ){
        throw Error("Mapa astral não encontrado!")
    }

    let birthmap = {}
    let error

    const response = await $fetch(`${config.backendServer}/client/v1/birthmap/${birthmapId}/public?domain=${config.domain}&reviewed=true`, {
        headers : {
            Authorization: `Bearer ${token}`
        }
    })

    birthmap = response

    return {
        birthmap,
        error
    }
})
