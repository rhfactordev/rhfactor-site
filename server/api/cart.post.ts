export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    if( !body.product ){
        throw Error("Produto não informado")
    }

    await new Promise(resolve => setTimeout(resolve, 600));

    return {
        body,
    }
})
