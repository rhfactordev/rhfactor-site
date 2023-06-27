const pages = {
    'robertoalves.me' : {
        index : {
            title : `Roberto Alves`,
            sections : [
                {
                    component : 'VIntroduction',
                    pre : "Oi, eu sou... ",
                    title: "Roberto Alves",
                    description : "Apaixonado por tecnologia aplicada a negócios, minha missão é ajudar a empreendores a realizarem seus sonhos.",
                    image : "https://rhfactor-storage.s3.amazonaws.com/5/images/roberto-alves-home-photo.png",
                    actions: [
                        { title : 'Sobre mim', target: '/sobre-mim' , style : 'primary' },
                        { title : 'Me contrate', target: '/contato' , style : 'primary-outline' }
                    ]
                },
                {
                    component : 'VCardDeck',
                    class:"bg-neutral-200",
                    title:"Meus serviços",
                    subtitle:"Veja abaixo alguns dos serviços que posso lhe oferecer",
                    cta:"Quero conhecer todos os serviços",
                    target:"/servicos",
                    items:[
                        {
                            title : 'Desenvolvimento de Produtos Digitais',
                            description: 'Crio soluções digitais personalizadas para impulsionar seu negócio, desde aplicativos e plataformas web até produtos digitais inovadores, alinhados com suas metas e necessidades.',
                            target : '/servicos/produtos-digitais'
                        },
                        {
                            title : 'Mentoria de posicionamento digital',
                            description: 'Oriento você a estabelecer uma presença online estratégica, identificando oportunidades de crescimento, definindo seu público-alvo e desenvolvendo estratégias para aumentar sua visibilidade e autoridade no mercado digital.',
                            target : '/servicos/mentoria-posicionamento-digital'
                        },
                        {
                            title : 'Arquitetura de Sistemas',
                            description: 'Desenvolvo e implemento infraestruturas robustas e escaláveis, garantindo a estabilidade e a segurança de suas aplicações online, além de otimizar o desempenho e a experiência do usuário.',
                            target : '/servicos/desenvolvimento-de-softwares'
                        },
                        {
                            title : 'Tráfego Pago',
                            description: 'Através de estratégias avançadas de publicidade digital, maximizo o potencial das redes sociais e outras plataformas para atrair tráfego segmentado e qualificado ao seu site, aumentando as chances de conversão e alcançando seus objetivos de marketing.',
                            target : '/servicos/trafego-pago'
                        },
                        {
                            title : 'Consultoria de negócios digitais',
                            description: 'Ofereço insights especializados e orientação estratégica para ajudá-lo a impulsionar seu negócio no ambiente digital. Desde análises de mercado até recomendações personalizadas, estou aqui para auxiliá-lo a alcançar resultados sólidos e sustentáveis em sua jornada online.',
                            target : '/servicos/consultoria-negocios-digitais'
                        }
                    ]
                },
                {
                    component : 'VCardDeck',
                    title:"Últimos posts",
                    subtitle:"Leia alguns dos artigos que eu escrevo em meu blog",
                    cta:"Ler mais artigos",
                    target:"/blog",
                    items:[
                        {
                            image : 'https://tony-react.vercel.app/static/img/blog-1.jpg',
                            pre : '10/10/2023',
                            title : 'A importância de ter um site',
                            description: 'Crio soluções digitais personalizadas para impulsionar seu negócio, desde aplicativos e plataformas web até produtos digitais inovadores, alinhados com suas metas e necessidades.',
                            target : '/servicos/produtos-digitais',
                            cta : 'Continuar leitura'
                        },
                        {
                            image : 'https://tony-react.vercel.app/static/img/blog-2.jpg',
                            pre : '10/10/2023',
                            title : 'Existe vida após o tráfego pago?',
                            description: 'Oriento você a estabelecer uma presença online estratégica, identificando oportunidades de crescimento, definindo seu público-alvo e desenvolvendo estratégias para aumentar sua visibilidade e autoridade no mercado digital.',
                            target : '/servicos/mentoria-posicionamento-digital',
                            cta : 'Continuar leitura'
                        },
                        {
                            image : 'https://tony-react.vercel.app/static/img/blog-3.jpg',
                            pre : '10/10/2023',
                            title : 'A agenda secreta do empreendedor!',
                            description: 'Desenvolvo e implemento infraestruturas robustas e escaláveis, garantindo a estabilidade e a segurança de suas aplicações online, além de otimizar o desempenho e a experiência do usuário.',
                            target : '/servicos/desenvolvimento-de-softwares',
                            cta : 'Continuar leitura'
                        },
                    ]
                },
            ]
        },
        'sobre-mim' : {
            title : `Sobre mim`,
            sections : [
                {
                    component : 'HeaderTitle',
                    title : 'Quem é Adriana Guimarães?',
                },
                {
                    component : 'About',
                    title : 'Quem é Adriana Guimarães?',
                    content : '<p>Olá, sou Adriana Guimarães,</p><p>Terapeuta Floral e trabalho com a linguagem das flores através dos Florais de Bach e Elixires. Comecei a me relacionar mais com as plantas através dos estudos dos Florais de Bach, apesar de utiliza-los desde pequena.</p><p>A partir dos Florais me encantei com o universo herbal, suas diversas formas de uso, modo de preparo e utilização. Conheci, também, os óleos essenciais e estabeleci um relacionamento com eles. Hoje trabalho com os Florais de Bach e Elixires como uma farmácia ancestral, com dons medicinais, terapêuticos e naturais. </p><p>Ofereço meu trabalho às pessoas que se cuidam, querem aprofundar o autoconhecimento e têm interesse em utilizar a sabedoria das plantas para manter a vida em equilíbrio, cuidar de quem ama e com a possibilidade de ter uma nova profissão.</p><p>A produção dos Elixires tem raízes ancestrais, pois minhas avó e bisavó trabalhavam com ervas, flores e plantas.</p><p>Através da sabedoria das plantas, conexão e encantamento procuro ajudar pessoas a viverem em equilíbrio físico, mental, emocional e espiritual.</p><p>Com carinho,</p><p>Dri  </p>',
                    image : 'https://adrianaflorais.com.br/wp-content/uploads/2023/01/adriana-12.webp'
                }
            ]
        }
    },
    'adrianaflorais.com.br' : {
        index : {
            title : `Estudio Herbal`,
            sections : [
                {
                    title: 'Aprofunde-se em conhecer-nos!',
                    subtitle: 'A sabedoria das plantas nos auxilia ao autoconhecimento, autocuidado e cuidar de quem amamos para manutenção da vida em equilíbrio.',
                    component : 'GalerySlider',
                },
                {
                    title: 'Aprofunde-se em conhecer-nos!',
                    subtitle: 'A sabedoria das plantas nos auxilia ao autoconhecimento, autocuidado e cuidar de quem amamos para manutenção da vida em equilíbrio.',
                    component : 'BlogList',
                }
            ]
        },
        'sobre-mim' : {
            title : `Sobre mim`,
            sections : [
                {
                    component : 'HeaderTitle',
                    title : 'Quem é Adriana Guimarães?',
                },
                {
                    component : 'About',
                    title : 'Quem é Adriana Guimarães?',
                    content : '<p>Olá, sou Adriana Guimarães,</p><p>Terapeuta Floral e trabalho com a linguagem das flores através dos Florais de Bach e Elixires. Comecei a me relacionar mais com as plantas através dos estudos dos Florais de Bach, apesar de utiliza-los desde pequena.</p><p>A partir dos Florais me encantei com o universo herbal, suas diversas formas de uso, modo de preparo e utilização. Conheci, também, os óleos essenciais e estabeleci um relacionamento com eles. Hoje trabalho com os Florais de Bach e Elixires como uma farmácia ancestral, com dons medicinais, terapêuticos e naturais. </p><p>Ofereço meu trabalho às pessoas que se cuidam, querem aprofundar o autoconhecimento e têm interesse em utilizar a sabedoria das plantas para manter a vida em equilíbrio, cuidar de quem ama e com a possibilidade de ter uma nova profissão.</p><p>A produção dos Elixires tem raízes ancestrais, pois minhas avó e bisavó trabalhavam com ervas, flores e plantas.</p><p>Através da sabedoria das plantas, conexão e encantamento procuro ajudar pessoas a viverem em equilíbrio físico, mental, emocional e espiritual.</p><p>Com carinho,</p><p>Dri  </p>',
                    image : 'https://adrianaflorais.com.br/wp-content/uploads/2023/01/adriana-12.webp'
                }
            ]
        }
    },
    'andrezaastrologia.com.br' : {
        index : {
            title : `Andreza Ferreira Astrologia`,
            sections : [
                {
                    title: 'Conheça mais sobre astrologia',
                    subtitle: 'Leia as últimas postagem em nosso blog e mantenha-se informada sobre todos os trânsitos astrológicos.',
                    component : 'BlogList',
                }
            ]
        },
        'sobre-mim' : {
            title : `Sobre mim`,
            sections : [
                {
                    component : 'HeaderTitle',
                    title : 'Quem é Andreza Ferreira?',
                },
                {
                    component : 'About',
                    title : 'Quem é Andreza Ferreira?',
                    content : '<p>Desde pequena eu tinha interesse por astrologia. Mesmo sem entender muito, meu tio sempre me mostrava os planetas e me dava livros relacionados a esse tema. Minha mãe - professora de geografia – também sempre me incentivou a estudar e a conhecer mais sobre o universo.</p> <p>Por conta da minha religião, eu acabei deixando meu desejo de conhecer mais sobre astrologia de lado, mas algo dentro de mim já me alertava que eu precisava trabalhar com cura.</p> <p>Ouvi o meu chamado e fui fazer enfermagem. Tive uma carreira de 12 anos como enfermeira, mas ainda assim, sentia que não me preenchia por completo. Fui me libertando de algumas crenças religiosas que estavam enraizadas em mim e, em 2014 comecei a estudar astrologia de forma mais recorrente e profunda.</p> <p>Em 2016 me formei como astróloga e agreguei mais cursos para me ajudar em minha trajetória. Cursei Naturopatia, Acupuntura, Thetahealing, Constelação Familiar, Reiki e muitas outras formações que me guiam até hoje.</p> <p>Em 2019 eu comecei a atender profissionalmente como astróloga e, aos poucos, fui incluindo minhas outras especialidades nos meus atendimentos, afinal, cada conhecimento novo se torna uma ferramenta para nosso desenvolvimento.</p> <p>Atualmente, somo mais de 3 mil atendimentos como astróloga.</p> <p>Posso dizer com certeza que a astrologia mudou a minha vida, pois me possibilitou uma vida mais leve e me deu clareza para entender que eu não precisava trabalhar com cura apenas dentro da área da saúde, mas sim, seguir o que me energiza de todas as formas e levar além de cura, autoconhecimento, clareza de seus dons e talentos e expansão de consciência para cada um que se dispõe a se conhecer mais através do que está escrito no universo.</p>',
                    image : 'https://s3.amazonaws.com/andrezaastrologia.com.br/images/andrezaferreira-astrologia-foto-bio.jpeg'
                }
            ]
        }
    }
}

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const { page } = getQuery(event)
    console.log(config.domain)
    return pages[config.domain][page]
})
