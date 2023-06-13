<script setup>
import {initAccordions} from 'flowbite'

const route = useRoute()
const source = computed(() => route.params.source)


const { data  : page } = await useFetch(`/api/lp`,{
  params:{
    source
  }
})

const hasPage = computed(() => page != null)

// const meta = {
//   title: page.value.title,
//   ogTitle: page.value.title,
//   description: page.value.subheadline,
//   ogDescription: page.value.subheadline,
// }

definePageMeta({
  layout: 'lp'
});

// useSeoMeta(meta)
// useServerSeoMeta(meta)

onMounted(() => {
  initAccordions();
})

</script>

<template>

  <section v-if="hasPage" class="container">
    <h1 class="m-auto text-center py-10 px-5 font-sans text-teal-600">{{ page?.headline || 'Titulo' }}</h1>
    <h2 class="m-auto text-center max-w-2xl text-teal-500 text-md">{{ page?.subheadline || 'Subtitulo' }}</h2>
    <div class="mx-auto max-w-lg ">
      <BirthForm id="mainForm"
                 class="lg:px-5 py-10" :serviceId="1" />
    </div>
  </section>

  <section v-if="hasPage" class="bg-teal-100">
    <div class="container py-10">
      <h2 class="text-3xl text-teal-800 text-center uppercase mb-10">{{ page?.sections.description.title }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-16 mb-3">
        <div v-html="page?.sections.description.description"></div>
        <div class="text-center mb-3">
          <iframe title="Video" class="w-full aspect-video mb-5" :src="page?.sections.description.video" allowfullscreen/>
          <a class="bg-teal-800 hover:bg-teal-700 block text-white shadow-lg shadow-gray-300 p-6 rounded-xl" href="#mainForm">{{ page?.sections.description.callToAction.label }}</a>
        </div>
      </div>
    </div>
  </section>

  <!--
  <section class="bg-teal-600">
    <div class="container pb-10">
      <h2 class="p-10 text-white text-center text-3xl">Perguntas Frequentes</h2>
      <hr/>
      <div id="accordion-collapse" class="bg-white my-10" data-accordion="collapse">

        <h2 id="accordion-collapse-heading-1">
          <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 hover:bg-gray-100" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
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
      </div>
    </div>
  </section>

  <section class="bg-teal-400">
    <div class="container grid grid-cols-1 lg:grid-cols-2">
      <div class="p-10 lg:p-20">
        <p class="text-white text-3xl my-10">Descubra a liberdade que existe no autoconhecimento</p>
        <p class="text-white border-l border-white pl-6">Preencha o formulário e garanta a oportunidade de conhecer e iniciar o seu tratamento para endometriose. Agende sua consulta com um especialista.</p>
      </div>
      <div class="mb-10">
        <div class="bg-white rounded-md p-10 lg:my-20 mx-auto">

        </div>
      </div>
    </div>
  </section>
  -->

  <section v-if="hasPage" class="bg-teal-200">
    <div class="container py-10">
      <h2 class="text-3xl text-teal-800 text-center uppercase mb-10">{{ page?.sections.about.title }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-16 mb-3">
        <div class="md:order-2" v-html="page?.sections.about.description">
        </div>
        <div class="text-center mb-3">
          <img class="w-full mb-5 clear" :src="page?.sections.about.image" :alt="`Image for ${page?.sections.about.title}`"/>
          <a class="bg-teal-400 hover:bg-teal-500 block text-white shadow-lg shadow-gray-300 p-6 rounded-xl" href="#mainForm">{{ page?.sections.about.callToAction.label }}</a>
        </div>
      </div>
    </div>
  </section>

</template>
