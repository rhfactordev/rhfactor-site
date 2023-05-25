export default defineEventHandler((event) => {

    const name = 'Andreza ferreira'

    const intro = 'Meu propósito é te auxiliar a se conectar com sua essência e entender sua missão de vida através da astrologia! Quer ter essa experiência incrível? Permita-se! Acesses os links abaixo:'

    const image = 'https://images.msha.ke/53dba19a-5a43-46e5-9661-79bdf5875961?auto=format%2Ccompress&amp;cs=tinysrgb&amp;q=30&amp;w=828'

    const links = [
        {
            name : 'Obter meu mapa astral digital!',
            target : 'https://www.andrezaastrologia.com.br/lp/mapa-astral',
        },
        {
            name : 'Consulta - Mapa astral',
            target : 'https://api.whatsapp.com/send?phone=5515981341205',
        },
        {
            name : 'Planejamento Astral',
            target : 'https://api.whatsapp.com/send?phone=5515981341205',
        },
        {
            name : 'Thetahealing',
            target : 'https://api.whatsapp.com/send?phone=5515981341205',
        },
        {
            name : 'Podcast - PodOlhar',
            target : 'https://open.spotify.com/show/6zWDzRfVqPOvBYZzKZb7HQ?si=DhBwcECJQ-OubIGo7yS3Ng',
        },
    ]

    return {
        name,
        intro,
        image,
        links
    }
})
