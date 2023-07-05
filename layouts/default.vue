<script setup lang="ts">
import VStickyNavbar from "~/components/layout/VStickyNavbar.vue";
import VHeader from "~/components/layout/VHeader.vue";
import VFooter from "~/components/layout/VFooter.vue";
import {useNuxtApp} from "#app";

const site = useNuxtApp().site

const menu = computed(()=>{
  return [
    { title : 'Home' , target : '/' },
    { title : 'Sobre mim' , target : '/sobre-mim' },
    { title : 'Serviços' , target : '/servicos' },
  ]
})

</script>
<template>
  <v-header />
  <v-sticky-navbar :title="site.title"
                   :logo="site.image"
                   :menu="menu"
  />
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
