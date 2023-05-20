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

   await new Promise(resolve => setTimeout(resolve, 200));

    return {
        product : {
            name: `Produto ${id} do departamento ${department}`,
            department: `${ department ? `${department}` : 'sem-categoria' }`,
            departmentName: `${ department ? `${department}` : 'Sem Categoria' }`,
            source: department,
            image: `https://picsum.photos/id/${id}/674/338`,
            description: "descrição do produto que vem aqui como um parafago mas não é com html",
            content: `<p>Conteúdo em html do produto ${id}</p>`,
            price: 45.9 * id+1
        },
        departments,
    }
})
