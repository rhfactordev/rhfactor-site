export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const config = useRuntimeConfig()

    if (body.password == null || body.login == null) {
        throw Error("Por favor, informe seu login e senha!")
    }

    const {
        // @ts-ignore
        access_token: accessToken,
        // @ts-ignore
        token_type: tokenType,
        // @ts-ignore
        expires_in: expiresIn
    } = await $fetch(`${config.backendServer}/login`, {
        headers: {
            // Authorization: `Bearer ${useRuntimeConfig().apiSecret}`
        },
        method: 'POST',
        body: {
            username: body.login,
            password: body.password,
        },
        watch: false
    })

    if( accessToken == null ){
        throw Error("Login ou senha inválidos!")
    }

    return {
        accessToken,
        expiresIn
    }
})
