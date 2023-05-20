<script setup>
import ETitle from "~/components/elements/ETitle.vue"
import {useNuxtApp} from "#app";

const site = useNuxtApp().site
const metas = {
  title: `Sobre`,
  ogTitle: `Sobre`,
  description: site.description,
  ogDescription: site.description,
  ogImage: site.image
}

const about = {
  title : 'Quem é Andreza Ferreira?',
  content : '<p>Desde pequena eu tinha interesse por astrologia. Mesmo sem entender muito, meu tio sempre me mostrava os planetas e me dava livros relacionados a esse tema. Minha mãe - professora de geografia – também sempre me incentivou a estudar e a conhecer mais sobre o universo.</p> <p>Por conta da minha religião, eu acabei deixando meu desejo de conhecer mais sobre astrologia de lado, mas algo dentro de mim já me alertava que eu precisava trabalhar com cura.</p> <p>Ouvi o meu chamado e fui fazer enfermagem. Tive uma carreira de 12 anos como enfermeira, mas ainda assim, sentia que não me preenchia por completo. Fui me libertando de algumas crenças religiosas que estavam enraizadas em mim e, em 2014 comecei a estudar astrologia de forma mais recorrente e profunda.</p> <p>Em 2016 me formei como astróloga e agreguei mais cursos para me ajudar em minha trajetória. Cursei Naturopatia, Acupuntura, Thetahealing, Constelação Familiar, Reiki e muitas outras formações que me guiam até hoje.</p> <p>Em 2019 eu comecei a atender profissionalmente como astróloga e, aos poucos, fui incluindo minhas outras especialidades nos meus atendimentos, afinal, cada conhecimento novo se torna uma ferramenta para nosso desenvolvimento.</p> <p>Atualmente, somo mais de 3 mil atendimentos como astróloga.</p> <p>Posso dizer com certeza que a astrologia mudou a minha vida, pois me possibilitou uma vida mais leve e me deu clareza para entender que eu não precisava trabalhar com cura apenas dentro da área da saúde, mas sim, seguir o que me energiza de todas as formas e levar além de cura, autoconhecimento, clareza de seus dons e talentos e expansão de consciência para cada um que se dispõe a se conhecer mais através do que está escrito no universo.</p>',
  image : 'https://s3.amazonaws.com/andrezaastrologia.com.br/images/andrezaferreira-astrologia-foto-bio.jpeg'
}

useSeoMeta(metas)
useServerSeoMeta(metas)
</script>

<template>
  <main>
    <e-title>{{ about.title }}</e-title>
    <section class="m-auto w-full p-5 md:w-8/12">
      <div class="grid grid-cols-1 md:grid-cols-2 md:gap-10">
        <div class="mb-6">
          <img class="w-full" :src="about.image" :alt="`Imagem de ${about.title}`" />
        </div>
        <div v-html="about.content"></div>
      </div>
    </section>
  </main>
</template>
