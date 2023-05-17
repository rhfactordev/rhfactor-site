export default defineEventHandler((event) => {
    return {
        posts: [
            {
                name: "Nome da Categoria 1",
                source: "categoria-1",
                target: "/blog/categoria-1/post",
                image: "https://picsum.photos/id/237/400/200",
                description: "descrição do post que vem aqui como um parafago mas não é com html"
            },
            {
                name: "Nome da Categoria 1",
                source: "categoria-1",
                target: "/blog/categoria-1/post",
                image: "https://picsum.photos/id/237/400/200",
                description: "descrição do post que vem aqui como um parafago mas não é com html"
            },
            {
                name: "Nome da Categoria 1",
                source: "categoria-1",
                target: "/blog/categoria-1/post",
                image: "https://picsum.photos/id/237/400/200",
                description: "descrição do post que vem aqui como um parafago mas não é com html"
            },
        ],
        categories: [
            {name: "Nome da Categoria 1", source: "categoria-1", target: "/blog/categoria-1"},
        ]
    }
})
