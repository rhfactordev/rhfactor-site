import {throws} from "assert";

export default defineEventHandler(async (event) => {

    // const config = useRuntimeConfig()
    // const { token } = getQuery(event)

    return [
        { id : 1 , gateway : 'mp' , name : 'Pix', type : 'pix' },
        // { id : 2 , gateway : 'mp' , name : 'Cartão de Crédito', type : 'credit-card' },
    ]
})
