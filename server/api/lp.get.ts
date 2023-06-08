export default defineEventHandler(async (event) => {

    // const body = await readBody(event)
    // const { source } = getQuery(event)
    // const config = useRuntimeConfig()

    const page = {
        title: 'Mapa astrológico',

        headline: 'Mapa Astral: O poder do autoconhecimento',
        subheadline: 'Desbloqueie seu potencial máximo e abrace a autenticidade. Quebre as barreiras que o impedem de alcançar seus sonhos. Descubra seu propósito com nosso Mapa Astral Digital.',

        sections : {
            description : {
                title : "Um caminho incrível para seu autoconhecimento",
                description: '<p class="h5 mb-4">O Mapa Astral traz inúmeros benefícios para quem quer trilhar - ou já está trilhando - a sua jornada de evolução. Através do mapa você consegue ter clareza sobre seus pontos fortes e fracos, seus padrões de relacionamentos, relação com família e amigos, tendências profissionais, desafios astrológicos e muito mais!</p>\n' +
                    '            <p class="h5 mb-4">O nome “Mapa Astral” não é à toa. Ao adquirir o seu, você terá acesso ao mapa da sua jornada aqui na terra. Através dele você terá esclarecimentos, orientações e características únicas que talvez nem mesmo você conheça.</p>\n' +
                    '            <p class="h5 mb-4">Essa ferramenta poderosa te fará entender melhor suas emoções, sentimentos e comportamentos.</p>\n' +
                    '            <p class="h5 mb-4">Conhecer a si mesmo é um processo contínuo, e o Mapa Astral pode te auxiliar nessa caminhada de forma clara e eficiente.</p>\n' +
                    '            <p class="h5 mb-4">Vem comigo nessa jornada única!</p>',
                video: 'https://www.youtube.com/embed/ZZ6j3aB8I2c',
                callToAction:{
                    label : 'Descubra agora seu verdadeiro potencial!'
                }
            },
            about : {
                title : "Quem é Andreza Ferreira?",
                description: '<p>Desde pequena eu tinha interesse por astrologia. Mesmo sem entender muito, meu tio sempre me mostrava os planetas e me dava livros relacionados a esse tema. Minha mãe - professora de geografia – também sempre me incentivou a estudar e a conhecer mais sobre o universo.</p> <p>Por conta da minha religião, eu acabei deixando meu desejo de conhecer mais sobre astrologia de lado, mas algo dentro de mim já me alertava que eu precisava trabalhar com cura.</p> <p>Ouvi o meu chamado e fui fazer enfermagem. Tive uma carreira de 12 anos como enfermeira, mas ainda assim, sentia que não me preenchia por completo. Fui me libertando de algumas crenças religiosas que estavam enraizadas em mim e, em 2014 comecei a estudar astrologia de forma mais recorrente e profunda.</p> <p>Em 2016 me formei como astróloga e agreguei mais cursos para me ajudar em minha trajetória. Cursei Naturopatia, Acupuntura, Thetahealing, Constelação Familiar, Reiki e muitas outras formações que me guiam até hoje.</p> <p>Em 2019 eu comecei a atender profissionalmente como astróloga e, aos poucos, fui incluindo minhas outras especialidades nos meus atendimentos, afinal, cada conhecimento novo se torna uma ferramenta para nosso desenvolvimento.</p> <p>Atualmente, somo mais de 3 mil atendimentos como astróloga.</p> <p>Posso dizer com certeza que a astrologia mudou a minha vida, pois me possibilitou uma vida mais leve e me deu clareza para entender que eu não precisava trabalhar com cura apenas dentro da área da saúde, mas sim, seguir o que me energiza de todas as formas e levar além de cura, autoconhecimento, clareza de seus dons e talentos e expansão de consciência para cada um que se dispõe a se conhecer mais através do que está escrito no universo.</p>',
                image: 'https://s3.amazonaws.com/andrezaastrologia.com.br/images/andrezaferreira-astrologia-foto-bio.jpeg',
                callToAction:{
                    label : 'Quero desvendar meus mistérios internos'
                }
            }

        }
    }

    return page
})
