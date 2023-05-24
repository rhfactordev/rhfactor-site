import { defineNitroConfig } from "nitropack/config";

export default defineNitroConfig({
    routeRules: {
        '/cadastro': {static: true},
        '/contato': {static: true},
        '/esqueci-minha-senha': {static: true},
        '/login': {static: true},
        // '/loja/**': {static: true},
        '/privacidade': {static: true},
        '/sobre-mim': {static: true},
        '/termos-de-uso': {static: true},
    },
    prerender: {
        ignore: ['/minha-conta']
    },
});
