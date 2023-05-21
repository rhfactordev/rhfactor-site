export default defineEventHandler(async (event) => {

    const { department, id } = getQuery(event)

    if( id == null ){
        throw new Error("Produto não especificado")
    }

    const departments = []

    // @ts-ignore
    for (let i = 0; i < 5; i++) {
        if (i < 6) {
            departments.push({
                name: `Departamento ${i}`,
                source: `departamento-${i}`,
                target: `/loja/departamento-${i}`
            })
        }
    }

   // await new Promise(resolve => setTimeout(resolve, 200));

    return {
        product : {
            name: `Produto ${id} do departamento ${department}`,
            department: `${ department ? `${department}` : 'sem-categoria' }`,
            departmentName: `${ department ? `${department}` : 'Sem Categoria' }`,
            source: department,
            image: `https://picsum.photos/id/${id}/674/338`,
            description: "<div class=\"description__HTMLContent-sc-1o6bsvv-1 dGafvC\"><p><strong>Preparem os corações. Lily e Atlas estão de volta na aguardada sequência de <em>É assim que acaba</em>. <em>É assim que começa</em> chega para consagrar novamente Colleen Hoover como a autora mais vendida do Brasil.</strong></p>\n" +
                "<p><strong>Colleen é um fenômeno editorial, acumulando não só milhões de visualizações no TikTok, mas também milhões de exemplares vendidos.</strong></p>\n" +
                "<p>&nbsp;</p>\n" +
                "<p>Lily Bloom continua administrando uma floricultura. Seu ex-marido abusivo, Ryle Kincaid, ainda é um &nbsp;&nbsp;&nbsp;cirurgião. Mas agora os dois estão oficialmente divorciados e dividem a guarda da filha, Emerson.</p>\n" +
                "<p>Quando Lily esbarra em Atlas — com quem não fala há quase dois anos —, parece que finalmente chegou o momento de retomar o relacionamento da adolescência, já que ele também está solteiro e parece retribuir os sentimentos de Lily. Mas apesar de divorciada, Lily não está exatamente livre de Ryle. Culpando Atlas pelo fim de seu casamento, Ryle não está nada disposto a aceitar o novo relacionamento de Lily, ainda mais com Atlas, o último homem que aceitaria ver perto de sua filha e da ex-esposa.</p>\n" +
                "<p>Alternando entre os pontos de vista de Atlas e Lily, <em>É assim que começa</em> retoma logo após o epílogo de <em>É assim que acaba</em>. Revelando mais sobre o passado de Atlas e acompanhando a jornada de Lily para abraçar a sua segunda chance, no amor enquanto lida com um ex-marido ciumento, <em>É assim que começa</em> prova que ninguém entrega uma leitura mais emocionante do que Colleen Hoover.</p>\n" +
                "<p>&nbsp;</p>\n" +
                "<p>“Em uma história permeada de tensão com lampejos de esperança, Hoover captura perfeitamente as dores de um coração partido e a felicidade de começar de novo.” - <em>Kirkus Review</em></p></div>",
            price: 45.9 * id+1,
            properties : [
                { key : "Formato" , value : "Digital - acesso online" },
                { key : "Prazo de entrega" , value : "Até 5 dias úteis" },
                { key : "Quantidade" , value : "24 posicionamentos astrológicos" },
            ]
        },
        departments,
    }
})
