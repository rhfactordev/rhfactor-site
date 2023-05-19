export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    if( !body.name ){
        throw Error("O nome é obrigatório.")
    }
    if( !body.email ){
        throw Error("O e-mail é obrigatório.")
    }

    await new Promise(resolve => setTimeout(resolve, 400));

    return body
})
