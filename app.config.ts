export default defineAppConfig({
    meta: [
        {name: "viewport", content: "width=device-width, initial-scale=1"},
        {charset: "utf-8"}
    ],
    routeRules: {
        '/privacidade': {static: true},
        '/termos-de-uso': {static: true},
    }
})
