export default defineNuxtPlugin(async (nuxtApp) => {
    nuxtApp.site = {
        title: 'Andreza Ferreira Astrologia',
        description: 'Andreza, 30, Astrologa, Taróloga, Thetahealer, muitas definições para uma pessoa tão especial!',
        image: 'https://www.andrezaastrologia.com.br/andrezaastrologia-logo-alpha.png',
        layout: 'default',
        phone: '15 99999-4444',
        whatsapp: '+55 11 99999-4444',
        email: 'contato@andrezaastrologia.com.br',
        social : [
            {
                name : 'Facebook',
                target : '',
                icon : 'ri:facebook-fill'
            },
            {
                name : 'Youtube',
                target: '',
                icon : 'ri:youtube-fill',
            },
            {
                name: 'Linkedin',
                target: '',
                icon : 'ri:linkedin-fill'
            }

        ]


    }
})
