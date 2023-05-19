export default defineEventHandler(async (event) => {

    const posts = []
    const categories = []

    for (let i = 0; i < 10; i++) {
        if (i < 6) {
            categories.push({
                name: `Nome do post ${i}`,
                source: "categoria-1",
                target: "/blog/categoria-1"
            })
        }
        posts.push(
            {
                name: `Nome do post ${i}`,
                category: "categoria-1",
                categoryName: "Categoria 1",
                source: "categoria-1",
                date: "20/12/2023 10:22h",
                target: "/blog/categoria-1/post",
                image: "https://picsum.photos/id/237/400/200",
                description: "descrição do post que vem aqui como um parafago mas não é com html"
            }
        )
    }

    await new Promise(resolve => setTimeout(resolve, 400));

    return {
        posts,
        categories
    }
})
