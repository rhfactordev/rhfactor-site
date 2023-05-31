export default defineEventHandler(async (event) => {

    const config = useRuntimeConfig()
    const body = await readBody(event)

    if( !body.name ||
        !body.email ||
        !body.birthdate ||
        !body.city ||
        !body.service ||
        !body.accpetedTerms ){
        console.log('Birthmap.post',!body.name, !body.email, !body.birthdate, !body.city, !body.serviceId, !body.accpetedTerms)
        throw Error("Dados necessários")
    }

    const response = await $fetch(`${config.backendServer}/client/v1/signup/birthmap?domain=${config.domain}`, {
        method: 'POST',
        body: {
            name: body.name,
            email: body.email,
            birthdate: body.birthdate,
            birthplaceId: body.city,
            serviceId : body.service,
            accpetedTerms : body.accpetedTerms
        }
    })

    console.log(response)

    return {
        order : response.returnId
    }

})
