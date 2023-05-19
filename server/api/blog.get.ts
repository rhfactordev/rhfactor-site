export default defineEventHandler(async (event) => {

    // const body = await readBody(event)
    const { limit, showCategories, page, category, post } = getQuery(event)

    const loadCategories = showCategories == null || showCategories
    const loadPosts = post == null

    const posts = []
    const categories = []

    // @ts-ignore
    for (let i = 0; i < limit; i++) {
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
                    name: `Post ${i} ${ category ? ' de' + category : '' } de page ${page}`,
                    category: `categoria-${i}`,
                    categoryName: `Categoria ${i}`,
                    source: "categoria-1",
                    date: "20/12/2023 10:22h",
                    target: "/blog/categoria-1/post",
                    image: "https://picsum.photos/id/237/400/200",
                    description: "descrição do post que vem aqui como um parafago mas não é com html"
                }
            )
        }else{
            post = {
                name: `Post ${i} ${ category ? ' de' + category : '' } de page ${page}`,
                category: `categoria-${i}`,
                categoryName: `Categoria ${i}`,
                source: "categoria-1",
                date: "20/12/2023 10:22h",
                target: "/blog/categoria-1/post",
                image: "https://picsum.photos/id/237/400/200",
                description: "descrição do post que vem aqui como um parafago mas não é com html"
            }
        }
    }

    await new Promise(resolve => setTimeout(resolve, 400));

    return {
        posts,
        categories,
        post
    }
})
