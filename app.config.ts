export default defineAppConfig({
    head: {
        htmlAttrs: {
            lang: "pt-BR",
        },
    },
    meta: [
        {name: "viewport", content: "width=device-width, initial-scale=1"},
        {charset: "utf-8"}
    ],
    routeRules: {
        '/cadastro': {static: true},
        '/contato': {static: true},
        '/esqueci-minha-senha': {static: true},
        '/login': {static: true},
        // '/loja/**': {static: true},
        '/privacidade': {static: true},
        '/sobre-mim': {static: true},
        '/termos-de-uso': {static: true},
    }
})
