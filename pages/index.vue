<script setup>
import {useNuxtApp} from "#app";

const site = useNuxtApp().site

const page = computed(()=>{
  return {
    title : 'Titulo da Página',
    sections : [
      {
        title: 'Conteúdo Atelier Herbal',
        subtitle: 'A sabedoria das plantas nos auxilia ao autoconhecimento, autocuidado e cuidar de quem amamos para manutenção da vida em equilíbrio.',
        component : 'BlogList',
      }
    ]
  }
})

const sections = computed(()=>{
  return page.value.sections.map(section=>{
    return {
      params : section,
      type: ()=>{
        if( section.component == 'BlogList' )
          return resolveComponent('BlogList')
      }
    }
  })
})

const meta = {
  title: page.value.title,
  ogTitle: page.value.title,
  description: site.description,
  ogDescription: site.description,
  ogImage: site.image
}
useSeoMeta(meta)
useServerSeoMeta(meta)
</script>

<template>
  <main>
      <component v-for="(section, i) in sections"
                 :key="i" :is="section.type()"
                 v-bind="section.params" />

  </main>
</template>
