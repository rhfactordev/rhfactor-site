export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    // body.page
    // body.category

    return {
        post: {
            name: `Post ${body.page} da categoria ${body.category}`,
            source: "categoria-1",
            target: "/blog/categoria-1/post",
            image: "https://picsum.photos/id/237/200/300",
            description: "descrição do post que vem aqui como um parafago mas não é com html",
            content : "<p>Conteúdo</p>"
        },
        categories: [
            {name: "Nome da Categoria 1", source: "categoria-1", target: "/blog/categoria-1"},
            {name: "Nome da Categoria 2", source: "categoria-1", target: "/blog/categoria-1"},
            {name: "Nome da Categoria", source: "categoria-1", target: "/blog/categoria-1"},
            {name: "Nome da Categoria", source: "categoria-1", target: "/blog/categoria-1"},
            {name: "Nome da Categoria", source: "categoria-1", target: "/blog/categoria-1"},
            {name: "Nome da Categoria", source: "categoria-1", target: "/blog/categoria-1"},
            {name: "Nome da Categoria", source: "categoria-1", target: "/blog/categoria-1"},
            {name: "Nome da Categoria", source: "categoria-1", target: "/blog/categoria-1"},
            {name: "Nome da Categoria", source: "categoria-1", target: "/blog/categoria-1"},
            {name: "Nome da Categoria", source: "categoria-1", target: "/blog/categoria-1"},
            {name: "Nome da Categoria", source: "categoria-1", target: "/blog/categoria-1"}
        ]
    }
})
