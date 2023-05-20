export default defineEventHandler(async (event) => {

    const { limit, page, department, showDepartments } = getQuery(event)

    const loadDepartments = showDepartments == null || showDepartments

    const products = []
    const departments = []

    // @ts-ignore
    for (let i = 0; i < (limit?limit:1); i++) {
        if( loadDepartments ){
            if (i < 6) {
                departments.push({
                    name: `Departamento ${i}`,
                    source: `departamento-${i}`,
                    target: `/loja/departamento-${i}`
                })
            }
        }
        products.push(
            {
                name: `Produto ${i} ${ department ? ` de ${department} ` : '' } ${page ?  `de page ${page}` : '' }`,
                department: `${ department ? `${department}` : 'sem-categoria' }`,
                departmentName: `${ department ? `${department}` : 'Sem Categoria' }`,
                source: `departamento-${i}`,
                target: `/loja/${ department ? `${department}` : 'sem-categoria' }/${i}`,
                image: `https://picsum.photos/id/${i*10}/400/200`,
                description: "descrição do produto que vem aqui como um parafago mas não é com html",
                content: `<p>Conteúdo em html do produto ${i}</p>`,
                price: 45.9
            }
        )
    }

    await new Promise(resolve => setTimeout(resolve, 400));

    return {
        products,
        departments,
    }
})
