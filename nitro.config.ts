import { defineNitroConfig } from "nitropack/config";

export default defineNitroConfig({
    routeRules: {
        '/cadastro': {static: true},
        '/contato': {static: true},
        '/esqueci-minha-senha': {static: true},
        '/login': {static: true},
        '/blog/**': {static: true},
        // '/loja/**': {static: true},
        '/privacidade': {static: true},
        '/sobre-mim': {static: true},
        '/termos-de-uso': {static: true},
        '/minha-conta/**' : { index: false }
    },
    prerender: {
        routes:[
            '/cadastro',
            '/contato',
            '/esqueci-minha-senha',
            '/login',
            '/blog',
            '/blog/**',
            '/privacidade',
            '/sobre-mim',
            '/termos-de-uso',
        ],
        ignore: ['/minha-conta']
    },
});
