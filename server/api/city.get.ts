export default defineEventHandler(async (event) => {

    const config = useRuntimeConfig()
    const { city } = getQuery(event)

    let cityList = []

    console.log('serach-city')

    const response = await $fetch(`${config.backendServer}/client/v1/location?city=${city}`)

    // @ts-ignore
    cityList = response

    return {
        cityList
    }
})
