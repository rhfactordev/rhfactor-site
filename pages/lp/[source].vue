<script setup>
import {initAccordions} from 'flowbite'

const config = useRuntimeConfig()

const route = useRoute()
const source = computed(() => route.params.source)

const { data } = await useFetch(`/api/lp`,{
  params:{
    source
  }
})

definePageMeta({
  layout: 'lp'
});

onMounted(() => {
  initAccordions();
})
</script>

<template>

  <h1>Conteudo</h1>

  <section>
    <div class="container">
      <h2 class="p-10 text-center uppercase mb-3">Entenda como podemos te ajudar com a endometriose</h2>
      <hr class="mb-14"/>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-16 mb-3">
        <div>
          <p>A endometriose afeta cerca de 8 milhões de mulheres no Brasil. Estima-se que de 30% a 50% das mulheres serão diagnosticadas com endometriose em algum momento de sua vida. Você pode ser uma delas. Mas há esperança: a endometriose pode ser controlada e tratada com o programa abrangente e o sistema de apoio da NEO VITA, ajudando a restaurar sua saúde e qualidade de vida. Criamos este programa para ajudar pessoas como você a dar seu primeiro passo em direção ao bem-estar.</p>
          <p>Se você foi diagnosticada ou suspeita que tenha endometriose, há boas notícias. A NEO VITA pode te ajudar a controlar e tratar a doença. Nossa equipe médica trata a endometriose com um programa completo que combina saúde mental, nutrição, fisioterapia, exercícios físicos e mudança de estilo de vida. Se for necessário, também iremos realizar os tratamentos com medicamentos, hormônios ou cirurgia.</p>
          <p>Com a NEO VITA, você receberá orientação médica e atendimento personalizado. Nossa equipe é altamente qualificada, com médicos especialistas e poderá lhe ajudar a enfrentar a causa raiz de sua endometriose, preparando o caminho para uma saúde melhor, com alívio da dor, melhora da qualidade de vida e reestabelecimento da infertilidade.</p>
          <p>A endometriose é uma condição que afeta as mulheres durante seus anos reprodutivos. É uma das doenças mais comuns na saúde reprodutiva feminina, mas infelizmente é muitas vezes mal compreendida e difícil de diagnosticar. De fato, estima-se que até 80% das mulheres com endometriose nunca tenham sido diagnosticadas. Se você tem ou acha que pode ter endometriose, nós gostaríamos de ajudar - clique abaixo para entrar em contato com nossos especialistas.</p>
        </div>
        <div class="text-center mb-3">
          <iframe src="https://www.youtube.com/embed/98GRVxcLHJI" title="YouTube video" allowfullscreen="" class="w-full aspect-video mb-5" data-v-c3fb952c=""></iframe>
          <h3>Transforme o seu desejo, em um sonho realizado com a Neovita. <br/> Nós podemos te ajudar.</h3>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-teal-600">
    <div class="container pb-10">
      <h2 class="p-10 text-white text-center text-3xl">Perguntas Frequentes</h2>
      <hr/>
      <div id="accordion-collapse" class="bg-neutral-100 my-10" data-accordion="collapse">
        <h2 id="accordion-collapse-heading-1">
          <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
            <span>What is Flowbite?</span>
            <svg data-accordion-icon class="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
        </h2>
        <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
          <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
            <p class="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-2">
          <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
            <span>Is there a Figma file available?</span>
            <svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
        </h2>
        <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
          <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
            <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
            <p class="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-3">
          <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
            <span>What are the differences between Flowbite and Tailwind UI?</span>
            <svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
        </h2>
        <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
          <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
            <p class="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
            <p class="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
            <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
            <ul class="pl-5 text-gray-500 list-disc dark:text-gray-400">
              <li><a href="https://flowbite.com/pro/" class="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
              <li><a href="https://tailwindui.com/" rel="nofollow" class="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-teal-400">
    <div class="container grid grid-cols-1 lg:grid-cols-2">
      <div class="p-10 lg:p-20">
        <p class="text-white text-3xl my-10">Sua nova vida começa aqui!</p>
        <p class="text-white border-l border-white pl-6">Preencha o formulário e garanta a oportunidade de conhecer e iniciar o seu tratamento para endometriose. Agende sua consulta com um especialista.</p>
      </div>
      <div class="mb-10">
        <div class="bg-white rounded-md p-10 lg:my-20 mx-auto">
          <BirthForm :serviceId="1" :domain="config.domain" />
        </div>
      </div>
    </div>
  </section>
</template>
