<script setup>
import {useNuxtApp} from "#app";

const site = useNuxtApp().site
const route = useRoute()
const pageSource = computed(()=> route.params.source )

const { data : page } = await useFetch('/api/page',{
  query : {
    page : pageSource.value
  }
})

const sections = computed(()=>{
  return page.value.sections.map(section=>{
    return {
      params : section,
      type: ()=>{
        if( section.component == 'BlogList' )
          return resolveComponent('BlogList')
        if( section.component == 'About' )
          return resolveComponent('About')
        if( section.component == 'HeaderTitle' )
          return resolveComponent('HeaderTitle')
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
