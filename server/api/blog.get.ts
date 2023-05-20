export default defineEventHandler(async (event) => {

    // const body = await readBody(event)
    const { limit, showCategories, page, category, post } = getQuery(event)

    const loadCategories = showCategories == null || showCategories
    const loadPosts = post == null

    let entry
    const posts = []
    const categories = []

    // @ts-ignore
    for (let i = 0; i < (limit?limit:1); i++) {
        if( loadCategories ){
            if (i < 6) {
                categories.push({
                    name: `Categoria ${i}`,
                    source: `categoria-${i}`,
                    target: `/blog/categoria-${i}`
                })
            }
        }
        if( loadPosts ){
            posts.push(
                {
                    name: `Post ${i} ${ category ? ` de ${category} ` : '' } ${page ?  `de page ${page}` : '' }`,
                    category: `${ category ? `${category}` : 'sem-categoria' }`,
                    categoryName: `${ category ? `${category}` : 'Sem Categoria' }`,
                    source: `categoria-${i}`,
                    date: "20/12/2023 10:22h",
                    target: `/blog/${ category ? `${category}` : 'sem-categoria' }/${i}`,
                    image: `https://picsum.photos/id/${i*10}/674/338`,
                    description: "descrição do post que vem aqui como um parafago mas não é com html",
                    content: `<p>Conteúdo em html do post ${i}</p>`
                }
            )
        }else{
            entry = {
                name: `Post ${post} ${ category ? ` de ${category} ` : '' } ${page ?  `de page ${page}` : '' }`,
                category: `${ category ? `${category}` : 'sem-categoria' }`,
                categoryName: `${ category ? `${category} ` : 'Sem Categoria' }`,
                source: `${ category ? `${category} ` : 'sem-categoria' }`,
                date: "20/12/2023 10:22h",
                target: `/blog/${ category ? `${category}` : 'sem-categoria' }/${i}`,
                image: `https://picsum.photos/id/${i}/674/338`,
                description: "descrição do post que vem aqui como um parafago mas não é com html",
                content: `<p>Conteúdo em html do post ${post}</p>`
            }
        }
    }

    // await new Promise(resolve => setTimeout(resolve, 400));

    return {
        posts,
        categories,
        post : entry
    }
})
