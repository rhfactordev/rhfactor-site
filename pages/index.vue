<script setup>
import {useNuxtApp} from "#app";

const site = useNuxtApp().site
const route = useRoute()
const pageSource = computed(()=> route.params.source || 'index' )

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
        if( section.component == 'VBannerTitle' )
          return resolveComponent('layout/VBannerTitle')
        if( section.component == 'VButton' )
          return resolveComponent('layout/VButton')
        if( section.component == 'VCardDeck' )
          return resolveComponent('layout/VCardDeck')
        if( section.component == 'VCardItem' )
          return resolveComponent('layout/VCardItem')
        if( section.component == 'VFooter' )
          return resolveComponent('layout/VFooter')
        if( section.component == 'VHeader' )
          return resolveComponent('layout/VHeader')
        if( section.component == 'VIntroduction' )
          return resolveComponent('layout/VIntroduction')
        if( section.component == 'VStickyNavbar' )
          return resolveComponent('layout/VStickyNavbar')
        if( section.component == 'VTitle' )
          return resolveComponent('layout/VTitle')
        if( section.component == 'VTopics' )
          return resolveComponent('layout/VTopics')
        if( section.component == 'VImageText' )
          return resolveComponent('layout/VImageText')
        if( section.component == 'VBlogDeck' )
          return resolveComponent('layout/VBlogDeck')
        if( section.component  == 'VHeaderBreadcrumb')
          return resolveComponent('layout/VHeaderBreadcrumb')
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
