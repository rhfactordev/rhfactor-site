import {cpf, cnpj} from "cpf-cnpj-validator";

const reEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default defineEventHandler(async (event) => {

    const config = useRuntimeConfig()
    const payment = await readBody(event)

    if( !payment ){
        throw Error("Pagamento não definido.")
    }

    const validName = payment.payer.firstName.length > 2 && payment.payer.lastName.length > 2
    const validEmail = reEmail.test(payment.payer.email)

    const isValidDocument = payment.payer.identification.number
        && payment.payer.identification.type
        && (
            (payment.payer.identification.type == 'CPF' && cpf.isValid( payment.payer.identification.number )
                || ( payment.payer.identification.type == 'CNPJ' && cnpj.isValid( payment.payer.identification.number ) )
            )
        )

    if (!validName || !validEmail || !isValidDocument ) {
        console.error('[processPayment]',!validName , !validEmail , !isValidDocument)
        throw Error("Verifique os campos do formulário")
    }

    let status = false

    try{
        const response = await $fetch(`${config.backendServer}/client/v1/order/${payment.order}/payment?domain=${config.domain}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: payment,
        })
        status = true
    }catch (e){
        console.log('Erro processar pagametno', e.data)
        throw new Error(e.data.message)
    }

    return {
        status
    }

})

