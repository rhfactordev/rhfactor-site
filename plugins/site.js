export default defineNuxtPlugin(async (nuxtApp) => {
    nuxtApp.site = {
        title: 'Andreza Ferreira Astrologia',
        document: '11.222.333/0001-34',
        description: 'Andreza, 30, Astrologa, Taróloga, Thetahealer, muitas definições para uma pessoa tão especial!',
        image: 'https://www.andrezaastrologia.com.br/andrezaastrologia-logo-alpha.png',
        layout: 'default',
        phone: '15 99999-4444',
        whatsapp: '+55 11 99999-4444',
        email: 'contato@andrezaastrologia.com.br',

        servicesLink : [
            {
                name : 'Mapa Astral',
                target : '/lp/mapa-astral',
            },
        ],

        links : [

        ],

        social : [
            {
                name : 'Facebook',
                target : 'https://www.facebook.com',
                icon : 'ri:facebook-fill'
            },
            {
                name : 'Youtube',
                target: 'https://www.youtube.com',
                icon : 'ri:youtube-fill',
            },
            {
                name: 'Linkedin',
                target: 'https://www.linkedin.com',
                icon : 'ri:linkedin-fill'
            }

        ]


    }
})
