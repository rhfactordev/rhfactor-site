<script setup lang="ts">
import VFooter from "~/components/layout/VFooter.vue";
import {useNuxtApp} from "#app";

const site = useNuxtApp().site

const menu = computed(()=>{
  return [
    { title : 'Home' , target : '/' },
    { title : 'Sobre mim' , target : '/sobre-mim' },
    { title : 'Serviços' , target : '/servicos' },
    { title : 'Blog' , target : '/blog' },
    { title : 'Contato' , target : '/contato' },
  ]
})

const whatsappTarget = computed(()=> `https://wa.me/${site.whatsapp.replace(/\D/g,'')}`)

</script>
<template>
  <nuxt-loading-indicator />
  <slot />
  <v-footer :title="site.title"
                 :logo="site.image"
                 :document="site.document"
                 :description="site.description"
                 :phone="site.phone"
                 :email="site.email"
                 :social="site.social"
                 :services="site.servicesLink"
                 :links="site.links"
  />
</template>
